import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fbfbfb;
  border: 1px solid #e5e5e5;
  text-align: center;
  >div{
    text-align: left;
    font-weight: bold;
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 15px;
    padding-top: 15px;
  }
  .ant-rate-text{
    color:#4772FF;
    font-weight: bold;
  }
  .ant-rate-star svg{
    fill: #E5E5E5;
  }
  .ant-rate-star-full svg{
    fill: #4772FF;
  }
  .filter-section input{
    margin-top: 10px;
  }
  .ant-checkbox-checked .ant-checkbox-inner{
    background-color: #4772FF;
    border-color: #4772FF;
    border-radius: 50%;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner, .ant-checkbox-checked::after{
    border-color: #4772FF!important;
    border-radius: 50%;
  }
  .ant-checkbox-inner{
    border-radius: 50%;
  }
`;
export default Wrapper;
