import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const Wrapper = styled.div`
  min-height: 80px;
  background-color: #ffffff;
  overflow-y: hidden;

  @media (max-width: 1200px) {
    min-height: 60px;
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
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow-x: auto;
  min-height: 110px;
  margin-bottom: 30px;

  .rating-mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    min-height: 80px;
    margin-bottom: 20px;
  }

  @media (max-width: 1000px) {
    min-height: 80px;
    margin-bottom: 20px;
    display: block;
    .rating-desktop > div {
      display: none;
    }
    .scrollbar_left {
      justify-content: flex-start;
      img {
        width: 80px;
      }
    }
    .rating-mobile {
      display: flex;
      justify-content: flex-start;
      h3 {
        font-size: 16px;
      }
    }
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
