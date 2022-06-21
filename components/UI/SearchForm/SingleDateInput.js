import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

const customFormat = (value) => {
  const day = moment(value, 'YYYY-MM-DD HH:mm:ss').format('dddd').substring(0, 3);

  const month = moment(value).format('MMMM').substring(0, 3);
  const date = moment(value).date();
  return `${day}, ${month} ${date}`;
};
export default function SingleDateInput({ field, showToday, endIcon, onDisabled }) {
  const [pickOpen, setPickerOpen] = React.useState(false);
  return (
    <div className="change-stay">
      <img src={!endIcon ? '/images/icon-start-date.png' : '/images/icon-end-date.png'} />
      <DatePicker
        showToday={showToday}
        format={customFormat}
        disabledDate={onDisabled}
        open={pickOpen}
        onOpenChange={setPickerOpen}
        {...field}
        value={moment(field.value)}
      />
    </div>
  );
}

SingleDateInput.defaultProps = {
  showToday: true,
}

SingleDateInput.prototype = {
  showToday: PropTypes.bool,
}
