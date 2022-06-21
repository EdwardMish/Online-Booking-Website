import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import AmenitiesWrapper, { AmenitiesArea } from './Amenities.style';
import { TextButton } from '../SinglePageView.style';
import { Element } from 'react-scroll';

const Amenities = ({ amenities, linkStyle }) => {
  return (
    <Element name="amenities" className="Amenities">
      <AmenitiesWrapper>
        <h3 className="subTitle"> ABOUT THE HOTEL </h3>
        <h1 className="title"> Hotel Amenities </h1>
        <Row>
          {amenities
            .filter((a) => a.name.en.length < 35)
            .map((am, i) => (
              <Col
                xl={6}
                xs={12}
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '1rem 0',
                  borderBottom: '1px solid #E5E5E5',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#4772FF" />
                  <path
                    d="M5 10L8.5 13.5L15 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <span>{am.name.en}</span>
              </Col>
            ))}
        </Row>
      </AmenitiesWrapper>
    </Element>
  );
};

Amenities.propTypes = {
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

Amenities.defaultProps = {
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#2D2D2D',
  },
};

export default Amenities;
