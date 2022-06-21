import React from 'react';
import PropTypes from 'prop-types';
import { GridCardAMBWrapper, ImageWrapper, AMBContentWrapper } from './GridCard.style';
import Link from 'next/link';
import { SINGLE_POST_PAGE } from 'settings/constant';

const AmbitionCard = ({ className, tag, title, children }) => {
  let classes = `has_btn ${className}`;
  return (
    <GridCardAMBWrapper className={`grid_card ${classes}`.trim()}>
      <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
      <AMBContentWrapper className="content_wrapper">
        <span>
          <span className="amb-tag">{tag}</span>
          <br />
          {title}
        </span>
      </AMBContentWrapper>
    </GridCardAMBWrapper>
  );
};

AmbitionCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default AmbitionCard;
