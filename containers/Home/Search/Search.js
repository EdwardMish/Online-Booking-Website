import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import BannerWrapper, { SearchWrapper } from './Search.style';
import SearchForm from 'components/UI/SearchForm/SearchForm';
import Router from 'next/router';
import { LISTING_SEARCH } from '../../../settings/constant';
import BlankPage from '../../blankPage';

const HomeSearch = () => {
  const [loading, setLoading] = React.useState(false);

  const handleChangeStay = (query) => {
    setLoading(!!query);
    Router.push(
      {
        pathname: `${LISTING_SEARCH}`,
        query: query,
      },
      {
        pathname: `${LISTING_SEARCH}`,
        query: query,
      },
      { shallow: true }
    );
  };
  return <BannerWrapper>
      <Image src="/images/home-banner.png" alt="Home banner 1" width={1440} height={845} />
      <SearchWrapper>
        <h1>Book your perfect hotel</h1>
        <SearchForm loading={loading} changeStay={handleChangeStay} />
        <p style={{ marginTop: '15px' }}>
          Reservations Center is an independent online travel website offering access
        </p>
        <p style={{ color: '#FFBF29' }}>to over 100,000 hotels worldwide</p>
      </SearchWrapper>
    </BannerWrapper>;
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
