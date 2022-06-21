import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import HotelInfoWindow from './MapInfoWindow';

const makerImage = '/images/hotelMapMarker.png';

const HotelMapMarkerCluster = ({ location, clusterer, geo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [markerIndex, setMarkerIndex] = useState('');
  let hotelData = [];
  const infoWindowToggle = (index) => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  location &&
    location.forEach((item, index) => {
      hotelData.push({
        id: item.room['hotel-id'],
        lat: parseFloat(geo.lat[index]),
        lng: parseFloat(geo.lng[index]),
        title: item.name,
        // thumbUrl: item.image.thumb_url,
        formattedAddress: item.room.title['#text'],
        price: item['lowest-average'],
      });
    });

  return hotelData.map((singlePostLocation, index) => {
    return (
      <Marker
        key={index}
        icon={makerImage}
        clusterer={clusterer}
        position={singlePostLocation}
        onMouseOver={() => infoWindowToggle(singlePostLocation.id)}
        onClick={() => infoWindowToggle(singlePostLocation.id)}
      >
        {isOpen && markerIndex === singlePostLocation.id ? (
          <HotelInfoWindow
            popData={singlePostLocation}
            onCloseClick={() => infoWindowToggle(singlePostLocation.id)}
          />
        ) : (
          ''
        )}
      </Marker>
    );
  });
};

export default HotelMapMarkerCluster;
