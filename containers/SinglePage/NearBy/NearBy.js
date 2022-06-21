import React from 'react';
import Wrapper from './NearBy.style';
import SectionGrid from 'components/SectionGrid/SectionGrid';

import { Row, Col } from 'antd';
import SinglePageCard from '../../../components/GridCard/SinglePageCard';

const limits = Array(6).fill(0);
export default function NearBy({ deviceType, image }) {
  const columnWidth = [1 / 1, 1 / 2, 1 / 2, 1 / 2, 1 / 3];
  return (
    <Wrapper>
      <h3 className="subTitle"> OTHER OPTIONS </h3>
      <h1 className="title"> Other Hotels Nearby </h1>
      <Row gutter={30}>
        {limits.map((a, i) => (
          <Col key={i} xs={24} xl={8}>
            <SinglePageCard title="Hotel Principle" id={i}>
              <img src={image.urls.default} style={{ width: '100%' }} />
            </SinglePageCard>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
}
