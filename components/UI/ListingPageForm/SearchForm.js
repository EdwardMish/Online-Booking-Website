import React, { useState } from 'react';
import SingleDateInput from './SingleDateInput';
import RoomDropDown from './RoomDropDown';
import LocationInput from './LocationInput';
import { Wrapper, WrapperMobile } from './SearchForm.style';
import { Row, Col } from 'antd';
import GuestDropDown from './GuestDropDown';
import { createRoomInfo } from '../../../library/helpers/common';

export default function SearchForm({ changeStay, query }) {
  const [locality, setLocality] = useState('');
  const [checkIn, setCheckInDate] = useState(query.setStartDate);
  const [checkOut, setCheckOutDate] = useState(query.setEndDate);
  const [roomInfo, setRoomInfo] = useState(1);
  const [guestInfo, setGuestInfo] = useState([]);
  const handleChangeStay = () => {
    const searchQuery = `setStartDate=${checkIn}&setEndDate=${checkOut}&room=${createRoomInfo(
      guestInfo
    )}&locality=${locality}`;
    changeStay(searchQuery);
  };

  return (
    <>
      <Wrapper className="desktop">
        <LocationInput callBack={(v) => setLocality(v)} />
        <SingleDateInput
          name="start"
          callBack={(v) => setCheckInDate(v)}
          defaultDate={checkIn}
          query={query}
        />
        <SingleDateInput
          name="end"
          callBack={setCheckOutDate}
          defaultDate={checkOut}
          startDate={checkIn}
          query={query}
        />
        <RoomDropDown callBack={setRoomInfo} />
        <GuestDropDown callBack={setGuestInfo} roomInfo={roomInfo} />
        <div className="change-stay" onClick={handleChangeStay}>
          <div className="ant-picker change-submit">{`Change your search >`}</div>
        </div>
      </Wrapper>
      <WrapperMobile>
        <Row className="wrapper-mobile" gutter={10}>
          <Col xs={24}>
            <LocationInput callBack={(v) => setLocality(v)} />
          </Col>
          <Col xs={12}>
            <SingleDateInput
              name="start"
              callBack={setCheckInDate}
              defaultDate={checkIn}
              query={query}
            />
          </Col>
          <Col xs={12}>
            <SingleDateInput
              name="end"
              callBack={setCheckOutDate}
              defaultDate={checkOut}
              startDate={checkIn}
              query={query}
            />
          </Col>
          <Col xs={12}>
            <RoomDropDown callBack={setRoomInfo} />
          </Col>
          <Col xs={12}>
            <GuestDropDown callBack={setGuestInfo} roomInfo={roomInfo} />
          </Col>
          <Col xs={24}>
            <div className="change-stay" onClick={handleChangeStay}>
              <div className="ant-picker change-submit">{`Change your search >`}</div>
            </div>
          </Col>
        </Row>
      </WrapperMobile>
    </>
  );
}
