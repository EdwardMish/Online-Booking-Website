import React from 'react';
import { Input } from 'antd';

export default function BrandFilter() {
  return (
    <div className="filter-section">
      <div>Hotel Brand</div>
      <Input onChange={()=>{console.log("change")}} />
    </div>
  );
}
