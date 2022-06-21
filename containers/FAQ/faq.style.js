import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const FaqbodyWrapper = styled.div`
  padding: 50px 0;
  .faq-collapse {
    border: none;
    background: transparent;
  }
  .ant-collapse > .ant-collapse-item {
    padding: 10px 0;
  }
  .faq-title {
    margin-top: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    color: #4772ff;
  }
  p {
    color: #959595;
    font-size: 18px;
    font-weight: 500;
  }
  .faq-list {
    color: #959595;
    margin-left: 15px;
  }
  .faq-list li {
    list-style-type: disc;
    font-size: 18px;
    font-weight: 500;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow svg {
    color: #4772ff;
  }
  @media (max-width: 768px) {
    padding-top: 0;
    margin-top: -50px;
  }
  @media (max-width: 450px) {
    padding-top: 0;
    margin-top: -60px;
  }
`;
