import React, { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import RenderReservationForm from './RenderReservationFormSearch';
import { TextButton } from '../SinglePageView.style';

const DEFAULT_DISPLAY_ROOMS = 5;
export default function Reservation({
  rooms,
  roomTypes,
  deviceType,
  defaultImage,
  linkStyle,
  amenities,
  dataLayer,
}) {
  const [rows, setRows] = React.useState(rooms.slice(0, DEFAULT_DISPLAY_ROOMS) || []);
  
  const handleShowMore = () => {
    setRows(rooms);
  };

  return (
    <div style={{ marginTop: '5%' }}>
      <h3 className="subTitle"> AVAILABLE ROOMS </h3>
      <h1 className="title">Book your stay now </h1>
      {rows.map((room) => {
        const findIndex = room.room
          ? roomTypes.findIndex((x) => x.id === room.room['room-id'])
          : -1;

        var images = findIndex !== -1 ? roomTypes[findIndex].images : [];
        if (images.length === 0) images = defaultImage?[defaultImage]:[];
        const price = room['booking-pricing'] && room['booking-pricing']['lowest-average'];
        return (
          <RenderReservationForm
            room={room}
            images={images}
            deviceType={deviceType}
            price={price}
            amenities={amenities}
            dataLayer={dataLayer}
          />
        );
      })}
      {(rooms.length > DEFAULT_DISPLAY_ROOMS && rows.length < rooms.length) && (
        <TextButton style={{ textAlign: 'center' }} onClick={handleShowMore}>
          <Link href="#1">
            <a style={{ ...linkStyle }}>
              Show more rooms
              <svg
                style={{ marginLeft: '10px' }}
                width="23"
                height="13"
                viewBox="0 0 23 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L11.5 11.5L21 2"
                  stroke="#4772FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Link>
        </TextButton>
      )}
    </div>
  );
}

Reservation.propTypes = {
  priceStyle: PropTypes.object,
  pricePeriodStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

Reservation.defaultProps = {
  rowStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    mr: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
    ml: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
  },
  priceStyle: {
    color: '#2D2D2D',
    fontSize: '25px',
    fontWeight: '700',
  },
  pricePeriodStyle: {
    fontSize: '15px',
    fontWeight: '400',
  },
  linkStyle: {
    fontSize: '21px',
    fontWeight: '700',
    color: '#2D2D2D',
  },
};
