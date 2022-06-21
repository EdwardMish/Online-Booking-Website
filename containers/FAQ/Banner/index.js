import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import BannerWrapper, { SearchWrapper } from './style';

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="faq-banner-dk">
        <Image src="/images/faq-banner-dk.png" alt="FAQ" width={1400} height={500} />
      </div>
      <div className="faq-banner-mb">
        <Image
          className="faq-banner-mb"
          src="/images/faq-banner-mb.png"
          alt="FAQ"
          width={700}
          height={500}
        />
      </div>

      <SearchWrapper>
        <h1>Frequently asked questions</h1>
      </SearchWrapper>
    </BannerWrapper>
  );
};

Banner.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

Banner.defaultProps = {
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

export default Banner;
