import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ListingWrapper = styled.div`
  position: relative;

  /* checkbox group component style */
  .ant-checkbox-group {
    .ant-checkbox-group-item {
      .ant-checkbox {
        .ant-checkbox-inner {
          border-color: ${themeGet('text.1', '#909090')};
        }
        &.ant-checkbox-checked {
          .ant-checkbox-inner {
            border-color: ${themeGet('primary.0', '#2D2D2D')};
            background-color: ${themeGet('primary.0', '#2D2D2D')};
          }
          &::after {
            display: none;
          }
        }
      }
      span {
        color: ${themeGet('text.0', '#2D2D2D')};
        font-size: 15px;
      }
      &:hover {
        .ant-checkbox {
          .ant-checkbox-inner {
            border-color: ${themeGet('primary.0', '#2D2D2D')};
          }
        }
      }
    }
  }

  /* date picker component style */
  .DateRangePicker {
    .DateRangePickerInput {
      .DateInput {
        .DateInput_input {
          &.DateInput_input__focused {
            border-bottom: 0;
          }
        }
        .DateInput_fang {
          top: 40px !important;
        }
      }
    }
  }

  /* price range component style */
  .ant-slider {
    .ant-slider-rail {
      height: 5px;
      border-radius: 3px;
      background-color: ${themeGet('color.13', '#E2E2E2')};
    }
    .ant-slider-track {
      background-color: #8cc8ff;
    }
    .ant-slider-step {
      .ant-slider-dot {
        width: 3px;
        height: 3px;
        top: 0;
        border-color: ${themeGet('color.13', '#E2E2E2')};
        background-color:${themeGet('color.13', '#E2E2E2')};
        &:first-child {
          margin-left: -1px;
        }
        &.ant-slider-dot-active {
          border-color: #8cc8ff;
          background-color:#8cc8ff;
        }
      }
    }
    
    .ant-slider-handle {
      margin-top: -8px;
      width: 20px;
      height: 20px;
      border: 6px solid #4772FF;
      box-shadow: 0 2px 2px ${themeGet('color.5', 'rgba(0, 0, 0, 0.25)')};
      &:focus {
        box-shadow: none;
      }
    }
    .ant-slider-mark {
      margin-top: 10px;
      .ant-slider-mark-text {
        font-size: 15px;
        color: ${themeGet('text.0', '#2D2D2D')};
      }
    }
  }

  /* toolbar area style */
  .toolbar {
    padding-left: 30px;
    padding-right: 30px;
    border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
    @media (min-width: 1441px) {
      min-height: 78px;
    }
  }

  /* load more wrapper style */
  .loadmore_wrapper {
    margin-top: 30px;
    > button {
      border: 0;
      min-width: 115px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
      font-size: 15px;
      font-weight: 700;
      border-radius: 3px;
      color: ${themeGet('color.1', '#ffffff')};
      border-color: ${themeGet('primary.0', '#2D2D2D')};
      background-color: ${themeGet('primary.0', '#2D2D2D')};
      transition: all 0.3s ease;
      &:hover {
        outline: none;
        opacity: 0.8;
      }
      &:focus {
        outline: none;
      }
      &::after {
        content: none;
      }
    }
  }
`;

export const ShowMapCheckbox = styled.div`
  .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }

  .ant-checkbox {
    top: 0;
    + span {
      font-size: 14px;
      font-weight: 700;
      color: ${themeGet('text.0', '#2D2D2D')};
    }
  }

  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border-color: ${themeGet('border.3', '#E6E6E6')};
  }

  .ant-checkbox-wrapper {
    .ant-checkbox-checked {
      .ant-checkbox-inner {
        border-color: ${themeGet('primary.0', '#2D2D2D')};
        background-color: ${themeGet('primary.0', '#2D2D2D')};
        &::after {
          transform: rotate(45deg) scale(1) translate(-50%, -70%);
        }
      }
    }
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${themeGet('primary.0', '#2D2D2D')};
  }
`;

export const PostsWrapper = styled.div`
  max-width: 1020px;
  ul {
    text-align: center;
  }
`;

export const FixedMap = styled.div`
  height: 400px;
  z-index: 9;
  @media (max-width: 767px) {
    width: 100%;
  }

  > div {
    height: 400px;
    width: 100%;
  }
`;

export const Label = styled.div`
  color: ${themeGet('text.0', '#2D2D2D')};
  font-size: 15px;
  margin-right: 15px;
`;

export const FilterArea = styled.div`
  overflow: hidden;
  button,
  button.ant-btn {
    color: ${themeGet('text.0', '#2D2D2D')};
    font-size: 15px;
    height: 38px;
    border-radius: 3px;
    border: 1px solid ${themeGet('border.3', '#E6E6E6')};

    &::after {
      content: none;
    }

    &:hover {
      background-color: ${themeGet('border.3', '#E6E6E6')};
    }

    &.active {
      color: ${themeGet('color.1', '#ffffff')};
      border-color: ${themeGet('primary.0', '#2D2D2D')};
      background-color: ${themeGet('primary.0', '#2D2D2D')};
    }
  }
`;

export const FilterElementsWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  .accordion {
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 35px;
    margin-right: -35px;
    height: calc(100% - 68px);

    /* accordion item style */
    .accordion__item {
      border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
      &:last-child {
        border-bottom: 0;
      }

      /* accordion heading area style */
      .accordion__heading {
        .accordion__button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          padding: 29px 0;
          &:hover,
          &:focus {
            outline: 0;
          }
          h4 {
            font-size: 15px;
            color: ${themeGet('text.0', '#2D2D2D')};
            text-transform: capitalize;
          }
        }
      }

      /* accordion panel area style */
      .accordion__panel {
        padding-bottom: 29px;
        animation: 0.25s ${fadeIn} ease;
        &[hidden] {
          animation: 0.25s ${fadeIn} ease;
        }

        /* date picker component style */
        .date_picker {
          margin-bottom: 0;
          .DateRangePicker {
            .DateRangePickerInput {
              border-color: ${themeGet('border.3', '#E6E6E6')};
              .DateInput__small {
                width: 102px;
                .DateInput_input__small {
                  padding: 12px 10px 10px;
                  font-weight: 400;
                  color: ${themeGet('text.0', '#2D2D2D')};
                }
              }
            }
            .DateRangePicker_picker {
              left: 1px !important;
            }
          }
        }

        /* checkbox group style */
        .ant-checkbox-group {
          display: flex;
          flex-direction: column;
          .ant-checkbox-group-item {
            margin-bottom: 15px;
            .ant-checkbox {
              .ant-checkbox-inner {
                border-color: ${themeGet('text.1', '#909090')};
              }
              &.ant-checkbox-checked {
                .ant-checkbox-inner {
                  border-color: ${themeGet('primary.0', '#2D2D2D')};
                  background-color: ${themeGet('primary.0', '#2D2D2D')};
                }
                &::after {
                  display: none;
                }
              }
            }
            span {
              color: ${themeGet('text.0', '#2D2D2D')};
              font-size: 15px;
            }
            &:hover {
              .ant-checkbox {
                .ant-checkbox-inner {
                  border-color: ${themeGet('primary.0', '#2D2D2D')};
                }
              }
            }
          }
        }

        /* price range component style */
        .ant-slider {
          margin-left: 7px;
          max-width: 320px;
          .ant-slider-rail {
            height: 5px;
            border-radius: 3px;
            background-color: ${themeGet('color.13', '#E2E2E2')};
          }
          .ant-slider-track {
            background-color: #8cc8ff;
          }
          .ant-slider-step {
            .ant-slider-dot {
              width: 5px;
              height: 5px;
              top: 0;
              border-color: ${themeGet('color.13', '#E2E2E2')};
              background-color: ${themeGet('color.13', '#E2E2E2')};
              &:first-child {
                margin-left: -1px;
              }
              &.ant-slider-dot-active {
                border-color: #8cc8ff;
                background-color: #8cc8ff;
              }
            }
          }
          &:hover {
            .ant-slider-track {
              background-color: #8cc8ff;
            }
            .ant-slider-handle:not(.ant-tooltip-open) {
              border-color: ${themeGet('primary.0', '#2D2D2D')};
            }
          }
          .ant-slider-handle {
            margin-top: -8px;
            width: 20px;
            height: 20px;
            border: 6px solid ${themeGet('primary.0', '#2D2D2D')};
            box-shadow: 0 2px 2px ${themeGet('color.5', 'rgba(0, 0, 0, 0.25)')};
            &:focus {
              box-shadow: none;
            }
          }
          .ant-slider-mark {
            margin-top: 10px;
            .ant-slider-mark-text {
              font-size: 15px;
              color: ${themeGet('text.0', '#2D2D2D')};
            }
          }
        }
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button.ant-btn {
    color: ${themeGet('text.0', '#2D2D2D')};
    font-size: 15px;
    height: 38px;
    border-radius: 3px;
    border: 1px solid ${themeGet('border.3', '#E6E6E6')};
    &.ant-btn-primary {
      color: ${themeGet('color.1', '#ffffff')};
      border-color: ${themeGet('primary.0', '#2D2D2D')};
      background-color: ${themeGet('primary.0', '#2D2D2D')};
      margin-left: 10px;
    }
    &::after {
      display: none;
    }
  }
`;

export default ListingWrapper;
