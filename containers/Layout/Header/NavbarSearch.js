import React, { useContext } from 'react';
import Router, { withRouter } from 'next/router';
import isEmpty from 'lodash/isEmpty';
import { FiSearch } from 'react-icons/fi';
import MapAutoComplete from 'components/Map/MapAutoComplete';
import { mapDataHelper } from 'components/Map/mapDataHelper';
import { NavbarSearchWrapper } from './Header.style';
import { SearchContext } from 'context/SearchProvider';
import { setStateToUrl } from 'library/helpers/url-handler';

import { message } from 'antd';

const NavbarSearch = () => {
  const { state, dispatch } = useContext(SearchContext);
  const initialState = {
    amenities: state.amenities || [],
    property: state.property || [],
    setStartDate: state.setStartDate || null,
    setEndDate: state.setEndDate || null,
    minPrice: parseInt(state.minPrice) || 0,
    maxPrice: parseInt(state.maxPrice) || 100,
    locality: state.locality,
    location_lat: state.location_lat || null,
    location_lng: state.location_lng || null,
    room: state.room || [],
    room_ref: state.room_ref,
  };

  const handleUpdate = async (value) => {
    const { searchedPlaceAPIData } = value;

    if (!searchedPlaceAPIData) return;
    if (searchedPlaceAPIData && !searchedPlaceAPIData[0].types.includes('locality')) {
      message.error('Please add a city!');
      return;
    }
    let tempLocation = [];
    const mapData = !isEmpty(searchedPlaceAPIData) ? mapDataHelper(searchedPlaceAPIData) : [];
    if (!isEmpty(mapData) && mapData.length !== 0) {
      mapData.forEach((singleMapData) =>
        tempLocation.push({
          location_lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
          location_lng: singleMapData ? singleMapData.lng.toFixed(3) : null,
        })
      );
    }
    const locality =
      mapData && mapData[0] && mapData[0].city.includes('City')
        ? mapData[0].city.replace(' City', '')
        : mapData[0].city;
    console.log('mapData', locality);

    const searchLocation = tempLocation ? tempLocation[0] : {};
    if (!isEmpty(searchLocation)) {
      const query = {
        ...initialState,
        locality: locality,
        location_lat: parseFloat(searchLocation.location_lat),
        location_lng: parseFloat(searchLocation.location_lng),
      };
      const params = setStateToUrl(query);
      dispatch({
        type: 'UPDATE',
        payload: {
          ...initialState,
          ...query,
        },
      });

      Router.push({
        pathname: '/search-result',
        query: params,
      });
    }
  };

  return (
    <NavbarSearchWrapper className="navbar_search">
      <MapAutoComplete updateValue={(value) => handleUpdate(value)} locality={state?.locality} />
      <FiSearch />
    </NavbarSearchWrapper>
  );
};

export default withRouter(NavbarSearch);
