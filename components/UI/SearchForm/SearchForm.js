import React, { useContext, useEffect } from "react";
import SingleDateInput from './SingleDateInput';
import RoomDropDown from './RoomDropDown';
import LocationInput from './LocationInput';
import { Wrapper } from './SearchForm.style';
import { Row, Col, message, Button } from 'antd';
import moment from 'moment';
import GuestDropDown from './GuestDropDown';
import { createRoomInfo } from '../../../library/helpers/common';
import { useForm, Controller } from "react-hook-form";
import { userDateContext } from "../../../context/DateContext";

export const SearchVariant = {
  HOME: 'HOME',
  LISTING: 'LISTING'
};

const dateFormat = 'MM/DD/YYYY';
const momentToday = moment();
const todayDate = momentToday;
const tomorrowDate = moment().add(1, 'days');

export const SearchForm = ({ changeStay, query, variant, loading }) => {
  const queryRoomInfo = query?.room ? JSON.parse(query?.room) :[];

  const { setPendingStartDate, setPendingEndDate } = useContext(userDateContext);
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      setStartDate: query?.setStartDate ? moment(query.setStartDate) : todayDate,
      setEndDate: query?.setEndDate ? moment(query.setEndDate) : tomorrowDate,
      room: queryRoomInfo.length ? `${queryRoomInfo.length}` : "1",
      locality: query?.locality ?? "",
      guestInfo: []
    },
  });

  const fieldsValues = watch();
  const startDateStr = fieldsValues.setStartDate.format(dateFormat);
  const endDateStr = fieldsValues.setEndDate.format(dateFormat);

  useEffect(() => {
    // after first page load, set the pending state
    setPendingStartDate(startDateStr);
    setPendingEndDate(endDateStr);
  }, [startDateStr, endDateStr]);

  const onSubmit = (values) => {
    if (values.locality === "") {
      message.error('Please select a city!');
    } else if (moment(values.setEndDate).isBefore(values.setStartDate)) {
      message.error('Check out date must be after check in date!');
    } else {
      const searchQuery = {
        locality: values.locality,
        setStartDate: values.setStartDate.format(dateFormat),
        setEndDate: values.setEndDate.format(dateFormat),
        room: createRoomInfo(values.guestInfo),
      };
      changeStay(searchQuery);
    }
  };

  const handleDisabledStartDate = (current) => {
        return current.isBefore(momentToday, 'day');
    }

  const handleDisabledEndDate = (current) => {
      return current.isBefore(fieldsValues.setStartDate) || current.isSame(fieldsValues.setStartDate);
  }

  return (
    <>
      <Wrapper className={`desktop is-${variant}`} onSubmit={handleSubmit(onSubmit)}>
      <Row style={{width: '100%'}} gutter={[8, 16]}>
     <Col xs={24} sm={12} xl={5}>
     <Controller
        name="locality"
        control={control}
        rules={{ required: true }}
        render={({ field }) =>  <LocationInput onChange={field.onChange} />}
      />
     </Col>
     <Col xs={12} sm={6} xl={4}>
        <Controller
        name="setStartDate"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <SingleDateInput onDisabled={handleDisabledStartDate} field={field} />}
      />
      </Col>
      <Col xs={12} sm={6} xl={4}>
       <Controller
        name="setEndDate"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <SingleDateInput onDisabled={handleDisabledEndDate} endIcon field={field} />}
      />
       </Col>
       <Col xs={12} sm={12} xl={3}>
       <Controller
        name="room"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <RoomDropDown field={field} />}
      />
      </Col>
      <Col xs={12} sm={12} xl={3}>
      <Controller
        name="guestInfo"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <GuestDropDown field={field} roomInfo={fieldsValues.room} />}
      />
       </Col>
      <Col xs={24} sm={12} xl={5}>
        <div className="change-stay" >
          <Button htmlType='submit' loading={loading} className={`ant-picker change-submit is-${variant}`}>
          {variant === SearchVariant.HOME ? 'Book Online ' : 'Change your search '}&gt;
          </Button>
        </div>
        </Col>
      </Row>
      </Wrapper>
    </>
  );
}

SearchForm.defaultProps = {
  variant: SearchVariant.HOME
}


export default SearchForm;
