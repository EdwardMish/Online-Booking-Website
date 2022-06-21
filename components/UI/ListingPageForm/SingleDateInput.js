import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

export default function SingleDateInput({ name, callBack, startDate, defaultDate, query }) {
  const [pickOpen, setPickerOpen] = React.useState(false);
  const dateFormat = 'MM/DD/YYYY';
  const customFormat = (value) => {
    const day = moment(value, 'YYYY-MM-DD HH:mm:ss').format('dddd').substring(0, 3);

    const month = moment(value).format('MMMM').substring(0, 3);
    const date = moment(value).date();
    return `${day}, ${month} ${date}`;
  };

  const handleDisabledDates = (current) => {
    return current < moment();
  };

  React.useEffect(() => {
    setPickerOpen(!!startDate && startDate !== query.setStartDate);
  }, [startDate]);

  return (
    <div className="change-stay">
      <img src={name === 'start' ? '/images/icon-start-date.png' : '/images/icon-end-date.png'} />
      <DatePicker
        defaultValue={moment(defaultDate)}
        format={customFormat}
        disabledDate={handleDisabledDates}
        onChange={(v) => {
          setPickerOpen(false);
          callBack(moment(v._d).format(dateFormat));
        }}
        open={pickOpen}
        onOpenChange={(open) => setPickerOpen(open)}
      />
    </div>
  );
}
