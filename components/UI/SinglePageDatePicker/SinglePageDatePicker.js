import React, { useContext, useEffect, useState } from "react";
import SingleDateInput from "./SingleDateInput";
import RoomDropDown from "./RoomDropDown";
import { Wrapper, WrapperMobile, WrapperModal } from "./SinglePageDatePicker.style";
import { Row, Col } from "antd";

import GuestDropDown from "./GuestDropDown";
import { createRoomInfo } from "../../../library/helpers/common";
import { handleCheckInDate, handleCheckoutDate, AddDays } from "../../../library/helpers/common";
import { userDateContext } from "../../../context/DateContext";

export default function SinglePageDatePicker({ changeStay, query, modal }) {
  const { setPendingStartDate, setPendingEndDate } = useContext(userDateContext);
  const [checkIn, setCheckInDate] = useState(handleCheckInDate(query.start));
  const [checkOut, setCheckOutDate] = useState(handleCheckoutDate(query.end));
  const [roomInfo, setRoomInfo] = useState(1);
  const [guestInfo, setGuestInfo] = useState([]);
  const handleChangeStay = () => {
    const searchQuery = `start=${checkIn}&end=${checkOut}&room=${createRoomInfo(guestInfo)}`;
    changeStay(searchQuery);
  };
  useEffect(() => {
    // after first page load, set the pending state
    setPendingStartDate(checkIn);
    setPendingEndDate(checkOut);
  }, [checkIn, checkOut]);

  React.useEffect(() => {
    console.log(checkIn !== handleCheckInDate(query.start));
    checkIn !== handleCheckInDate(query.start) && setCheckOutDate(AddDays(checkIn, 1));
  }, [checkIn]);

  return (
    <>
      {!modal && (
        <Wrapper className="desktop">
          <SingleDateInput
            name="start"
            callBack={(v) => setCheckInDate(v)}
            defaultDate={checkIn}
            query={query}
            hidePickerSuperIcons
          />
          <SingleDateInput
            name="end"
            callBack={setCheckOutDate}
            defaultDate={checkOut}
            startDate={checkIn}
            query={query}
            hidePickerSuperIcons
          />
          <RoomDropDown callBack={setRoomInfo} />
          <GuestDropDown callBack={setGuestInfo} roomInfo={roomInfo} />
          <div className="change-stay" onClick={handleChangeStay}>
            <div className="ant-picker change-submit">Find Rooms</div>
          </div>
        </Wrapper>
      )}
      {modal && (
        <WrapperModal>
          <Row className="wrapper-mobile" gutter={10}>
            <Col xs={12}>
              <SingleDateInput
                name="start"
                callBack={(v) => setCheckInDate(v)}
                defaultDate={checkIn}
                query={query}
                hidePickerSuperIcons
              />
            </Col>
            <Col xs={12}>
              <SingleDateInput
                name="end"
                callBack={setCheckOutDate}
                defaultDate={checkOut}
                startDate={checkIn}
                query={query}
                hidePickerSuperIcons
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
                <div className="ant-picker change-submit">Search</div>
              </div>
            </Col>
          </Row>
        </WrapperModal>
      )}
      {!modal && (
        <WrapperMobile>
          <Row className="wrapper-mobile" gutter={10}>
            <Col xs={12}>
              <SingleDateInput
                name="start"
                callBack={(v) => setCheckInDate(v)}
                defaultDate={checkIn}
                query={query}
                hidePickerSuperIcons
              />
            </Col>
            <Col xs={12}>
              <SingleDateInput
                name="end"
                callBack={setCheckOutDate}
                defaultDate={checkOut}
                startDate={checkIn}
                query={query}
                hidePickerSuperIcons
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
                <div className="ant-picker change-submit">Find Rooms</div>
              </div>
            </Col>
          </Row>
        </WrapperMobile>
      )}
    </>
  );
}
