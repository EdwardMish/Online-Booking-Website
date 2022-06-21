import { useEffect, useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import { Form, Modal } from "antd";
import styled from "styled-components";
import moment from "moment";
import creditCardType from "credit-card-type";
import orderId from "order-id";
import TagManager from "react-gtm-module";
import { Temporal } from "@js-temporal/polyfill";

import { CountdownTimer } from "components/CountdownTimer";
import { CheckoutSummary } from "components/Checkout/CheckoutSummary";
import { CheckoutStep } from "components/Checkout/CheckoutStep";
import { BillingAddressForm } from "components/Checkout/BillingAddressForm";
import { PersonalDetailsForm } from "components/Checkout/PersonalDetailsForm";
import { PaymentForm } from "components/Checkout/PaymentForm";
import { PropertyCard } from "components/Checkout/PropertyCard";
import { RoomCard } from "components/Checkout/RoomCard";

import { GET_A_ROOM_CLIENT } from "settings/endpoint";
import Router from "next/router";
import Head from "next/head";
import { Clicktripz, clicktripzSubmitProps } from "components/Clicktripz";

const StyledContainer = styled.div`
  display: flex;
  max-width: 1370px;
  flex-direction: column;
  padding: 0 30px;
  margin: auto;
  margin-bottom: 100px;

  @media (min-width: 992px) {
    padding: 0 3%;
  }
`;

const FormGridDiv = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr;

  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const ErrorSpan = styled.span`
  color: #ff4d4f;
  font-size: 14px;
`;

const FormFooterDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 28px;

  @media (min-width: 993px) {
    grid-template-columns: auto auto;
    justify-content: start;
  }
`;

const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #e5e5e5;
  margin: 0;
`;

const SubmitButton = styled("button").withConfig({ shouldForwardProp: () => true })`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #ffbf29;
  color: #2d2d2d;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  padding: 27px 49px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: background-color 120ms;

  :hover,
  :focus {
    outline: 1px solid black;
  }

  :disabled {
    background-color: #ebd08f;
    cursor: not-allowed;
    outline: none;
  }

  ::after {
    content: ">";
    display: inline-flex;
    align-items: center;
    color: #9d805c;
    margin-bottom: -3px;
  }
`;

interface NewCheckoutErrorProps {
  error: any;
}

interface NewCheckoutProps {
  propertyId: string;
  propertyName: string;
  propertyImages: string[];
  propertyAddress: string;
  propertyCountry: string;
  propertyCity: string;
  propertyLatitude: number;
  propertyLongitude: number;
  propertyState: string;
  propertyStarRating: number;

  roomId: string;
  roomName: string;
  roomImages: string[];
  amenities: string[];

  checkIn: string;
  checkOut: string;
  agesPerRoom: number[][];
  ratePlanCode: string;
  roomCount: number;
  adultsCount: number;
  childrenCount: number;

  currency: string;
  averagePricePerNight: number;
  pricePerNight: number[];
  taxes: number;
  fees: number;
  subtotal: number;
  totalPrice: number;

  cancellationPolicy: string | null;
  feesCollectedAtProperty: {
    amount: number;
    name: string;
    currency: string;
  }[];
}

function NewCheckout(props: NewCheckoutProps | NewCheckoutErrorProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionErrors, setSubmissionErrors] = useState<string[]>([]);
  const [booking, setBooking] = useState<any>(null);

  if ("error" in props) {
    return (
      <StyledContainer style={{ textAlign: "center", marginTop: 60 }}>
        <Head>
          <title>Checkout | Reservations Center</title>
        </Head>
        <h1>
          We were unable to start your checkout. <br />
          Please try again or go back
        </h1>
      </StyledContainer>
    );
  }

  const {
    propertyId,
    propertyName,
    propertyImages,
    propertyAddress,
    propertyCountry,
    propertyCity,
    propertyState,
    propertyLatitude,
    propertyLongitude,
    propertyStarRating,
    roomId,
    roomName,
    roomImages,
    amenities,
    checkIn,
    checkOut,
    agesPerRoom,
    ratePlanCode,
    adultsCount,
    childrenCount,
    roomCount,
    currency,
    averagePricePerNight,
    pricePerNight,
    fees,
    taxes,
    subtotal,
    totalPrice,
    cancellationPolicy,
    feesCollectedAtProperty,
  } = props;

  const fullAddress = `${propertyAddress} ${propertyCity} ${propertyState} ${propertyCountry}`;

  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  useEffect(function dispatchAnalytics() {
    const checkoutPlainDate = Temporal.PlainDate.from(checkOut);
    const duration = checkoutPlainDate.since(checkIn);
    const nights = duration.days;

    TagManager.dataLayer({
      dataLayerName: "PageDataLayer",
      dataLayer: {
        event: "View Reservation Details",
        page_type: "checkout",
        check_in: checkIn,
        check_out: checkOut,
        adult_guests: adultsCount,
        child_guests: childrenCount,
        rooms: roomCount,
        hotel_id: propertyId,
        hotel_name: propertyName,
        hotel_address: propertyAddress,
        hotel_country: propertyCountry,
        hotel_city: propertyCity,
        hotel_state_province: propertyState,
        locality: propertyCity,
        currency,
        rate: averagePricePerNight,
        subtotal,
        taxes_fees: taxes + fees,
        total: totalPrice,
        nights,
      },
    });
  }, []);

  async function handleSubmit(values: any) {
    setIsSubmitting(true);
    setSubmissionErrors([]);

    function getCardTypeFromNumber(creditCardNumber: string) {
      const guesses = creditCardType(creditCardNumber);
      const mostConfidentGuess = guesses[0];
      const guessedCardType = mostConfidentGuess.type;

      const normalizedCardTypes: Record<string, string> = {
        visa: "visa",
        mastercard: "master",
        discover: "discover",
        "american-express": "american_express",
      };

      return normalizedCardTypes[guessedCardType] ?? guessedCardType;
    }

    try {
      const uniqueId = orderId("key").generate();

      const response = await fetch("/api/book/book-room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version: "1.1",
          itinerary: {
            point_of_sale: "web",
            reservations: [
              {
                rooms: agesPerRoom.map((ages) => ({
                  given_name: values.firstName,
                  family_name: values.lastName,
                  guest_ages: ages,
                })),
                tax: taxes,
                fees: fees,
                subtotal: subtotal,
                total: totalPrice,
                check_in: checkIn,
                check_out: checkOut,
                property_uuid: propertyId,
                room_type_uuid: roomId,
                rate_plan_code: ratePlanCode,
                email: values.email,
              },
            ],
            affiliate_token: "cbd58c49",
            affiliate_session_code: "bookroomonline",
            affiliate_customer_code: "bookroomonline",
            custom_fields: {
              confirmation: `bro-${uniqueId}`,
            },
            payment: {
              credit_card: {
                brand: getCardTypeFromNumber(values.cardNumber),
                billing_phone: values.phone,
                credit_card_verification_number: values.code,
                expiration: {
                  month: (moment(values.expireMonth).month() + 1).toString().padStart(2, "0"),
                  year: moment(values.expireYear).year().toString(),
                },
                credit_card_account_number: values.cardNumber.split(" ").join(""),
                billing_address: {
                  region: values.state,
                  country_name: values.country,
                  postal_code: values.zip,
                  street_address: values.streetAddress,
                  locality: values.city,
                },
                cardholder_name: {
                  given_name: values.firstNameOnCard,
                  family_name: values.lastNameOnCard,
                },
              },
            },
          },
        }),
      });

      const json = await response.json();
      if (response.ok) {
        const booking = json as GetARoomAPI.ItinerarySuccess;

        setBooking(booking);

        const checkoutPlainDate = Temporal.PlainDate.from(checkOut);
        const duration = checkoutPlainDate.since(checkIn);
        const nights = duration.days;

        TagManager.dataLayer({
          dataLayerName: "PageDataLayer",
          dataLayer: {
            event: "Book Reservation",
            page_type: "confirmation",
            transaction_id: booking.reservations[0].getaroom_reservation_token,
            check_in: checkIn,
            check_out: checkOut,
            adult_guests: adultsCount,
            child_guests: childrenCount,
            rooms: roomCount,
            hotel_id: propertyId,
            hotel_name: propertyName,
            hotel_address: propertyAddress,
            hotel_country: propertyCountry,
            hotel_city: propertyCity,
            hotel_state_province: propertyState,
            locality: propertyCity,
            currency,
            rate: averagePricePerNight,
            subtotal,
            taxes_fees: taxes + fees,
            total: totalPrice,
            nights,
          },
        });
      } else {
        const error = json as { message: string };
        const message = error.message;
        setSubmissionErrors([message]);
      }
    } catch (e) {
      console.log("Something went wrong while booking", e);
    } finally {
      setIsSubmitting(false);
    }
  }

  const disclaimers = useMemo<string[]>(() => {
    const disclaimers = [];

    if (cancellationPolicy) {
      disclaimers.push(cancellationPolicy);
    }

    for (const fee of feesCollectedAtProperty) {
      const { amount, currency, name } = fee;

      const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      });
      const price = priceFormatter.format(amount);

      disclaimers.push(
        `Hotel fees of ${price} ${name} will be collected by the property itself at check-in or check-out.`
      );
    }

    return disclaimers;
  }, [feesCollectedAtProperty, cancellationPolicy]);

  return (
    <StyledContainer>
      <Head>
        <title>Checkout | Reservations Center</title>
      </Head>
      <PropertyCard
        name={propertyName}
        address={fullAddress}
        starRating={propertyStarRating}
        images={propertyImages}
        style={{ marginBottom: 25 }}
      />
      <RoomCard
        name={roomName}
        amenities={amenities}
        images={roomImages.concat(propertyImages)}
        style={{ marginBottom: 25 }}
      />
      <FormGridDiv>
        <Form onFinish={handleSubmit}>
          <CountdownTimer onExpiration={() => Router.back()} style={{ marginBottom: 25 }} />
          <Hr />
          <CheckoutStep number={1} total={3} title="Confirm your booking">
            <PersonalDetailsForm disabled={isSubmitting} />
          </CheckoutStep>
          <Hr />
          <CheckoutStep number={2} total={3} title="Billing address">
            <BillingAddressForm disabled={isSubmitting} />
          </CheckoutStep>
          <Hr />
          <CheckoutStep number={3} total={3} title="Secure payment details">
            <PaymentForm disabled={isSubmitting} />
          </CheckoutStep>
          {submissionErrors.length > 0 && (
            <ul style={{ marginBottom: 10 }}>
              {submissionErrors.map((submissionError) => (
                <ErrorSpan role="alert" key={submissionError}>
                  {submissionError}
                </ErrorSpan>
              ))}
            </ul>
          )}
          <FormFooterDiv>
            <SubmitButton type="submit" disabled={isSubmitting} {...clicktripzSubmitProps}>
              Complete reservation
            </SubmitButton>
            <img width="163" height="56" src="/images/symantec.png" style={{ objectFit: "contain" }} />
          </FormFooterDiv>
        </Form>
        <CheckoutSummary
          checkIn={checkIn}
          checkOut={checkOut}
          roomCount={roomCount}
          guestCount={adultsCount + childrenCount}
          averagePricePerNight={priceFormatter.format(averagePricePerNight)}
          pricePerNight={pricePerNight.map((price) => priceFormatter.format(price))}
          taxesAndServiceFees={priceFormatter.format(taxes + fees)}
          totalPrice={priceFormatter.format(totalPrice)}
          disclaimers={disclaimers}
        />
      </FormGridDiv>
      <Modal
        title="Booking complete!"
        visible={booking !== null}
        onOk={() => {
          const referenceNumber = booking?.custom_fields?.confirmation;

          const firstName = booking?.travelers?.[0]?.name?.given_name;
          const lastName = booking?.travelers?.[0]?.name?.family_name;

          const query = new URLSearchParams();
          query.set("firstName", firstName);
          query.set("lastName", lastName);

          Router.push(`/booking/${referenceNumber}?${query.toString()}`);
        }}
        cancelButtonProps={{
          style: { display: "none" },
        }}
        closable={false}
        okText="Okay"
      >
        <span>
          <h1 style={{ fontSize: "18px", margin: "0 0 32px 0" }}>Booking Success!</h1>

          <h2 style={{ fontSize: "16px", margin: 0 }}>
            <b>Reference Number</b>
          </h2>
          <p style={{ textTransform: "uppercase" }}>{booking?.custom_fields?.confirmation}</p>

          <h2 style={{ fontSize: "16px", margin: 0 }}>
            <b>Check In</b>
          </h2>
          <p>{booking?.reservations[0]?.check_in}</p>

          <h2 style={{ fontSize: "16px", margin: 0 }}>
            <b>Check Out</b>
          </h2>
          <p>{booking?.reservations[0]?.check_out}</p>

          {booking?.reservations.map((reservation: any) => (
            <>
              <b style={{ fontSize: "small", opacity: 0.7 }}>NOTE: </b>
              <i style={{ fontSize: "small", opacity: 0.7 }}>{reservation.check_in_instructions}</i>
            </>
          ))}
        </span>
      </Modal>

      <Clicktripz
        propertyId={propertyId}
        propertyName={propertyName}
        propertyAddress={fullAddress}
        propertyLatitude={propertyLatitude}
        propertyLongitude={propertyLongitude}
        checkInDate={checkIn}
        checkOutDate={checkOut}
        rooms={agesPerRoom.map((ages) => {
          const adults = ages.filter((age) => age >= 18).length;

          return {
            adults,
            children: ages.length - adults,
            infants: 0,
          };
        })}
        city={propertyCity}
        province={propertyState}
        countryCode={propertyCountry}
      />
    </StyledContainer>
  );
}

interface NewCheckoutQuery {
  propertyId: string;
  roomId: string;
  ratePlanCode: string;
  ages: string;
  checkIn: string;
  checkOut: string;
  [key: string]: string | undefined;
}

const getServerSideProps: GetServerSideProps<NewCheckoutProps | NewCheckoutErrorProps> = async (context) => {
  const query = context.query as NewCheckoutQuery;

  try {
    const [property, availability] = await Promise.all([
      GET_A_ROOM_CLIENT.getSingleProperty(query.propertyId),
      GET_A_ROOM_CLIENT.prebook(query.propertyId, {
        checkInDate: query.checkIn,
        checkOutDate: query.checkOut,
        rInfo: query.ages,
        ratePlanCode: query.ratePlanCode,
        roomId: query.roomId,
      }),
    ]);

    function asArray<T>(value: T | T[] | null | undefined): T[] {
      if (Array.isArray(value)) {
        return value;
      }

      if (value === null || value === undefined) {
        return [];
      }

      return [value];
    }

    const rooms = asArray(availability.roomStays.roomStay);
    if (rooms.length === 0) {
      throw "No rooms available";
    }

    const room = rooms[0];
    const roomType = property.room_types.find((type) => type.id === room.room.roomId);
    const pricing = room.bookingPricing;
    const nightlyRates = asArray(pricing.nightlyRates?.nightlyRate);
    const feesCollectedAtProperty = asArray(room.feesCollectedAtProperty?.fee);

    const checkIn = availability.roomStays.request.checkIn;
    const checkOut = availability.roomStays.request.checkOut;
    const [checkInPlainDate, checkOutPlainDate] = [checkIn, checkOut].map((dateString) => {
      const isAmericanDate = /\d{2}\/\d{2}\/\d{4}/.test(dateString);
      if (!isAmericanDate) {
        return Temporal.PlainDate.from(dateString);
      }

      const [month, day, year] = dateString.split("/").map(Number);

      return Temporal.PlainDate.from({ day, month, year });
    });

    const props: NewCheckoutProps = {
      propertyId: room.room.hotelId,
      propertyName: property.name.en,
      propertyImages: property.images.map((image) => image.urls.default),
      propertyCountry: property.address.country_code,
      propertyCity: property.address.locality.en,
      propertyState: property.address.region.en,
      propertyLatitude: property.address.latitude,
      propertyLongitude: property.address.longitude,
      propertyAddress: property.address.street_address.en,
      propertyStarRating: property.star_rating,

      roomId: room.room.roomId,
      roomName: room.room.title,
      roomImages: roomType?.images?.map((image) => image.urls.default) ?? [],
      amenities: property.amenities.map((amenity) => amenity.name.en),

      checkIn: checkInPlainDate.toString(),
      checkOut: checkOutPlainDate.toString(),
      agesPerRoom: JSON.parse(query.ages) as number[][],
      ratePlanCode: query.ratePlanCode,
      roomCount: availability.roomStays.request.rooms,
      adultsCount: availability.roomStays.request.adults,
      childrenCount: availability.roomStays.request.children,

      currency: pricing.currency,
      averagePricePerNight: pricing.lowestAverage,
      pricePerNight: nightlyRates.map((nightlyRate) => nightlyRate.rate),
      taxes: pricing.taxes,
      fees: pricing.fees,
      subtotal: pricing.subtotal,
      totalPrice: pricing.total,

      cancellationPolicy: room.cancellationPolicy,
      feesCollectedAtProperty: feesCollectedAtProperty.map((fee) => ({
        amount: fee.amount,
        currency: fee.currency,
        name: fee.name,
      })),
    };

    return { props };
  } catch (e) {
    console.log(e);
    const props: NewCheckoutErrorProps = {
      error: JSON.stringify(e),
    };

    return { props };
  }
};

export default NewCheckout;
export { getServerSideProps };
