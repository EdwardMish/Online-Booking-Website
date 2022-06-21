import React from 'react';
import Wrapper, { TextButton } from './Ambitions.style';
import { Row, Col, Button } from 'antd';
import AmbitionCard from '../GridCard/AmbitionCard';

const ambitions = [
  {
    title: 'Atlanta, Georgia. Welcome to City in a Forest',
    image: '/images/ambitions/georgia-1.png',
    tag: 'City Highlights',
  },
  {
    title: 'Gatlinburg, Tennessee. Visit the Gateway to Great Smoky Mountains',
    image: '/images/ambitions/Tennessee-1.png',
    tag: 'Regional',
  },
  {
    title: 'Las Vegas, Nevada. Experience the Entertainment Capital',
    image: '/images/ambitions/Nevada.png',
    tag: 'City Highlights',
  },
  {
    title: 'Gatlinburg, Tennessee. Visit the Great Smoky Mountains',
    image: '/images/ambitions/Tennessee-2.png',
    tag: 'Regional',
  },
  {
    title: 'Atlanta, Georgia. Welcome to City in a Forest',
    image: '/images/ambitions/georgia-2.png',
    tag: 'City Highlights',
  },
];

export default function Ambitions({}) {
  return (
    <Wrapper>
      <h3 className="subTitle"> Inspiration from our blog </h3>
      <h1 className="title"> Reservations Center Ambitions </h1>
      <p>
        All those who wander
        <br /> are not lost!
      </p>
      <Row gutter={30}>
        {ambitions.slice(0, 2).map((a, index) => (
          <Col xs={24} xl={12} key={index}>
            <AmbitionCard tag={a.tag} title={a.title} id={index}>
              <img src={a.image} style={{ width: '100%' }} />
            </AmbitionCard>
          </Col>
        ))}
      </Row>
      <Row gutter={30}>
        {ambitions.slice(2, 5).map((a, index) => (
          <Col xs={24} xl={8} key={index}>
            <AmbitionCard key={index} tag={a.tag} title={a.title} id={index}>
              <img src={a.image} style={{ width: '100%' }} />
            </AmbitionCard>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
}
