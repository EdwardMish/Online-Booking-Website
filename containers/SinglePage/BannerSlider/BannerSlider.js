import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import BannerSliderWrapper from './BannerSlider.style';

const BannerSlider = ({ images }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = images.map((image) => ({
      original: image.urls.large.replace('http', 'https'),
      thumbnail: image.urls.thumb?.replace('http:', 'https'),
    }));
    setItems(items);
  }, [images]);
  return (
    <BannerSliderWrapper>
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={true}
        showIndex={false}
        lazyLoad={true}
        slideDuration={550}
        showThumbnails={false}
        originalHeight={550}
      />
    </BannerSliderWrapper>
  );
};

export default BannerSlider;
