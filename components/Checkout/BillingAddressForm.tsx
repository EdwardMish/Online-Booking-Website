import React from "react";
import styled from "styled-components";
import { Input, Form, Grid, Select } from "antd";
import countryList from "react-select-country-list";
import { State } from "country-state-city";

const { useBreakpoint } = Grid;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 17px;

  @media (min-width: 993px) {
    row-gap: 25px;
    column-gap: 26px;
  }
`;

const StyledFormItem = styled(Form.Item)`
  margin: 0;
`;

const StyledSelect = styled(Select)`
  .ant-select-selector {
    height: auto !important;
    border-radius: 5px !important;
    box-sizing: content-box !important;
    width: calc(100% - 42px) !important;
    padding: 21px !important;

    ::after {
      line-height: 1.3 !important;
    }
  }

  .ant-select-selection-search {
    padding-left: 10px;
    display: flex;
    align-items: center;
    line-height: 1.3;
  }

  .ant-select-selection-placeholder {
    padding: 0 !important;
    line-height: 1.3 !important;
  }

  .ant-select-selection-search-input {
    line-height: 1.3;
    height: auto !important;
  }

  .ant-select-selection-item {
    line-height: 1.3 !important;
  }
`;

const StyledInput = styled(Input)`
  border-radius: 5px;
  padding: 20px;
  line-height: 1.3;
`;

interface BillingAddressFormProps {
  disabled?: boolean;
}

function BillingAddressForm(props: BillingAddressFormProps) {
  const { disabled } = props;

  const defaultCountry = countryList().getValue("United States");
  const [country, setCountry] = React.useState(defaultCountry);

  const breakpoints = useBreakpoint();
  const { xl } = breakpoints;

  return (
    <Div>
      <StyledFormItem
        name="country"
        initialValue={defaultCountry}
        rules={[{ required: true, message: "Please select your country!" }]}
        style={{ gridColumn: `span ${xl ? 3 : 6}` }}
      >
        <StyledSelect
          placeholder="Country"
          optionFilterProp="children"
          size="large"
          value={country}
          disabled={disabled}
          onChange={(v: any) => setCountry(v)}
          filterOption={(input, option) => {
            if (!option || typeof option.children !== "string") {
              return false;
            }

            const country = option.children as string;

            return country.toLowerCase().startsWith(input.toLowerCase());
          }}
        >
          {countryList()
            .getData()
            .map(({ value, label }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
        </StyledSelect>
      </StyledFormItem>
      <StyledFormItem
        name="streetAddress"
        rules={[{ required: true, message: "Please add your address!" }]}
        style={{ gridColumn: `span ${xl ? 3 : 6}` }}
      >
        <StyledInput placeholder="Address" size="large" disabled={disabled} />
      </StyledFormItem>
      <StyledFormItem
        name="city"
        rules={[{ required: true, message: "Please input your city!" }]}
        style={{ gridColumn: `span ${xl ? 2 : 6}` }}
      >
        <StyledInput placeholder="City" size="large" disabled={disabled} />
      </StyledFormItem>
      <StyledFormItem
        name="state"
        rules={[{ required: true, message: "Please input your state!" }]}
        style={{ gridColumn: `span ${xl ? 2 : 3}` }}
      >
        <StyledSelect
          placeholder="State"
          optionFilterProp="children"
          size="large"
          disabled={disabled}
          filterOption={(input, option) => {
            if (!option || typeof option.children !== "string") {
              return false;
            }

            const state = option.children as string;

            return state.toLowerCase().startsWith(input.toLowerCase());
          }}
        >
          {country &&
            State.getStatesOfCountry(country).map(({ isoCode, name }) => (
              <Select.Option key={isoCode} value={isoCode}>
                {name}
              </Select.Option>
            ))}
        </StyledSelect>
      </StyledFormItem>
      <StyledFormItem
        name="zip"
        rules={[{ required: true, message: "Please input your zip code!" }]}
        style={{ gridColumn: `span ${xl ? 2 : 3}` }}
      >
        <StyledInput placeholder="Zip code" size="large" disabled={disabled} />
      </StyledFormItem>
    </Div>
  );
}

export { BillingAddressForm };
