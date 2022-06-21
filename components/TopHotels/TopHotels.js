import React from 'react';
import Wrapper, { TextButton } from './TopHotels.style';
import { Row, Col } from 'antd';
import LocationCard from '../GridCard/LocationCard';

const locations = [
  { name: 'Las Vegas NV', numbers: 896, image: '/images/locations/location-LasVegas.png' },
  { name: 'Atlanta GA', numbers: 562, image: '/images/locations/location-atlanta.png' },
  { name: 'Chicago IL', numbers: 705, image: '/images/locations/location-Chicago.png' },
  { name: 'New York NY', numbers: 631, image: '/images/locations/location-NewYork.png' },
  { name: 'Boston MA', numbers: 425, image: '/images/locations/location-Boston.png' },
  { name: 'Orlando FL', numbers: 423, image: '/images/locations/location-Orlando.png' },
  { name: 'San Francisco CA', numbers: 325, image: '/images/locations/location-SanFrancisco.png' },
  { name: 'Los Angeles CA', numbers: 365, image: '/images/locations/location-LosAngeles.png' },
];

export default function TopHotels({ deviceType, image, i = 0 }) {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <Wrapper>
      <h3 className="subTitle"> TOP DESTINATIONS </h3>
      <h1 className="title"> Book your Perfect Hotel </h1>
      <Row gutter={30}>
        <Col xs={24} xl={8}>
          {locations.slice(0, 3).map((location, index) => (
            <LocationCard key={index} title={location.name} id={index} numbers={location.numbers}>
              <img src={location.image} style={{ width: '100%' }} />
            </LocationCard>
          ))}
        </Col>
        {(deviceType === 'desktop' || showMore) && (
          <>
            <Col xs={24} xl={8}>
              {locations.slice(3, 5).map((location, index) => (
                <LocationCard
                  key={index}
                  title={location.name}
                  id={index}
                  numbers={location.numbers}
                >
                  <img src={location.image} style={{ width: '100%' }} />
                </LocationCard>
              ))}
            </Col>
            <Col xs={24} xl={8}>
              {locations.slice(5).map((location, index) => (
                <LocationCard
                  key={index}
                  title={location.name}
                  id={index}
                  numbers={location.numbers}
                >
                  <img src={location.image} style={{ width: '100%' }} />
                </LocationCard>
              ))}
            </Col>
          </>
        )}
        {deviceType !== 'desktop' && (
          <TextButton>
            <span onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Show more destinations'}
              <svg
                style={{ marginLeft: '10px' }}
                width="23"
                height="13"
                viewBox="0 0 23 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L11.5 11.5L21 2"
                  stroke="#4772FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </TextButton>
        )}
      </Row>
    </Wrapper>
  );
}
