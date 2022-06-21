import React, { useState, useContext, useEffect, useCallback } from 'react';
import Router from 'next/router';
import isEmpty from 'lodash/isEmpty';
import { FaMapMarkerAlt, FaRegCalendar, FaUserFriends } from 'react-icons/fa';
import { Button } from 'antd';
import MapAutoComplete from 'components/Map/MapAutoComplete';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import { mapDataHelper } from 'components/Map/mapDataHelper';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import { FormWrapper, ComponentWrapper, RoomGuestWrapper, ItemWrapper } from './Search.style';
import { LISTING_SEARCH } from '../../../settings/constant';
import { SearchContext } from '../../../context/SearchProvider';
import { createRoomInfo } from '../../../library/helpers/common';
import { message } from 'antd';
import Loader from 'components/Loader/Loader';

const calendarItem = {
  separator: '/',
  format: 'MM/DD/YYYY',
  locale: 'en',
};

const SearchForm = () => {
  const { state, dispatch } = useContext(SearchContext);
  const [searchDate, setSearchDate] = useState({
    setStartDate: null,
    setEndDate: null,
  });
  const [loading, setLoading] = useState(false);
  const [mapValue, setMapValue] = useState([]);

  const [rooms, setRooms] = useState([{ adult: 1, children: 0 }]);

  const handleUpdate = (event) => {
    const { searchedPlaceAPIData } = event;
    if (!isEmpty(searchedPlaceAPIData)) {
      setMapValue(searchedPlaceAPIData);
    }
  };

  const handleAdd = () => {
    setRooms((rooms) => [...rooms, { adult: 1, children: 0 }]);
  };

  const handleRemove = () => {
    setRooms(rooms.slice(0, rooms.length - 1));
  };

  const handleIncrement = (type, room) => {
    setRooms([
      ...rooms.slice(0, room),
      Object.assign({}, rooms[room], { [type]: rooms[room][type] + 1 }),
      ...rooms.slice(room + 1),
    ]);
  };

  const handleDecrement = (type, room) => {
    if (rooms[room][type] <= 0) {
      return false;
    }
    setRooms([
      ...rooms.slice(0, room),
      Object.assign({}, rooms[room], { [type]: rooms[room][type] - 1 }),
      ...rooms.slice(room + 1),
    ]);
  };

  const handleIncDecOnChnage = (e, type, room) => {
    let currentValue = e.target.value;
    setRooms([
      ...rooms.slice(0, room),
      Object.assign({}, rooms[room], { [type]: currentValue }),
      ...rooms.slice(room + 1),
    ]);
  };

  const goToSearchPage = async () => {
    let tempLocation = [],
      dateRange = {},
      location_lat = '',
      location_lng = '';
    const mapData = mapValue ? mapDataHelper(mapValue) : [];

    mapData &&
      mapData.map((singleMapData) => {
        return tempLocation.push({
          formattedAddress: singleMapData ? singleMapData.formattedAddress : '',
          lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
          lng: singleMapData ? singleMapData.lng.toFixed(3) : null,
        });
      });
    const location = tempLocation ? tempLocation[0] : {};
    const locality = mapData && mapData[0] && mapData[0].city.replace(' City', '');
    if (!locality) {
      message.error('Please add a city!');
      return;
    }

    if (!searchDate.setStartDate || !searchDate.setEndDate || !rooms) {
      message.error('Please Select All Fields');
      return;
    }

    dateRange.startDate = searchDate ? searchDate.setStartDate : null;
    dateRange.endDate = searchDate ? searchDate.setEndDate : null;
    const roomInfo = createRoomInfo(rooms);

    if (location && location.lat) {
      location_lat = location.lat;
    }

    if (location && location.lng) {
      location_lng = location.lng;
    }

    let query = {
      setStartDate: searchDate.setStartDate,
      setEndDate: searchDate.setEndDate,
      room: roomInfo,
      locality: locality,
      location_lat,
      location_lng,
    };
    for (const key in query) {
      if (query[key] === '' || query[key] === null || query[key] === 0) {
        delete query[key];
      }
    }
    setLoading(true);
    dispatch({
      type: 'UPDATE',
      payload: {
        ...state,
        setStartDate: searchDate.setStartDate,
        setEndDate: searchDate.setEndDate,
        room: roomInfo,
        locality: locality,
        room_ref: rooms,
        location_lat,
        location_lng,
      },
    });

    Router.push(
      {
        pathname: `${LISTING_SEARCH}`,
        query: query,
      },
      {
        pathname: `${LISTING_SEARCH}`,
        query: query,
      },
      { shallow: true }
    );
  };

  return (
    <FormWrapper>
      <ComponentWrapper>
        <FaMapMarkerAlt className="map-marker" />
        <MapAutoComplete updateValue={(value) => handleUpdate(value)} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 144.083 144"
          enableBackground="new 0 0 144.083 144"
          className="target"
        >
          <path d="M117.292,69h-13.587C102.28,53.851,90.19,41.761,75.042,40.337V26.5h-6v13.837C53.893,41.761,41.802,53.851,40.378,69  H26.792v6h13.587c1.425,15.148,13.515,27.238,28.663,28.663V117.5h6v-13.837C90.19,102.238,102.28,90.148,103.705,75h13.587V69z   M72.042,97.809c-14.23,0-25.809-11.578-25.809-25.809c0-14.231,11.578-25.809,25.809-25.809S97.85,57.769,97.85,72  C97.85,86.23,86.272,97.809,72.042,97.809z" />
          <path d="M72.042,52.541c-10.729,0-19.459,8.729-19.459,19.459s8.729,19.459,19.459,19.459S91.5,82.729,91.5,72  S82.771,52.541,72.042,52.541z M72.042,85.459c-7.421,0-13.459-6.037-13.459-13.459c0-7.421,6.038-13.459,13.459-13.459  S85.5,64.579,85.5,72C85.5,79.422,79.462,85.459,72.042,85.459z" />
        </svg>
      </ComponentWrapper>
      <ComponentWrapper>
        <FaRegCalendar className="calendar" />
        <DateRangePickerBox
          item={calendarItem}
          startDateId="startDateId-id-home"
          endDateId="endDateId-id-home"
          updateSearchData={(setDateValue) => setSearchDate(setDateValue)}
          showClearDates={true}
          small={true}
          numberOfMonths={1}
        />
      </ComponentWrapper>
      <ComponentWrapper>
        <FaUserFriends className="user-friends" />
        <ViewWithPopup
          key={200}
          noView={true}
          className="room_guest"
          view={
            <Button type="default">
              <span>Room {rooms.length > 0 && `: ${rooms.length}`}</span>
              <span>-</span>
              <span>Adult{rooms[0].adult > 0 && `: ${rooms[0].adult}`}</span>
            </Button>
          }
          popup={
            <RoomGuestWrapper>
              {rooms.map((room, index) => (
                <pop key={index}>
                  <ItemWrapper>
                    <strong>Adult</strong>
                    <InputIncDec
                      id="adult"
                      increment={() => handleIncrement('adult', index)}
                      decrement={() => handleDecrement('adult', index)}
                      onChange={(e) => handleIncDecOnChnage(e, 'adult', index)}
                      value={room.adult}
                    />
                  </ItemWrapper>
                  <ItemWrapper
                    style={{
                      marginBottom: '20px',
                      paddingBottom: '20px',
                      borderBottom: '1px solid #909090',
                    }}
                  >
                    <strong>Children</strong>
                    <InputIncDec
                      id="children"
                      increment={() => handleIncrement('children', index)}
                      decrement={() => handleDecrement('children', index)}
                      onChange={(e) => handleIncDecOnChnage(e, 'children', index)}
                      value={room.children}
                    />
                  </ItemWrapper>
                </pop>
              ))}

              <Button type="default" onClick={handleAdd}>
                Add Room
              </Button>
              {rooms.length > 1 && (
                <Button type="default" style={{ float: 'right' }} onClick={handleRemove}>
                  Remove Room
                </Button>
              )}
            </RoomGuestWrapper>
          }
        />
      </ComponentWrapper>

      {!loading ? (
        <Button type="primary" htmlType="submit" size="large" onClick={goToSearchPage}>
          Find Hotels
        </Button>
      ) : (
        <Loader />
      )}
    </FormWrapper>
  );
};

export default SearchForm;
