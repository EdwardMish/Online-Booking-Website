import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  width: 100%;
  .faq-banner-mb {
    display: none !important;
  }
  .faq-banner-dk {
    display: block !important;
  }
  position: relative;
  background-color: ${themeGet('color.1', '#ffffff')};
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 991px) {
    .faq-banner-dk {
      display: none !important;
    }
    .faq-banner-mb {
      display: block !important;
    }
    > div {
      max-width: 100%;
    }
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 28px 30px 30px;
  border-radius: 6px;

  position: absolute;
  top: 100px;
  z-index: 1;

  > p {
    text-align: center;
    font-size: 21px;
    margin-bottom: 0;
    color: #ffffff;
  }

  @media (max-width: 1200px) {
    width: 100%;
    padding: 15px;
    position: relative;
    top: -400px;
  }
  @media (max-width: 1000px) {
    top: -350px;
  }
  @media (max-width: 700px) {
    top: -300px;
  }
  @media (max-width: 550px) {
    top: -230px;
  }
  @media (max-width: 440px) {
    top: -200px;
  }
  > h1 {
    text-align: center;
    color: #ffffff;
    font-size: 48px;
    font-weight: bold;
    @media (max-width: 1200px) {
      font-size: 30px;
    }
  }

  > div {
    @media (min-width: 481px) {
      margin-top: 30px;
    }
  }

  h2 {
    margin-bottom: 10px;
  }
`;

export const ComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  .target {
    right: 10px;
    left: auto;

    @media (max-width: 480px) {
      right: 25px;
    }
  }

  /* map auto complete style */
  .map_autocomplete {
    width: 100%;
    position: relative;

    &::after {
      content: '';
      width: 1px;
      height: 20px;
      display: inline-block;
      position: absolute;
      top: calc(50% - 10px);
      right: 0;
      left: auto;
      background-color: ${themeGet('border.3', '#E6E6E6')};
    }

    @media (max-width: 991px) {
      &::after {
        top: auto;
        bottom: 0;
        height: 1px;
        width: calc(100% - 40px);
        left: 20px;
      }
    }

    @media (max-width: 480px) {
      &::after {
        width: calc(100% - 30px);
        left: 15px;
      }
    }

    input {
      border: 0;
      font-size: 15px;
      font-weight: 400;
      border-radius: 0;
      height: 60px;
      padding: 0 30px 0 40px;
      background: transparent;
      color: ${themeGet('text.0', '#2D2D2D')};

      @media (max-width: 480px) {
        height: 47px;
        padding: 0 30px 0 36px;
      }

      &:hover,
      &:focus {
        outline: none;
        box-shadow: none;
      }

      &::placeholder {
        color: ${themeGet('text.0', '#2D2D2D')};
      }
    }
  }
`;

export default BannerWrapper;
