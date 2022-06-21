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

export const RatingArea = styled.div`
  svg {
    fill: #ffbf29;
    width: 19px;
    height: 19px;
  }
`;

const ReservationFormWrapper = styled.form`
  border: 1px solid #e5e5e5;
  background-color: #fbfbfb;
  margin-bottom: 15px;
  .card-content {
    width: 100%;
    padding-left: 10px;
    padding-top: 5px;
    border-right: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 1200px) {
      width: 100%;
      text-align: center;
      padding-top: 15px;
    }
  }
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

export const LocationWrapper = styled.div`
  margin: 0;
  color: #2d2d2d;
  font-size: 16px;
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
  margin-top: 10px;
  width: 100%;
  color: #000000;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  a, button {
    width: 80%;
    font-size: 16px;
    font-weight: bold;
    background: #ffbf29;
    color: #2d2d2d;
    border: none;
    margin: 10px 10% 0;
    padding: 12px 0;
    height: auto;
    @media (max-width: 1200px) {
      width: 90%;
      margin: 10px 5%;
    }
    cursor: pointer;
  }
`;

export default ReservationFormWrapper;
