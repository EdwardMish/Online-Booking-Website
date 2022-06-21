import React, { useCallback, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Heading from "components/UI/Heading/Heading";
import { Row, Col } from "antd";
import ReservationFormWrapper, { FormActionArea, FieldWrapper } from "./Reservation.style.js";
import { Carousel } from "antd";
import Image from "next/image";
import styled from "styled-components";
import { userDateContext } from "../../../context/DateContext";
import { useRoomSearch } from "library/hooks/use-room-search";
import { en_us } from "settings/en_us";
import { clicktripzSubmitProps } from "components/Clicktripz";

const CheckoutA = styled("a").withConfig({ shouldForwardProp: () => true })`
  width: 100%;
  display: flex;
  padding: 13px 10px;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 10px;
  background: #ffbf29;
  color: #2d2d2d;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);

  :hover {
    color: #2d2d2d;
  }
`;

const RenderReservationForm = ({ room, images, deviceType, price, amenities }) => {
  const router = useRouter();
  const { dateSelectionIsDirty, pendingStartDate, pendingEndDate } = useContext(userDateContext);
  const { changeRoomSearch } = useRoomSearch();
  const reloadRoomSearch = useCallback(
    (searchQuery) => {
      const pathname = router.asPath.match(/^[^?]*/)[0];
      changeRoomSearch(
        searchQuery,
        {
          ...router.query,
          setStartDate: router.query.start,
          setEndDate: router.query.end,
        },
        pathname
      );
    },
    [router.query, router.asPath]
  );

  const searchParams = new URLSearchParams();
  searchParams.set("propertyId", router.query.id);
  searchParams.set("ages", router.query.room);
  searchParams.set("checkIn", router.query.start);
  searchParams.set("checkOut", router.query.end);
  searchParams.set("roomId", room.room["room-id"]);
  searchParams.set("ratePlanCode", room["rate-plan-code"]);

  return (
    <ReservationFormWrapper as="div" className="form-container">
      <Row id="reviewSection" style={{ alignItems: "center" }}>
        <Col xl={6} xs={24}>
          <Carousel autoplay>
            {images.map(({ urls, title, width, height }, index) => (
              <div style={{ lineHeight: 0 }} key={index}>
                <Image height={380} width={510} src={urls.default} alt={title} />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col
          xl={14}
          xs={24}
          style={
            deviceType === "mobile"
              ? { width: "100%", paddingTop: "15px", paddingLeft: "15px" }
              : { width: "100%", paddingLeft: "20px", paddingTop: "20px" }
          }
        >
          <FieldWrapper>
            <Heading content={room.room.title} />
            <Row>
              {amenities
                .filter((a) => a.name.en.length < 35)
                .slice(0, 15)
                .map((am, i) => (
                  <Col
                    xl={8}
                    xs={24}
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "5px",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4772FF" />
                      <path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                    <span className="for-lg">{am.name.en}</span>
                    <span className="for-md">{am.name.en.slice(0, 20)}</span>
                  </Col>
                ))}
            </Row>
          </FieldWrapper>
        </Col>
        <Col xl={4} style={{ width: "100%", padding: "30px", borderLeft: "1px solid #E5E5E5" }}>
          <FormActionArea>
            {dateSelectionIsDirty ? (
              <button
                className="ant-btn-primary"
                onClick={(e) =>
                  reloadRoomSearch(
                    `id=${router.query.id}&start=${pendingStartDate}&end=${pendingEndDate}&room=${router.query.room}`
                  )
                }
              >
                {en_us.CHECK_RATES}
              </button>
            ) : (
              <>
                <div
                  style={{
                    color: "#000000",
                    fontSize: "26px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >{`$${Math.floor(price)}`}</div>
                <div style={{ color: "#959595", fontSize: "16px", textAlign: "center" }}>Avg. nightly rate</div>
                <Link passHref href={`/checkout?${searchParams.toString()}`}>
                  <CheckoutA {...clicktripzSubmitProps}>{"Book now >"}</CheckoutA>
                </Link>
              </>
            )}
            <div style={{ color: "#2D2D2D", fontSize: "14px", textAlign: "center" }}>Free cancellation</div>
          </FormActionArea>
        </Col>
      </Row>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
