import React from "react";
import { Input, Form, Grid } from "antd";
import styled from "styled-components";

const { useBreakpoint } = Grid;

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 17px;

  @media (min-width: 993px) {
    row-gap: 25px;
    column-gap: 26px;
  }
`;

const P = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  margin-bottom: 15px;
`;

const StyledFormItem = styled(Form.Item)`
  margin: 0;
`;

const StyledInput = styled(Input)`
  border-radius: 5px;
  padding: 20px;
  line-height: 1.3;
`;

interface PersonalDetailsFormProps {
  disabled?: boolean;
}

function PersonalDetailsForm(props: PersonalDetailsFormProps) {
  const { disabled } = props;

  const breakpoints = useBreakpoint();
  const { xl } = breakpoints;

  return (
    <div>
      <P>Room 1 main guest</P>
      <Div>
        <StyledFormItem
          name="firstName"
          style={{ margin: 0 }}
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <StyledInput placeholder="Firstname" size="large" disabled={disabled} />
        </StyledFormItem>
        <StyledFormItem
          name="lastName"
          style={{ margin: 0 }}
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <StyledInput placeholder="Lastname" size="large" disabled={disabled} />
        </StyledFormItem>
        <StyledFormItem
          name="email"
          style={{ margin: 0, gridColumn: `span ${xl ? 1 : 2}` }}
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <StyledInput type="email" placeholder="Email" size="large" disabled={disabled} />
        </StyledFormItem>
        <StyledFormItem
          name="phone"
          style={{ margin: 0, gridColumn: `span ${xl ? 1 : 2}` }}
          rules={[{ required: true, message: "Please input your phone number!" }]}
        >
          <StyledInput type="tel" placeholder="Phone" size="large" disabled={disabled} />
        </StyledFormItem>
      </Div>
    </div>
  );
}

export { PersonalDetailsForm };
