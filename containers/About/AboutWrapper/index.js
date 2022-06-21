import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Wrapper from './style';
import { Row, Col } from 'antd';
const image1 = '/images/about/about-1.png';
const image2 = '/images/about/about-2.png';
const image3 = '/images/about/about-3.png';
const image4 = '/images/about/about-4.png';
const AboutWrapper = () => {
  return (
    <Wrapper>
      <Row gutter={[16, 16]} className="gap">
        <Col xl={11} xs={24} className="text-wrapper">
          <h3>
            Reservations Center is an independent travel network with access to rooms in thousands of hotels
            and approximately 200 countries worldwide.
          </h3>
          <div className="desc">
            Our goal is to help you find the best value in travel accommodations online for
            destinations around the world. We offer locations in over 200 countries as well as
            thousands of great properties here in the United States of America.
          </div>
        </Col>
        <Col xl={13} xs={24}>
          <Row gutter={[16, 16]}>
            <Col xl={13} xs={24} className="image-col">
              <Image src={image1} width={388} height={240} />
              <Image src={image2} width={388} height={235} />
            </Col>
            <Col xl={11} xs={24}>
              <Image src={image3} width={350} height={520} />
            </Col>
          </Row>
        </Col>
        <Col xl={12} xs={24}>
          <Image src={image4} width={690} height={419} />
        </Col>
        <Col xl={11} xs={24} className="text-wrapper">
          <div className="desc">
            Reservations Center is focused on bringing our customers the most current and relevant results
            for their hotel needs. We do this by investing in technology and systems to create a
            better buying process in a secure environment.
          </div>
          <div className="desc">
            We have developed an intuitive web design for multiple devices that hopefully aids in
            your ability to find the information you need and book the property at your convenience.
            This technology also allows us to create dynamic results for our advertising which in
            turn allows us to show you the most relevant results for your search.
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default AboutWrapper;
