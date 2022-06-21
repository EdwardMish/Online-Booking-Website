import React from 'react';
import { Checkbox, Row, Col } from 'antd';

export default function AmenityFilter() {
  const amenities = [
    {
      label: 'Internet Access',
      value: 'internet-access',
    },
    {
      label: 'Room Service',
      value: 'room-service',
    },
    {
      label: 'Fitness Center',
      value: 'fitness-center',
    },
    {
      label: 'Business Center',
      value: 'business-Center',
    },
    {
      label: 'Dry cleaning service',
      value: 'dry-cleaning-service',
    },
    {
      label: 'Spa',
      value: 'spa',
    },
  ];
  return (
    <div className="filter-section">
      <div style={{ marginBottom: '10px' }}>Hotel Amenities</div>
      <Checkbox.Group style={{ width: '100%' }} onChange={(v) => console.log('v', v)}>
        <Row gutter={[4, 10]}>
          {amenities.map((a) => (
            <Col span={12} key={a.value}>
              <Checkbox value={a.value}>{a.label}</Checkbox>
            </Col>
          ))}
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col span={24}>
            Show all amenities
            <svg
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5.5 5L10 1"
                stroke="#4772FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Col>
        </Row>
      </Checkbox.Group>
    </div>
  );
}
