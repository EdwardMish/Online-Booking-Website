import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { Row, Col, Modal, Button } from "antd";
import useSWR from "swr";
import TagManager from "react-gtm-module";
import fetch from "isomorphic-unfetch";
import { isArray, isEmpty } from "lodash";
import { Temporal } from "@js-temporal/polyfill";

import { getDeviceType } from "library/helpers/get-device-type";
import Container from "components/UI/Container/Container";
import Description from "containers/SinglePage/Description/Description";
import Amenities from "containers/SinglePage/Amenities/Amenities";
import Location from "containers/SinglePage/Location/Location";
import NearBy from "containers/SinglePage/NearBy/NearBy";
import Reservation from "containers/SinglePage/Reservation/Reservation";
import TopBar from "containers/SinglePage/TopBar/TopBar";
import SinglePageWrapper, { PostImage } from "containers/SinglePage/SinglePageView.style";
import PostImageGallery from "containers/SinglePage/ImageGallery/ImageGallery";
import BannerSlider from "containers/SinglePage/BannerSlider/BannerSlider";
import SingleDatePickerWrapper from "components/UI/SinglePageDatePicker/SinglePageDatePicker";
import Text from "components/UI/Text/Text";
import WhyChoose from "components/WhyChoose";
import BlankPage from "../../containers/blankPage";

import { GetServerSideProps } from "next";
import { Clicktripz } from "components/Clicktripz";
import NoContents from "components/NoContents";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

interface HotelPageProps {
  deviceType: "mobile" | "tablet" | "desktop";
  isReferrerValid: boolean;
}

function HotelPage(props: HotelPageProps) {
  const { deviceType, isReferrerValid } = props;

  const router = useRouter();
  const { query } = router;

  const [isModalShowing, setIsModalShowing] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const rooms = useMemo<{ adults: number; children: number }[]>(() => {
    try {
      return (JSON.parse(query.room as string) as number[][]).map((ages) => {
        const adults = ages.filter((age) => age >= 18).length;
        return {
          adults,
          children: ages.length - adults,
        };
      });
    } catch (e) {
      console.log(`Could not parse query string parameter rooms=${query.rooms}.\nReason why:`, e);

      return [];
    }
  }, []);

  useEffect(() => {
    if (!isReferrerValid) {
      setShowDatePicker(true);
    }
  }, [isReferrerValid]);

  const { data, error } = useSWR(
    `/api/hotel-single?id=${query.id}&start=${query.start}&end=${query.end}&room=${query.room}`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <BlankPage />;
  const {
    star_rating,
    name: { en: name = "" },
    images,
    description,
    amenities,
    address,
    author,
    availableRooms,
  } = data;

  const fullAddress = `${address.street_address.en} ${address.locality.en} ${address.region.en} ${address.country_code}`;

  const handleChangeStay = (searchQuery: string) => {
    const origin = window.location.origin + window.location.pathname;
    const url = `${origin}?id=${query.id}&${searchQuery}`;

    const tagManagerArgs = {
      dataLayer: {
        event: "Update Search",
        page_type: "hotel_property",
        locality: address?.locality.en,
        check_in: query.start,
        check_out: query.end,
        rooms: rooms.length,
        adult_guests: rooms.reduce((adults, room) => adults + room.adults, 0),
        child_guests: rooms.reduce((children, room) => children + room.children, 0),
        hotel_name: name,
        hotel_id: query.id,
        hotel_address: address?.street_address.en,
        hotel_city: address?.locality.en,
        hotel_state_province: address?.region.en,
        hotel_country: address?.country_code,
      },
      dataLayerName: "PageDataLayer",
    };

    TagManager.dataLayer(tagManagerArgs);

    Router.push(url);
  };

  const tagManagerArgs = {
    dataLayer: {
      event: "View Hotel Property",
      page_type: "hotel_property",
      locality: address?.locality.en,
      check_in: query.start,
      check_out: query.end,
      rooms: rooms.length,
      adult_guests: rooms.reduce((adults, room) => adults + room.adults, 0),
      child_guests: rooms.reduce((children, room) => children + room.children, 0),
      hotel_name: name,
      hotel_id: query.id,
      hotel_address: address?.street_address.en,
      hotel_city: address?.locality.en,
      hotel_state_province: address?.region.en,
      hotel_country: address?.country_code,
    },
    dataLayerName: "PageDataLayer",
  };

  TagManager.dataLayer(tagManagerArgs);

  return (
    <>
      <Head>
        <title>{name} | Reservations Center</title>
      </Head>

      <SinglePageWrapper>
        <Container fluid={false}>
          <TopBar
            title={name}
            shareURL={window.location.href.split("?")[0]}
            author={author}
            rating={star_rating}
            ratingCount={star_rating}
            location={fullAddress}
          />
          {!!images.length && (
            <PostImage>
              <BannerSlider images={images} />
              <Button
                type="primary"
                onClick={() => setIsModalShowing(true)}
                className="image_gallery_button"
                shape="round"
              >
                {`${images.length} Photos`}
              </Button>
            </PostImage>
          )}
          <SingleDatePickerWrapper changeStay={handleChangeStay} query={query} modal={false} />

          <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
            <Col xl={24}>
              {isEmpty(availableRooms) ? (
                <NoContents />
              ) : (
                <Reservation
                  rooms={
                    isArray(availableRooms)
                      ? availableRooms.sort(
                          (a, b) => a["booking-pricing"]["lowest-average"] - b["booking-pricing"]["lowest-average"]
                        )
                      : [availableRooms]
                  }
                  deviceType={deviceType}
                  roomTypes={data.room_types}
                  defaultImage={images[0]}
                  amenities={amenities}
                  dataLayer={tagManagerArgs.dataLayer}
                />
              )}
            </Col>
            <Col xl={24}>
              <Description
                content={description.en}
                title={name}
                location={`${address.street_address.en} ${address.locality.en} ${address.region.en} ${address.country_code}`}
                rating={star_rating}
                ratingCount={star_rating}
              />

              <Row gutter={[16, 16]} style={{ marginTop: "5%" }}>
                <Col xl={12} xs={24}>
                  <Text content={description.en} />
                </Col>
                <Col xl={12} xs={24}>
                  <Text content={description.en} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Amenities amenities={amenities} />
          <Location location={data} />
          {/* <NearBy deviceType={deviceType} image={images[0]} /> */}
          <WhyChoose />
        </Container>
      </SinglePageWrapper>

      <Modal
        centered
        title={<ModalTitle hotelName={name} />}
        visible={showDatePicker && window.location.search.includes("modal")}
        onCancel={() => setShowDatePicker(false)}
        footer={null}
      >
        <SingleDatePickerWrapper changeStay={handleChangeStay} query={query} modal />
      </Modal>

      <Modal
        visible={isModalShowing}
        onCancel={() => setIsModalShowing(false)}
        footer={null}
        width="100%"
        maskStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
        wrapClassName="image_gallery_modal"
        closable={false}
      >
        <>
          <PostImageGallery images={images} />
          <Button onClick={() => setIsModalShowing(false)} className="image_gallery_close">
            <svg width="16.004" height="16" viewBox="0 0 16.004 16">
              <path
                id="_ionicons_svg_ios-close_2_"
                d="M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z"
                transform="translate(-160.5 -160.55)"
                fill="#909090"
              />
            </svg>
          </Button>
        </>
      </Modal>

      <Clicktripz
        propertyId={query.id as string}
        propertyName={name}
        propertyAddress={fullAddress}
        propertyLatitude={address.latitude}
        propertyLongitude={address.longitude}
        checkInDate={query.start as string}
        checkOutDate={query.end as string}
        rooms={rooms.map((room) => ({ ...room, infants: 0 }))}
        city={address.locality.en}
        province={address.region.en}
        countryCode={address.country_code}
      />
    </>
  );
}

const ModalTitle = ({ hotelName }: { hotelName: string }) => {
  return (
    <>
      <h3 style={{ margin: "1.5rem 0px 0.5rem", textAlign: "center", fontWeight: "bold" }}>{hotelName}</h3>
      <h4 style={{ margin: 0, textAlign: "center" }}>Select Your Dates</h4>
    </>
  );
};

const getServerSideProps: GetServerSideProps<HotelPageProps> = async (context) => {
  const { req, query, resolvedUrl } = context;

  const [checkIn, checkOut] = [query.start as string, query.end as string].map((dateString) => {
    const isAmericanDate = /\d{2}\/\d{2}\/\d{4}/.test(dateString);
    if (!isAmericanDate) {
      return Temporal.PlainDate.from(dateString);
    }

    const [month, day, year] = dateString.split("/").map(Number);

    return Temporal.PlainDate.from({ day, month, year });
  });

  const now = Temporal.Now.plainDateISO();
  const isCheckInPast = Temporal.PlainDate.compare(checkIn, now) < 0;
  if (isCheckInPast) {
    const newCheckIn = now;

    const [path, queryString] = resolvedUrl.split("?");
    const query = new URLSearchParams(queryString);
    query.set("start", newCheckIn.toString());

    return {
      redirect: {
        destination: `${path}?${query.toString()}`,
        permanent: false,
      },
    };
  }

  const isCheckOutBeforeCheckIn = Temporal.PlainDate.compare(checkOut, checkIn) <= 0;
  if (isCheckOutBeforeCheckIn) {
    const newCheckOut = checkIn.add({ days: 1 });

    const [path, queryString] = resolvedUrl.split("?");
    const query = new URLSearchParams(queryString);
    query.set("end", newCheckOut.toString());

    return {
      redirect: {
        destination: `${path}?${query.toString()}`,
        permanent: false,
      },
    };
  }

  const referrer = req.headers.referer;
  const props: HotelPageProps = {
    deviceType: getDeviceType(req) as "tablet" | "mobile" | "desktop",
    isReferrerValid: referrer?.includes(process.env.NEXT_PUBLIC_SERVER_API as string) ?? false,
  };

  return {
    props,
  };
};

export default HotelPage;
export { getServerSideProps };
