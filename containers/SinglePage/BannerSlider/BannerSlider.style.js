import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerSliderWrapper = styled.div`
  height: 600px;
  position: relative;
  .image-gallery-slide .image-gallery-image {
    height: 600px;
    border-radius: 10px;
  }
  @media (max-width: 767px) {
    height: 406px;
    .image-gallery-slide .image-gallery-image {
      height: 406px;
      border-radius: 10px;
    }
    .fullscreen .image-gallery-slide .image-gallery-image {
      max-height: 100vh;
      height: 100%;
      border-radius: 0;
    }
  }
  @media (max-width: 500px) {
    height: 300px;
    .image-gallery-slide .image-gallery-image {
      height: 300px;
      border-radius: 5px;
    }
  }
  .fullscreen .image-gallery-slide .image-gallery-image {
    max-height: 100vh;
    height: 100%;
    border-radius: 0;
  }
  .fullscreen .image-gallery-index {
    display: none;
  }
  .fullscreen .image-gallery-slide {
    height: 100vh;
  }
  .image-gallery-slides {
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 5%) 0px 2px 25px;
  }

  .image-gallery-slide {
    .image-gallery-image {
      object-fit: cover;
    }
  }

  .image-gallery-icon {
    .image-gallery-svg {
      height: 80px;
      width: auto;
    }
    &:hover {
      color: ${themeGet('color.1', '#ffffff')};
    }
  }

  .image-gallery-fullscreen-button {
    bottom: 30px;
    left: 145px;
    right: initial;
    padding: 5px;
    color: #2d2d2d;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 9px 16px;
    .image-gallery-svg {
      height: 20px;
      width: auto;
    }
    &:hover {
      color: #2d2d2d;
    }
  }
  .image-gallery-index {
    padding: 0;
    font-size: 15px;
    font-weight: 700;
    position: static;
    margin: 30px 0 16px 0;
    background-color: transparent;
    color: ${themeGet('text.0', '#2D2D2D')};

    &:after {
      content: 'photos';
      display: inline-block;
      margin-left: 0.25em;
    }
  }

  .image-gallery-thumbnails-wrapper {
    .image-gallery-thumbnails {
      padding: 0;

      .image-gallery-thumbnail {
        width: 150px;
        padding: 0;
        margin: 0 20px 0 0;
        border: 0;
        border-radius: 3px;
        overflow: hidden;
        position: relative;

        &.active {
          border: 0;
        }

        &:last-child {
          margin-right: 0;
        }

        &:before {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: ${themeGet('color.1', '#ffffff')};
          opacity: 0.7;
          z-index: 1;
          transform: scaleX(1);
          transform-origin: left center 0px;
          transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68) 0s;
        }

        &:hover,
        &.active {
          &:before {
            transform: scaleX(0);
            transform-origin: right center 0px;
            transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          }
        }
      }
    }
  }
`;

export default BannerSliderWrapper;
