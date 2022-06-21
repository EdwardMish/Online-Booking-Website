import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import Head from "next/head";
import Router from "next/router";

import Container from "components/UI/Container/Container";
import { GET_A_ROOM_CLIENT } from "settings/endpoint";

import type { GetServerSideProps } from "next";

const Dl = styled.dl`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 20px;
  gap: 10px;
  font-size: 16px;

  dt {
    opacity: 0.7;
    white-space: nowrap;
  }

  dd {
    margin: 0;
  }
`;

const CancelButton = styled.button`
  color: white;
  margin-left: auto;
  background-color: #cd3838;
  border: 0;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const StyledContainer = styled(Container as any)`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  margin-bottom: 30px;
  gap: 20px;
`;

const ErrorLi = styled.li`
  color: #cd3838;
`;

interface BookingPageProps {
  id: string;
  firstName: string;
  lastName: string;
  checkIn: string;
  checkOut: string;
  hotelName: string;
  roomName: string;
  bookingDate: string;
  reservationStatus: string;
}

const COLOR_BY_STATUS: Record<string, string> = {
  confirmed: "#31b0a9",
  cancelled: "#cd3838",
};

function BookingPage(props: BookingPageProps) {
  const { id, hotelName, firstName, lastName, checkIn, checkOut, bookingDate, reservationStatus, roomName } = props;

  const [isConfirmingCancel, setIsConfirmingCancel] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [cancelErrors, setCancelErrors] = useState([]);

  useEffect(() => {
    if (!isCancelling || !isConfirmingCancel) {
      return;
    }

    const controller = new AbortController();

    async function cancel() {
      const url = new URL(`/api/booking/${id}/cancel`, window.location.origin);
      url.searchParams.set("firstName", firstName);
      url.searchParams.set("lastName", lastName);

      try {
        setCancelErrors([]);

        const response = await fetch(url.toString(), {
          method: "PUT",
          signal: controller.signal,
        });

        if (response.ok) {
          Router.reload();
        } else {
          const json = await response.json();
          setCancelErrors(json.errors.map((error: any) => error.message));
        }
      } catch (e) {
        console.log("Could not cancel: ", e);
      } finally {
        setIsCancelling(false);
      }
    }

    cancel();

    return () => {
      controller.abort();
    };
  }, [isConfirmingCancel, isCancelling]);

  return (
    <>
      <Head>
        <title>Reservations Center | Booking</title>
      </Head>

      <StyledContainer>
        <h1>
          Booking <b style={{ textTransform: "uppercase" }}>#{id}</b>
        </h1>
        <Dl>
          <dt>Name</dt>
          <dd>
            {firstName} {lastName}
          </dd>
          <dt>Check-in</dt>
          <dd>{checkIn}</dd>
          <dt>Check-in</dt>
          <dd>{checkOut}</dd>
          <dt>Hotel</dt>
          <dd>{hotelName}</dd>
          <dt>Room</dt>
          <dd>{roomName}</dd>
          <dt>Booked at</dt>
          <dd>{new Date(bookingDate).toISOString().split("T")[0]}</dd>
          <dt>Status</dt>
          <dd
            style={{
              color: COLOR_BY_STATUS[reservationStatus],
              textTransform: "capitalize",
            }}
          >
            {reservationStatus}
          </dd>
        </Dl>
        {reservationStatus !== "cancelled" && (
          <CancelButton onClick={() => setIsConfirmingCancel(true)}>Cancel</CancelButton>
        )}
        <Modal
          title="Are you sure?"
          visible={isConfirmingCancel}
          cancelText="Nevermind"
          okType="danger"
          okText="Cancel Booking"
          onCancel={() => setIsConfirmingCancel(false)}
          onOk={() => setIsCancelling(true)}
          confirmLoading={isCancelling}
        >
          This action is irreversible!
          {cancelErrors.length > 0 && (
            <div style={{ marginTop: 20 }}>
              <b>Cancelation failed due to:</b>
              <ul>
                {cancelErrors.map((error) => (
                  <ErrorLi key={error}>{error}</ErrorLi>
                ))}
              </ul>
            </div>
          )}
        </Modal>
      </StyledContainer>
    </>
  );
}

const getServerSideProps: GetServerSideProps<BookingPageProps> = async (context) => {
  const { query } = context;

  const id = Array.isArray(query.id) ? query.id[0] : query.id!;
  const firstName = Array.isArray(query.firstName) ? query.firstName[0] : query.firstName;
  const lastName = Array.isArray(query.lastName) ? query.lastName[0] : query.lastName;

  const result = await GET_A_ROOM_CLIENT.searchBookings({
    booking_request_code: id,
  });

  if (!result.ok) {
    return {
      notFound: true,
    };
  }

  const bookings = result.body;
  const firstBooking = bookings[0];

  if (!firstBooking || firstBooking.guest_first_name !== firstName || firstBooking.guest_last_name !== lastName) {
    return {
      notFound: true,
    };
  }

  const props: BookingPageProps = {
    id,
    firstName: firstBooking.guest_first_name,
    lastName: firstBooking.guest_last_name,
    bookingDate: firstBooking.booked_at,
    checkIn: firstBooking.check_in,
    checkOut: firstBooking.check_out,
    hotelName: firstBooking.property_name,
    roomName: firstBooking.room_name,
    reservationStatus: firstBooking.reservation_state,
  };

  return { props };
};

export default BookingPage;
export { getServerSideProps };
