import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import BannerWrapper, { SearchWrapper } from './style';

const HomeSearch = () => {
 
  return (
    <BannerWrapper>
      <Image src="/images/about-us.png" alt="About Us" width={1400} height={570} />
      <SearchWrapper>
        <h1>About us</h1>
        
        <p style={{ marginTop: '15px' }}>
          Reservations Center is an independent online travel website offering access
        </p>
        <p style={{ color: '#FFBF29' }}>to over 100,000 hotels worldwide</p>
      </SearchWrapper>
    </BannerWrapper>
  );
};

HomeSearch.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

HomeSearch.defaultProps = {
  searchTitleStyle: {
    color: '#2D2D2D',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px',
  },
  searchDescriptionStyle: {
    color: '#2D2D2D',
    fontSize: '15px',
    lineHeight: ['25px', '25px', '18px'],
    mb: '30px',
  },
};

export default HomeSearch;
