import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Map from 'components/Map/Map';
import Loader from 'components/Loader/Loader';
import { FixedMap } from './Listing.style';

const ListingMap = (props) => {
  const { mapData, geo } = props;
  return (
    <FixedMap>
      {isEmpty(mapData) ? <Loader /> : <Map location={mapData} multiple={true} geo={geo} />}
    </FixedMap>
  );
};

export default ListingMap;
