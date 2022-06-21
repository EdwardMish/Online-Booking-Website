import React from 'react';
import PropTypes from 'prop-types';
import Text from 'components/UI/Text/Text';
import LocationWrapper from './Location.style';
import Map from 'components/Map/Map';
import { Element } from 'react-scroll';

const Location = ({ locationMetaStyle, location }) => {
  const address = location.address;
  const formattedAddress = `${address.street_address.en} ${address.locality.en} ${address.region.en} ${address.country_code}`;
  return (
    <Element name="location" className="location">
      <LocationWrapper>
        <h3 className="subTitle"> ABOUT THE HOTEL </h3>
        <h1 className="title"> Hotel Address </h1>
        <Map location={location} multiple={false} />
        <Text content={formattedAddress} {...locationMetaStyle} />
      </LocationWrapper>
    </Element>
  );
};

Location.propTypes = {
  locationMetaStyle: PropTypes.object,
};

Location.defaultProps = {
  locationMetaStyle: {
    fontSize: '21px',
    fontWeight: '400',
    color: '#2D2D2D',
    mt: ['14px', '20px', '27px'],
    mb: ['14px', '20px', '27px'],
    textAlign: 'center',
  },
};

export default Location;
