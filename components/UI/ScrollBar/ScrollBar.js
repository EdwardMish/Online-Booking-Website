import React from 'react';
import { Link } from 'react-scroll';
import Container from '../Container/Container';
import { Wrapper, InnerWrapper, RatingMeta } from './ScrollBar.style';

import Rating from 'components/UI/Rating/Rating';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';

const brandImage = '/images/brand.png';

export default function TopBar({
  buttons,
  title,
  brand,
  className,
  height,
  rating,
  ratingCount,
  location,
}) {
  const addAllClasses = ['scrollbar'];
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Wrapper className={addAllClasses.join(' ')} height={height}>
      <Container fluid={true}>
        <InnerWrapper>
          <div className="scrollbar_left">
            <img className="brand-logo" src={brandImage} alt={brand} />
            <div className="rating-desktop">
              <Heading as="h1" content={title} className="topbar-title" />
              <RatingMeta>
                <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
                <Text content={location} as="h3" />
              </RatingMeta>
            </div>
          </div>
          <div className="rating-mobile">
            <RatingMeta style={{ display: 'block' }}>
              <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
              <Text content={location} as="h3" />
            </RatingMeta>
          </div>
          <div className="scrollbar_right">{buttons}</div>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
}
