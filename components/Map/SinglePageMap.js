import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import HotelInfoWindow from './MapInfoWindow';

const makerImage = '/images/hotelMapMarker.png';

const SingleMapDisplay = ({ hotel }) => {
  let hotelData = [];
  const [isOpen, setIsOpen] = useState(false);
  const [markerIndex, setMarkerIndex] = useState(0);
  const location = hotel.address;
  const formattedAddress =
    location.street_address.en + location.locality.en + location.region.en + location.country_code;
  const infoWindowToggle = (index) => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  hotelData.push({
    lat: location?.latitude,
    lng: location?.longitude,
    id: hotel?.id,
    title: hotel?.name.en,
    thumbUrl: hotel && hotel.images > 0 && hotel.images[0].urls.large,
    formattedAddress: formattedAddress,
    price: hotel?.price,
    rating: hotel?.star_rating,
    ratingCount: hotel?.star_rating,
  });

  return hotelData.map((singlePostLoaction, index) => {
    return (
      <Marker
        key={index}
        icon={makerImage}
        position={singlePostLoaction}
        onClick={() => {
          infoWindowToggle(singlePostLoaction.id);
        }}
      >
        {isOpen && markerIndex === singlePostLoaction.id ? (
          <HotelInfoWindow
            popData={singlePostLoaction}
            onCloseClick={() => {
              infoWindowToggle(singlePostLoaction.id);
            }}
          />
        ) : (
          ''
        )}
      </Marker>
    );
  });
};

const HotelMapMarkerSingle = (props) => {
  return <SingleMapDisplay {...props} />;
};

export default HotelMapMarkerSingle;
