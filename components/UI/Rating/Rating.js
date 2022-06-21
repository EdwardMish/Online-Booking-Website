import React from 'react';
import PropTypes from 'prop-types';
import { IoIosStar } from 'react-icons/io';

const Rating = (props) => {
  const { rating, type, ratingFieldName } = props;
  let i, floorValue;
  let ratingView = [];
  if (rating && rating !== 0) {
    floorValue = Math.floor(rating);
    for (i = 0; i < 5; i++) {
      if (i < floorValue) {
        ratingView.push(<IoIosStar key={i} />);
      }
    }
  }
  return (
    <>
      {type && type === 'bulk' ? (
        <>
          <span style={{ marginRight: '15px' }}>{ratingView}</span>
        </>
      ) : (
        <>
          <span>{ratingFieldName}</span> {ratingView}
        </>
      )}
    </>
  );
};

Rating.propTypes = {
  type: PropTypes.string.isRequired,
  ratingCount: PropTypes.number,
  rating: PropTypes.number,
  ratingFieldName: PropTypes.string,
};

export default Rating;
