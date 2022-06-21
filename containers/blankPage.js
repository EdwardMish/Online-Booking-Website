import React from 'react';
import { Spin } from 'antd';

const BlankPage = (props) => {
  return (
    <div className="loadingbar">
      <Spin size="large" tip="Thanks for your patience while we work to find you the best hotels" />
    </div>
  );
};

export default BlankPage;
