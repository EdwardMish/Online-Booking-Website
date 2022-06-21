import React, { useState } from 'react';
import { Input } from 'antd';
import { useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { useRouter } from 'next/router';

const options = {
  types: ['(cities)'],
};

const libraries = ["places"];

const SearchInput = (props) => {
  const [searchBox, setSearchBox] = useState();
  const { query: { locality: defaultValue } } = useRouter();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAP_API_KEY,
    libraries
  });
  const { getInputValue, locality, placeholder } = props;
  const [locationInput, setLocationInput] = useState({
    searchedLocation: defaultValue,
    searchedPlaceAPIData: [],
  });

  const handleOnChange = (event) => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }
    setLocationInput({
      searchedLocation: event.target.value,
    });
  };
  const onLoad = (ref) => setSearchBox(ref);
  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : [],
    });
    getInputValue({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : [],
    });
  };

  const handleOnPressEnter = (event) => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }
    setLocationInput({ searchedLocation: event.target.value });
    getInputValue(locationInput);
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return (
    <div className="map_autocomplete">
      {isLoaded && (
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged} options={options}>
          <Input
            type="text"
            defaultValue={defaultValue}
            value={locationInput.searchedLocation || ''}
            placeholder={
              placeholder ? placeholder : locality ? `Search in ${locality}` : 'Search By Location'
            }
            size="large"
            onChange={handleOnChange}
            onPressEnter={handleOnPressEnter}
          />
        </StandaloneSearchBox>
      )}
    </div>
  );
};

const MapAutoComplete = (props) => {
  const { updateValue, locality, placeholder } = props;
  return <SearchInput getInputValue={updateValue} locality={locality} placeholder={placeholder} />;
};

export default MapAutoComplete;
