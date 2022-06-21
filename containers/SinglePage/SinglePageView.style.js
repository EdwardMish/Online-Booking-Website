import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SinglePageWrapper = styled.div`
  padding-bottom: 56px;

  @media (max-width: 667px) {
    padding-bottom: 0;
  }
`;

export const LocationMeta = styled.div`
  color: ${themeGet('text.1', '#909090')};
  font-size: 13px;
  font-weight: 400;
`;

export const Title = styled.h2`
  color: ${themeGet('text.0', '#2D2D2D')};
  font-size: 25px;
  line-height: 34px;
  font-weight: 700;
  margin: 0 0 4px;
`;

export const RatingMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${themeGet('text.0', '#2D2D2D')};
  font-size: 20px;
  margin-bottom: 27px;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }

  i {
    color: ${themeGet('primary.0', '#2D2D2D')};
  }

  svg {
    fill: ${themeGet('primary.0', '#2D2D2D')};
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

export const TextButton = styled.div`
  margin: 30px 0 0;
  @media (max-width: 767px) {
    margin-top: 19px;
  }
`;

export const TobBarWrapper = styled.div`
  .scrollbar {
    box-shadow: none;

    .scrollbar_left {
      display: flex;
      align-items: center;
      img {
        max-height: 100px;
      }
      .topbar-title {
        font-size: 40px;
        font-weight: 700;
        @media (max-width: 1440px) {
          font-size: 37px;
        }
        @media (max-width: 1000px) {
          font-size: 28px;
        }
        @media (max-width: 780px) {
          font-size: 25px;
        }
      }
      a {
        color: ${themeGet('text.0', '#2D2D2D')};
        font-size: 15px;
        padding: 28px 20px;
        text-transform: capitalize;
        transition: color 0.2s ease-in-out;

        &:first-child {
          padding-left: 0;
        }

        @media (max-width: 1200px) {
          padding: 18px 20px;
        }

        &:hover {
          color: ${themeGet('primary.0', '#2D2D2D')};
        }

        &.active {
          font-weight: 700;
          color: ${themeGet('primary.0', '#2D2D2D')};
          border-bottom: 3px solid ${themeGet('primary.0', '#2D2D2D')};
        }
      }
    }

    .scrollbar_right {
      button,
      .ant-btn {
        @media (max-width: 767px) {
          min-width: 50px;
          svg {
            margin-right: 0;
          }
        }
      }
    }
  }

  &.isSticky {
    .sticky-inner-wrapper {
      > div {
        border-bottom: 0;
        box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.16);
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  text-align: center;
  button,
  button.ant-btn {
    margin: 0 5px;
    height: 37px;
    min-width: 90px;
    padding: 0 5px;
    border: none;
    color: ${themeGet('text.0', '#2D2D2D')};
    font-size: 15px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
    svg {
      width: 18.309px;
      height: 15.537px;
      margin-right: 10px;
      path {
        stroke: #000000;
        fill: #000000;
        strokewidth: 1px !important;
      }
    }

    &.active {
      svg {
        path {
          stroke: ${themeGet('color.4', '#FC5C63')};
          fill: ${themeGet('color.4', '#FC5C63')};
        }
      }
    }

    &:focus {
      outline: none;
    }
    &:hover {
      background-color: ${themeGet('color.2', '#F7F7F7')};
    }
    &:after {
      display: none;
    }

    &:first-child {
      margin-left: 0;
      svg {
        position: relative;
        top: 1px;
        path {
          strokewidth: 1.8px;
        }
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const PostImage = styled.div`
  height: 600px;
  position: relative;

  @media (max-width: 767px) {
    height: 406px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
  span > img {
    border-radius: 10px;
  }
  .image_gallery_button {
    background: ${themeGet('color.1', '#ffffff')};
    font-size: 15px;
    font-weight: 700;
    color: #2d2d2d;
    border: 0;
    height: 37px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: absolute;
    bottom: 30px;
    left: 25px;

    &:hover,
    &:focus {
      background: ${themeGet('color.2', '#F7F7F7')};
      color: ${themeGet('text.0', '#2D2D2D')};
    }
  }
`;

export default SinglePageWrapper;

export const ComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  height: 70px;
  margin: auto;
  padding: 20px 40%;
  background-color: #fff;
  @media (max-width: 1440px) {
    padding: 20px 40%;
  }
  @media (max-width: 1200px) {
    padding: 20px 35%;
  }
  @media (max-width: 991px) {
    padding: 20px 30%;
  }
  @media (max-width: 800px) {
    padding: 20px 20%;
  }
  @media (max-width: 600px) {
    padding: 20px 15%;
  }
  @media (max-width: 480px) {
    padding: 20px 10%;
  }
  .target {
    right: 10px;
    left: auto;

    @media (max-width: 480px) {
      right: 25px;
    }
  }

  /* date picker style */
  .date_picker {
    min-width: calc(250px - 14px);
    width: calc(100% - 14px);
    margin: 0 0 0 14px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px) {
      justify-content: flex-start;
      height: 60px;
    }

    @media (max-width: 480px) {
      height: 47px;
    }

    .DayPicker__withBorder {
      box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
    }

    .DateRangePicker {
      display: block;
      width: 100%;

      .DateRangePickerInput {
        border: 0;
        padding-right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;

        .DateRangePickerInput_clearDates,
        .DateRangePickerInput_clearDates {
          &.DateRangePickerInput_clearDates__small {
            display: none;
          }
        }

        .DateInput {
          width: 100%;
          padding: 0 15px 0 30px;
          background: transparent;

          @media (min-width: 569px) and (max-width: 991px) {
            padding: 0 25px 0 30px;
          }

          @media (max-width: 568px) {
            padding: 0 15px 0 25px;
          }

          .DateInput_fang {
            display: none;
          }

          .DateInput_input {
            padding: 0;
            font-weight: 400;
            color: ${themeGet('text.0', '#2D2D2D')};
            background: transparent;

            &.DateInput_input__focused {
              border-color: transparent;
            }

            &::placeholder {
              color: ${themeGet('text.0', '#2D2D2D')};
            }
          }
        }

        .DateRangePickerInput_arrow {
          & + .DateInput {
            input {
              text-align: right;
            }
          }
        }
      }

      .DateRangePicker_picker {
        margin-top: -12px;
        z-index: 2;

        @media (max-width: 991px) {
          top: 47px !important;
        }

        @media (max-width: 320px) {
          left: -29px !important;
          .DayPicker,
          .DayPicker > div > div,
          .DayPicker > div > div .DayPicker_transitionContainer {
            width: 294px !important;
          }

          .DayPicker {
            .DayPicker_weekHeader {
              padding: 0 !important;
            }

            .CalendarMonth {
              padding: 0 !important;
            }
          }
        }
      }
    }
  }

  /* icon style */
  > svg {
    z-index: 1;
    top: auto;
    &.map-marker,
    &.calendar,
    &.user-friends {
      left: 15px;
      right: auto;
      fill: ${themeGet('primary.0', '#2D2D2D')};
    }

    &.calendar {
      @media (max-width: 480px) {
        width: 14px;
        height: 14px;
      }
    }

    &.user-friends {
      width: 17px;
      height: 17px;
      @media (max-width: 480px) {
        width: 16px;
        height: 16px;
      }
    }

    &.caret-down {
      right: 12px;
      left: auto;
      fill: ${themeGet('text.1', '#909090')};

      @media (max-width: 991px) {
        right: 20px;
      }

      @media (max-width: 991px) {
        right: 15px;
      }
    }
  }
`;
