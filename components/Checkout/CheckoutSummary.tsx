import { Col, Row } from "antd";
import { Fragment, ReactNode } from "react";
import styled from "styled-components";
import { Temporal } from "@js-temporal/polyfill";

export const SummaryWrapper = styled.div`
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 2rem;

  h1 {
    color: #2d2d2d;
    font-weight: 700;
    font-size: 25px;
  }
  .col-left > span {
    margin-left: 5px;
    color: #2d2d2d;
  }

  .summary {
    > div {
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 10px;
    }
  }
  .col-right {
    text-align: right;
  }
  .summary.borderTop {
    padding-top: 10px;
    margin-top: 50px;
    border-top: 1px solid #e5e5e5;
  }
  .summary.borderTop.total {
    border-top: 2px solid #2d2d2d;
    padding-top: 15px;
    > div {
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;
      border-bottom: none;
    }
  }

  .disclaimers {
    padding: 20px 0;
    margin-top: 20px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #959595;
  }

  .help {
    padding-top: 20px;
    .phone-contact {
      font-weight: 700;
      font-size: 25px;
      line-height: 33px;
      /* identical to box height */

      letter-spacing: 0.1em;

      color: #2d2d2d;
    }
  }
`;

interface CheckoutSummaryProps {
  checkIn: string;
  checkOut: string;
  roomCount: number;
  guestCount: number;
  averagePricePerNight: string;
  pricePerNight: string[];
  taxesAndServiceFees: string;
  totalPrice: string;
  disclaimers: ReactNode[];
}

function CheckoutSummary(props: CheckoutSummaryProps) {
  const {
    checkIn,
    checkOut,
    roomCount,
    guestCount,
    totalPrice,
    taxesAndServiceFees,
    pricePerNight,
    averagePricePerNight,
    disclaimers,
  } = props;

  const checkInPlainDate = Temporal.PlainDate.from(checkIn);

  return (
    <SummaryWrapper>
      <h1 style={{ marginBottom: "25px" }}>Booking summary</h1>
      <Row gutter={[10, 20]} className="summary">
        <Col xl={12} xs={12} className="col-left">
          <img src={"/images/icon-start-date.png"} />
          <span>Check-in</span>
        </Col>
        <Col xl={12} xs={12} className="col-right">
          {checkIn}
        </Col>
        <Col xl={12} xs={12} className="col-left">
          <img src={"/images/icon-end-date.png"} />
          <span> Check-out </span>
        </Col>
        <Col xl={12} xs={12} className="col-right">
          {checkOut}
        </Col>
        <Col xl={12} xs={12} className="col-left">
          <img src={"/images/icon-room.png"} />
          <span> Rooms </span>
        </Col>
        <Col xl={12} xs={12} className="col-right">
          {roomCount} {roomCount > 1 ? "Rooms" : "Room"}
        </Col>
        <Col xl={12} xs={12} className="col-left">
          <img src={"/images/icon-guest.png"} />
          <span> Guests </span>
        </Col>
        <Col xl={12} xs={12} className="col-right">
          {guestCount} {guestCount > 1 ? "Guests" : "Guest"}
        </Col>
      </Row>
      <Row gutter={[10, 20]} className="summary borderTop">
        <Col xl={12} xs={12} className="col-left">
          Avg. nightly rates
        </Col>
        <Col xl={12} xs={12} className="col-right">
          {averagePricePerNight}
        </Col>
        {pricePerNight.map((price, index) => (
          <Fragment key={index}>
            <Col xl={12} xs={12} className="col-left">
              {checkInPlainDate.add({ days: index }).toString()}
            </Col>
            <Col xl={12} xs={12} className="col-right">
              {price}
            </Col>
          </Fragment>
        ))}

        <Col xl={12} xs={12} className="col-left">
          Taxes and service fees
        </Col>
        <Col xl={12} xs={12} className="col-right">
          {taxesAndServiceFees}
        </Col>
      </Row>
      <Row gutter={[10, 20]} className="summary borderTop total">
        <Col xl={12} xs={12} className="col-left">
          Total charges
        </Col>
        <Col xl={12} xs={12} className="col-right">
          {totalPrice}
        </Col>
      </Row>
      <div className="disclaimers">
        {disclaimers.map((disclaimer, index) => (
          <span key={index}>{disclaimer}</span>
        ))}
      </div>

      <div className="help">
        <p>Need assistance?</p>
        <a href="tel:833-612-1634" className="phone-contact">
          833-612-1634
        </a>
      </div>
    </SummaryWrapper>
  );
}

export { CheckoutSummary };
