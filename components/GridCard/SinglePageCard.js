import React from 'react';
import PropTypes from 'prop-types';
import GridCardWrapper, { ImageWrapper, SPContentWrapper } from './GridCard.style';
import Link from 'next/link';
import { SINGLE_POST_PAGE } from 'settings/constant';

const SinglePageCard = ({ className, id, title, children, numbers }) => {
  let classes = `has_btn ${className}`;
  return (
    <GridCardWrapper className={`grid_card ${classes}`.trim()}>
      <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
      <SPContentWrapper className="content_wrapper">
        <span style={numbers ? { lineHeight: 1 } : {}}>
          {title}
          <br />
          {numbers && (
            <span style={{ fontSize: '16px', fontWeight: 400 }}>{`${numbers} hotels`} </span>
          )}
        </span>
        <Link href={`${SINGLE_POST_PAGE}/[slug]`} as={`${SINGLE_POST_PAGE}/${id}`} prefetch={false}>
          <a>{`Book now >`}</a>
        </Link>
      </SPContentWrapper>
    </GridCardWrapper>
  );
};

SinglePageCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  id: PropTypes.string,
};

export default SinglePageCard;
