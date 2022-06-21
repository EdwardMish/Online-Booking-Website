import React from "react";
import { MarkerClusterer } from "@react-google-maps/api";
import MapWrapper from "./MapWrapper";
import HotelMapMarkerCluster from "./ListingPageMap";
import HotelMapMarkerSingle from "./SinglePageMap";

const Map = (props) => {
  const { multiple, location, geo } = props;

  const handleClustererClick = (data) => {
    data.getMarkers();
  };

  return (
    <>
      {multiple ? (
        <MapWrapper
          id="map-multiple-location"
          zoom={8}
          center={{
            lat: parseFloat(geo.lat[0]),
            lng: parseFloat(geo.lng[0]),
          }}
        >
          <MarkerClusterer gridSize={20} averageCenter enableRetinaIcons={true} onClick={handleClustererClick}>
            {(clusterer) => <HotelMapMarkerCluster location={location} geo={geo} clusterer={clusterer} />}
          </MarkerClusterer>
        </MapWrapper>
      ) : (
        <MapWrapper
          id="map-single-location"
          mapContainerStyle={{
            height: "400px",
            width: "100%",
          }}
          zoom={8}
          center={{
            lat: location.address.latitude,
            lng: location.address.longitude,
          }}
        >
          <HotelMapMarkerSingle hotel={location} />
        </MapWrapper>
      )}
    </>
  );
};

export default Map;
