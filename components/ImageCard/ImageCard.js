import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Image from 'next/image';
import ImageCardWrapper, { ContentWrapper, Title, Meta } from './ImageCard.style';
import { SearchContext } from 'context/SearchProvider';
import moment from 'moment';
import { LISTING_POSTS_PAGE, LISTING_SEARCH } from 'settings/constant';

const ImageCardNext = ({ className, imageSrc, title, link, meta, data }) => {
  const { state, dispatch } = React.useContext(SearchContext);
  const addAllClasses = ['image_card'];
  const handleClick = (e) => {
    e.preventDefault();
    let today = moment().format('MM/DD/YYYY').toString();
    let tomorrow = moment().add(1, 'days').format('MM/DD/YYYY').toString();
    const query = {
      setStartDate: today,
      setEndDate: tomorrow,
      room: '[[18,3]]',
      locality: data.city,
      location_lat: data.lat,
      location_lng: data.lng,
    };
    dispatch({
      type: 'UPDATE',
      payload: {
        ...state,
        ...query,
      },
    });
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

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ImageCardWrapper className={addAllClasses.join(' ')}>
      <a href="#" onClick={(e) => handleClick(e)}>
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <ContentWrapper>
          {title && <Title>{title}</Title>}

          {meta && <Meta>{meta}</Meta>}
        </ContentWrapper>
      </a>
    </ImageCardWrapper>
  );
};

ImageCardNext.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  meta: PropTypes.string,
};

ImageCardNext.defaultProps = {
  link: '#',
};

export default ImageCardNext;
