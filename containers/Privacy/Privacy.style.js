import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PageWrapper = styled.div`
  .privacy-title {
    font-size: 46px;
    @media (max-width: 991px) {
      font-size: 30px;
    }
  }
  > div {
    .terms-section-header {
      margin-top: 50px;
    }
    .terms-section {
      margin: 20px 0;
    }
    .terms-list {
      margin-left: 15px;
    }
    .terms-list > li {
      list-style-type: disc;
    }
    margin-top: 60px;
    margin-bottom: 30px;
    border-radius: 3px;
    color: #959595;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 30px;
      margin-bottom: 29px;
    }

    h1,
    h2 {
      font-size: 25px;
      font-weight: 700;
      padding-top: 10px;
      &:first-child {
        padding-top: 0;
      }
    }

    h4,
    h5,
    h6 {
      font-size: 15px;
      padding-top: 20px;
    }

    p {
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 27px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul,
    ol {
      padding: 0;
      margin-bottom: 27px;
      li {
        font-size: 15px;
        line-height: 30px;
      }
    }
    table.p-table {
      border: 1px solid;
      th {
        background: #e5e5e5;
      }
    }
    table.p-table td,
    table.p-table th {
      border: 1px solid;
      text-align: left;
      padding: 10px;
    }
    .pl-50 {
      padding-left: 50px;
    }
    @media (max-width: 1000px) {
      .p-table {
        display: none;
      }
      .pl-50 {
        padding-left: 0;
      }
      h2 {
        font-size: 20px;
      }
    }
  }
`;

export default PageWrapper;
