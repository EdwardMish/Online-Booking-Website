import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const Wrapper = styled.form`
  display: flex;
  min-height: 60px;
  

  &.is-LISTING {
    @media (min-width: 1200px) {
      border: 1px solid #e5e5e5;
      background-color: #fbfbfb;
      border-radius: 5px;
      padding:20px 2%;
    }
  }

  @media (max-width: 1400px) {
    padding: 0;
    min-height: 50px;
  }

  > div {
    padding-left: 0;
    padding-right: 0;
  }

  .linkItem {
    padding: 1rem;
  }

  .scrollbar_right {
    flex-shrink: 0;
  }
  .change-stay {
    position: relative;
    width: 100%;
   
    img {
      position: absolute;
      z-index: 9;
      left: 12px;
      top: 30%;
    }
    .ant-select-selector {
      border: none;
      box-shadow: none;
      background: transparent;
    }
    .ant-select-selector .ant-select-selection-item {
      line-height: inherit;
    }
    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
      .ant-select-selector {
      border: none;
      box-shadow: none;
    }
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      padding:0 0 0 0;
    }
    .ant-picker,
    .ant-select,
    .map_autocomplete input {
      width: 100%;
      padding: 17px 0px 18px 45px;
      background: #fff;
      font-size: 16px;
      input {
        font-size: 16px;
        color: #2d2d2d;
      }
      .ant-picker-suffix {
        display: none;
      }
      .ant-picker-clear {
        display: none;
      }
    }
    .ant-select-dropdown {
      max-width: 150px;
      min-width: 150px !important;
    }
    .ant-select {
      border: 1px solid #d9d9d9;
      padding-bottom: 11px;
      color: #2d2d2d;
    }
    .change-submit {
      font-weight: 700;
      cursor: pointer;
      text-align:center;
      padding: 18px 0;
      justify-content: center;
      height: 100%;

      &:not(.is-LISTING) {
        border: none;
        background-color: #ffbf29;

        &:hover {
          color: #fff;
        }
      }

      &.is-LISTING {
        background-color: #ffffff;
        border: 1px solid #2d2d2d25;
      }
    }
  }

`;

export const RoomGuestWrapper = styled.div`
  width: 100%;

  strong {
    font-size: 15px;
    font-weight: 400;
    color: ${themeGet('text.0', '#2D2D2D')};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 5px;
  }

  .quantity {
    height: 30px;

    input {
      font-size: 15px;
    }

    button.btn svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow-x: auto;
  min-height: 110px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    min-height: 80px;
    margin-bottom: 20px;
  }
`;

export const RatingMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${themeGet('text.0', '#2D2D2D')};
  font-size: 23px;

  i {
    color: ${themeGet('primary.0', '#2D2D2D')};
  }

  svg {
    fill: #ffbf29;
    width: 19px;
    height: 19px;
  }

  strong {
    font-weight: 700;
    margin-left: 8px;
    margin-top: -2px;
  }
`;

export const Text = styled.p`
  color: ${themeGet('text.0', '#2D2D2D')};
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  margin: 0 0 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;
