import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ImageWrapper = styled.div`
  .react-multi-carousel-list {
    min-height: 550px;
    background-color: #e9e8ec;
  }

  .react-multi-carousel-item {
    height: 550px;
  }

  .react-multiple-carousel__arrow {
    top: 0;
    width: 22%;
    height: 100%;
    border-radius: 0;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 1;

    &::before {
      font-weight: 700;
    }
  }

  .react-multiple-carousel__arrow--left {
    left: 0;
    background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
    &:hover {
      background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
    }
  }

  .react-multiple-carousel__arrow--right {
    right: 0;
    background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
    &:hover {
      background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
    }
  }

  .react-multi-carousel-dot-list {
    position: absolute;
    bottom: -30%;
    left: 0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
    transition: bottom 0.3s ease;
  }

  .react-multi-carousel-dot {
    align-items: center;

    button {
      width: 6px;
      height: 6px;
      border: 0;
      background-color: ${themeGet('color.3', '#E9E8E8')};
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }
  }

  .react-multi-carousel-dot--active {
    button {
      width: 8px;
      height: 8px;
      background-color: ${themeGet('color.1', '#ffffff')};
    }
  }
`;

const ReservationFormWrapper = styled.form`
  border: 1px solid #e5e5e5;
  background-color: #fbfbfb;
  margin-bottom: 15px;
  .ant-carousel .slick-list .slick-slide > div > div {
    margin-bottom: -6px;
  }
  border-radius: 5px;
  img {
    border-radius: 5px 0 0 5px;
  }
  @media (max-width: 1200px) {
    img {
      border-radius: 5px 5px 0 0;
    }
  }
`;

export const FieldWrapper = styled.div`
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    margin-bottom: 15px;
  }
  .for-lg {
    display: block;
  }
  .for-md {
    display: none;
  }
  @media (max-width: 1400px) {
    .for-lg {
       display: none;
    }
    .for-md {
      display: block;
    }
  }
  @media (max-width: 800px) {
    .for-lg {
      display: block;
   }
    .for-md {
      display: none;
    }
  }
  
  label {
    font-size: 15px;
    color: ${themeGet('text.0', '#2D2D2D')};
    text-transform: capitalize;
    margin-bottom: 7px;
    display: block;
  }
  
  /* date picker component style */
  .date_picker {
    margin-bottom: 0;
    > label {
      margin-bottom: 0;
      width: 100%;
    }
    .DateRangePicker {
      width: 100%;
      input,
      .DateRangePickerInput {
        border: 0;
        width: 100%;
        height: 54px;
        display: flex;
        padding: 0 15px;
        font-size: 15px;
        font-weight: 400;
        border-radius: 3px;
        align-items: center;
        justify-content: space-between;
        color: ${themeGet('text.0', '#2D2D2D')};
        background-color: ${themeGet('color.2', '#F7F7F7')};
        &::placeholder {
          font-size: 15px;
          color: ${themeGet('text.0', '#2D2D2D')};
        }
        .DateInput {
          width: auto;
          .DateInput_fang {
            top: 46px !important;
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
        top: 56px !important;
        .DayPicker {
          width: 316px !important;
          .DayPicker_focusRegion {
            .DayPicker_transitionContainer {
              width: 316px !important;
              .CalendarMonth_caption {
                font-size: 16px;
                color: ${themeGet('text.0', '#2D2D2D')};
              }
            }
          }
        }
      }
    }
  }

  /* Room guest component style */
  .view_with__popup {
    .popup_handler {
      button,
      button.ant-btn {
        border: 0;
        width: 100%;
        display: flex;
        padding: 0 25px;
        font-size: 15px;
        font-weight: 400;
        min-height: 54px;
        border-radius: 3px;
        align-items: center;
        justify-content: space-between;
        color: ${themeGet('text.0', '#2D2D2D')};
        background-color: ${themeGet('color.2', '#F7F7F7')};
        &::after {
          display: none;
        }
      }
    }
    &.active {
      .popup_container {
        max-width: 316px;
        padding: 25px 22px;
        position: absolute;
        left: 0;
        top: 56px;
        z-index: 2;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
        &::before {
          content: '';
          width: 14px;
          height: 14px;
          top: -8px;
          left: 36px;
          position: absolute;
          border-radius: 2px;
          transform: rotate(45deg);
          background-color: ${themeGet('color.1', '#ffffff')};
          border-top: 1px solid ${themeGet('border.3', '#E6E6E6')};
          border-left: 1px solid ${themeGet('border.3', '#E6E6E6')};
        }
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
    margin-bottom: 10px;
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

export const FormActionArea = styled.div`
  button.ant-btn-primary {
    width: 100%;
    height: 47px;
    color: ${themeGet('color.1', '#ffffff')};
    font-size: 15px;
    font-weight: 700;
    border-color: ${themeGet('primary.0', '#2D2D2D')};
    background-color: ${themeGet('primary.0', '#2D2D2D')};
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: none;
      opacity: 0.93;
    }
  }
`;

export default ReservationFormWrapper;
