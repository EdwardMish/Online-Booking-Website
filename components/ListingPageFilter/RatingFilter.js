import React, { useState } from 'react';
import { Rate } from 'antd';

export default function RatingFilter() {
  const [marks, setMarks] = useState({});
  const [current, setCurrent] = useState(3);
  const desc = ['1 star and above', '2 stars and above', '3 stars and above', '4 stars and above', '5 stars'];

  return (
    <div className="rang-section">
      <div>Star rating</div>
      <Rate onChange={setCurrent} value={current} />
      {current ? <span className="ant-rate-text">{desc[current - 1]}</span> : ''}
    </div>
  );
}
