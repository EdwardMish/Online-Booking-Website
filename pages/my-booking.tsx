import Head from "next/head";
import styled from "styled-components";
import { Input, Form, Button } from "antd";

import Container from "components/UI/Container/Container";
import Router from "next/router";

const StyledContainer = styled(Container as any)`
  margin: auto;
  max-width: 340px;
`;

const H1 = styled.h1`
  color: #4772ff;
  margin-bottom: 14px;
`;

const StyledForm = styled(Form)`
  display: grid;
  justify-content: start;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 40px;
`;

const SubmitButton = styled(Button)`
  align-self: end;
  grid-column: span 2;
`;

function MyBookingPage() {
  function handleFinish(values: {
    bookingNumber: string;
    firstName: string;
    lastName: string;
  }) {
    const { bookingNumber, firstName, lastName } = values;

    const newUrl = new URL(`/booking/${bookingNumber}`, window.location.origin);
    newUrl.searchParams.set("firstName", firstName);
    newUrl.searchParams.set("lastName", lastName);

    Router.push(newUrl);
  }

  return (
    <>
      <Head>
        <title>Reservations Center | Find Booking</title>
      </Head>
      <StyledContainer>
        <H1>Find your booking</H1>
        <StyledForm onFinish={handleFinish as any}>
          <Form.Item
            name="firstName"
            style={{ margin: 0 }}
            rules={[{ required: true, message: "Please add the first name!" }]}
          >
            <Input placeholder="First Name" size="large" />
          </Form.Item>

          <Form.Item
            name="lastName"
            style={{ margin: 0 }}
            rules={[{ required: true, message: "Please add the last name!" }]}
          >
            <Input placeholder="Last Name" size="large" />
          </Form.Item>

          <Form.Item
            name="bookingNumber"
            style={{ margin: 0, gridColumn: "span 2" }}
            rules={[
              { required: true, message: "Please add the booking number!" },
            ]}
          >
            <Input placeholder="Booking Number" size="large" />
          </Form.Item>
          <SubmitButton size="large" htmlType="submit">
            Submit
          </SubmitButton>
        </StyledForm>
      </StyledContainer>
    </>
  );
}

export default MyBookingPage;
