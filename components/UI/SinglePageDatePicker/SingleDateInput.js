import React from "react";
import moment from "moment";
import styled, { css } from "styled-components";
import { DatePicker as AntdDatepicker } from "antd";

// In order to hide the year navigation icons, we need to pass the className
// to the "dropdownClassName" prop and since styled-components always passes the result to className, this is the workaround.
const DatePicker = ({ className, ...rest }) => {
  return <AntdDatepicker dropdownClassName={className} {...rest} />;
};

const StyledDatePicker = styled(DatePicker)`
  ${(props) =>
    props.$hidePickerSuperIcons &&
    css`
      .ant-picker-header-super-prev-btn,
      .ant-picker-header-super-next-btn {
        display: none !important;
      }
    `}
`;

export default function SingleDateInput({
  name,
  query,
  startDate,
  defaultDate,
  callBack,
  hidePickerSuperIcons = false,
}) {
  const [pickOpen, setPickerOpen] = React.useState(false);
  const [value, setValue] = React.useState(moment(defaultDate));
  const dateFormat = "MM/DD/YYYY";
  const customFormat = (value) => {
    const day = moment(value, "YYYY-MM-DD HH:mm:ss").format("dddd").substring(0, 3);

    const month = moment(value).format("MMMM").substring(0, 3);
    const date = moment(value).date();
    return `${day}, ${month} ${date}`;
  };

  const handleDisabledDates = (current) => {
    return current < moment();
  };

  React.useEffect(() => {
    setValue(moment(defaultDate));
  }, [defaultDate]);

  React.useEffect(() => {
    setPickerOpen(!!startDate && startDate !== query.start && startDate !== moment().format("MM/DD/YYYY"));
  }, [startDate]);

  let datePickerProps = {};
  if (hidePickerSuperIcons) {
    datePickerProps = { superPrevIcon: null, superNextIcon: null };
  }

  return (
    <div className="change-stay">
      <img src={name === "start" ? "/images/icon-start-date.png" : "/images/icon-end-date.png"} />
      <StyledDatePicker
        defaultValue={moment(defaultDate)}
        format={customFormat}
        disabledDate={handleDisabledDates}
        value={value}
        onChange={(v) => {
          setPickerOpen(false);
          setValue(v);
          callBack(moment(v._d).format(dateFormat));
        }}
        open={pickOpen}
        onOpenChange={(open) => setPickerOpen(open)}
        $hidePickerSuperIcons={hidePickerSuperIcons}
      />
    </div>
  );
}
