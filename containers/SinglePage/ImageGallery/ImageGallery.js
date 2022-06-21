import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import ImageGalleryWrapper from './ImageGallery.style';

const PostImageGallery = ({ images }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = images.map((image) => ({
      original: image.urls.large,
      thumbnail: image.urls.thumb,
    }));
    setItems(items);
  }, [images]);
  return (
    <ImageGalleryWrapper>
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={false}
        showIndex={true}
        lazyLoad={true}
        slideDuration={550}
      />
    </ImageGalleryWrapper>
  );
};

export default PostImageGallery;
