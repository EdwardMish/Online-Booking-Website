import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const footerBg = '/images/footer-bg.jpg';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${themeGet('color.1', '#ffffff')};

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  padding: 47px 0 66px;
  color: #2d2d2d;
  font-weight: bold;

  text-align: left;

  h3 {
    font-weight: bold;
    font-size: 25px;
  }
  @media (max-width: 800px) {
    text-align: center;
  }
  .footer-col-1 {
    margin-bottom: 50px;

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
    h3 {
      font-size: 31px;
    }

    p {
      font-size: 16px;
      margin-bottom: 0;
    }
    @media (max-width: 780px) {
      text-align: center;

      p {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 800px) {
    padding: 60px 0 50px;
    .menu-w {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #ffffff;
  p {
    text-align: center;
    position: absolute;
    font-size: 28px;
    top: 38%;
    opacity: 0.7;
  }
  h3 {
    position: absolute;
    top: 45%;
    color: #ffffff;
    font-weight: bold;
    font-size: 45px;
    text-align: center;
  }
  @media (max-width: 800px) {
    p {
      position: relative;
      font-size: 22px;
      color: #2d2d2d;
    }
    h3 {
      position: relative;
      font-size: 35px;
      color: #2d2d2d;
    }
  }
  @media (max-width: 550px) {
    p {
      width: 60%;
      text-align: center;
      margin-top: 15px;
      position: relative;
      font-size: 22px;
      color: #2d2d2d;
    }
    h3 {
      color: #2d2d2d;
      position: relative;
      font-size: 28px;
    }
  }
`;

export const MenuWrapper = styled.div`
  margin-top: 30px;
  padding-left: 0px;

  @media (max-width: 480px) {
    margin-top: 29px;
    padding-left: 0;
  }

  ul,
  .ant-menu,
  ul.ant-menu {
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    box-shadow: none;

    @media (max-width: 480px) {
      flex-wrap: wrap;
    }

    li {
      margin: 8px 30px;
      padding: 0;
      height: auto;
      margin-bottom: 0 !important;

      @media (max-width: 480px) {
        margin: 3px 7px;
      }

      &.ant-menu-item-selected {
        background-color: transparent;
      }

      color: ${themeGet('text.0', '#2D2D2D')};
      font-size: 15px;
      line-height: 18px;
      font-weight: 700;
      transition: color 0.2s ease-in-out;

      a {
        color: ${themeGet('text.0', '#2D2D2D')};
        transition: color 0.2s ease-in-out;
        font-size: 15px;
        font-weight: 400;

        &:hover {
          color: ${themeGet('primary.0', '#2D2D2D')};
        }
      }
    }
  }
  ul.ant-menu {
    display: block;
  }
`;

export const CopyrightArea = styled.div`
  color: ${themeGet('text.1', '#909090')};
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  margin-top: 29px;

  @media (max-width: 480px) {
    margin-top: 14px;
  }
`;

export const SecondaryFooter = styled.div`
  @media (max-width: 1200px) {
    height: 74px;
  }
`;

export default FooterWrapper;
