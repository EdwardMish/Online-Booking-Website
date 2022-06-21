import React from "react";
import { Input, Form, DatePicker, Grid, Checkbox } from "antd";
import styled from "styled-components";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

const { useBreakpoint } = Grid;

const WrapperDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 17px;

  @media (min-width: 993px) {
    row-gap: 25px;
    column-gap: 26px;
  }
`;

const HeadingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  grid-column: span 2;
`;

const H3 = styled.h3`
  font-size: 18px;
  line-height: 1.3;
  color: #31b0a9;
  font-weight: 700;
  margin: 0;

  @media (min-width: 993px) {
    font-size: 21px;
  }
`;

const Span = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  position: relative;
  width: 60px;
  aspect-ratio: 1;
  background-color: rgba(49, 176, 169, 0.1);
  border-radius: 50%;
`;

const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledFormItem = styled(Form.Item)`
  margin: 0;
  grid-column: span 2;
`;

const StyledInput = styled(Input)`
  border-radius: 5px;
  padding: 20px;
  line-height: 1.3;
`;

const StyledDatePicker = styled(DatePicker as any)`
  width: 100%;
  border-radius: 5px;
  padding: 20px;
  line-height: 1.3;

  input {
    line-height: 1.3;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  color: #959595;
  line-height: 1.3;
`;

const StyledPaymentInputsWrapper = styled(PaymentInputsWrapper)`
  width: 100%;

  > div {
    box-shadow: none;
    height: auto;
    padding: 10px 20px;
  }
`;

interface PaymentFormProps {
  disabled?: boolean;
}

function PaymentForm(props: PaymentFormProps) {
  const { disabled } = props;

  const { wrapperProps, getCardImageProps, getCardNumberProps } = usePaymentInputs();

  const breakpoints = useBreakpoint();
  const { xl } = breakpoints;

  return (
    <WrapperDiv>
      <HeadingDiv>
        <Span>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="#31B0A9">
            <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" />
          </Svg>
        </Span>
        <H3>Secure 256-bit SSL encrypted payment</H3>
      </HeadingDiv>
      <StyledFormItem
        name="firstNameOnCard"
        rules={[{ required: true, message: "Please input your first name!" }]}
        style={{ gridColumn: "span 1" }}
      >
        <StyledInput placeholder="Firstname on card" size="large" disabled={disabled} />
      </StyledFormItem>

      <StyledFormItem
        name="lastNameOnCard"
        rules={[{ required: true, message: "Please input your last name!" }]}
        style={{ gridColumn: "span 1" }}
      >
        <StyledInput placeholder="Lastname on card" size="large" disabled={disabled} />
      </StyledFormItem>
      <StyledFormItem
        name="cardNumber"
        rules={[{ required: true, message: "Please input your card number!" }]}
        style={{ gridColumn: `span ${xl ? 1 : 2}` }}
      >
        <StyledPaymentInputsWrapper
          {...wrapperProps}
          // @ts-ignore
          styles={disabled ? { inputWrapper: { base: { backgroundColor: "#f5f5f5" } } } : undefined}
        >
          <svg
            style={{ width: "40px", height: "40px", flexShrink: 0 }}
            {...getCardImageProps({ images: images as any })}
          />
          <input
            {...getCardNumberProps()}
            placeholder="Credit card number"
            className="ant-input ant-input-lg"
            disabled={disabled}
            style={{ flexGrow: 1 }}
          />
        </StyledPaymentInputsWrapper>
      </StyledFormItem>
      <StyledFormItem
        name="expireMonth"
        rules={[
          {
            required: true,
            message: "Please input the Card Expiraton Month!",
          },
        ]}
        style={{ gridColumn: "span 1" }}
      >
        {/* @ts-ignore */}
        <StyledDatePicker
          format={"MM"}
          picker="month"
          size="large"
          placeholder="Card expiration month"
          disabled={disabled}
        />
      </StyledFormItem>
      <StyledFormItem
        name="expireYear"
        rules={[
          {
            required: true,
            message: "Please input the Card Expiraton Year!",
          },
        ]}
        style={{ gridColumn: "span 1" }}
      >
        {/* @ts-ignore */}
        <StyledDatePicker
          format={"YYYY"}
          placeholder="Card expiration year"
          picker="year"
          size="large"
          disabled={disabled}
        />
      </StyledFormItem>
      <StyledFormItem
        name="code"
        rules={[{ required: true, message: "Please input the security code!" }]}
        style={{ gridColumn: `span ${xl ? 1 : 2}` }}
      >
        <StyledInput placeholder="Security code" size="large" disabled={disabled} />
      </StyledFormItem>
      <StyledFormItem
        name="acceptPrivacy"
        valuePropName="checked"
        rules={[{ required: true, message: "You must accept our terms of service" }]}
      >
        <StyledCheckbox disabled={disabled}>
          I understand that my credit card will be charged upon submitting the reservation request and agree to the
          terms and conditions, privacy policy, and hotel policies including the cancellation policy. Reservations
          Center is an independent travel network.
        </StyledCheckbox>
      </StyledFormItem>
    </WrapperDiv>
  );
}

export { PaymentForm };
