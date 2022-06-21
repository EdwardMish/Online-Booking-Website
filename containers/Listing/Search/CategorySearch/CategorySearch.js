import React, { useState, useContext, useReducer } from 'react';
import moment from 'moment';
import { createBrowserHistory } from 'history';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import { Slider, Button, Checkbox } from 'antd';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import { SearchContext } from 'context/SearchProvider';
import { setStateToUrl } from 'library/helpers/url-handler';
import { priceInit, calenderItem, getAmenities } from '../SearchParams';
import CategroySearchWrapper, {
  RoomGuestWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';
import { createRoomInfo } from '../../../../library/helpers/common';
import { isArray } from 'lodash';

const history = process.browser ? createBrowserHistory() : false;
const location = process.browser && window.location;

function serchReducer(state, action) {
  switch (action.type) {
    case 'amenities':
      return { ...state, amenities: action.payload };
    case 'date_range':
      return {
        ...state,
        setStartDate: action.payload.setStartDate,
        setEndDate: action.payload.setEndDate,
      };
    case 'price':
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };
    case 'roomGuestReset':
      return {
        ...state,
        room: action.payload.room,
        room_ref: action.payload.room_ref,
      };
    case 'reset':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const CategorySearchNext = ({ deviceType }) => {
  const { state, dispatch } = useContext(SearchContext);
  const initialState = {
    amenities: state.amenities || [],
    setStartDate: state.setStartDate || null,
    setEndDate: state.setEndDate || null,
    minPrice: parseInt(state.minPrice) || 0,
    maxPrice: parseInt(state.maxPrice) || 1000,
    location_lat: state.location_lat || null,
    locality: state.locality || '',
    location_lng: state.location_lng || null,
    room: state.room || '',
    room_ref: isArray(state.room_ref) ? state.room_ref : [{ adult: 1, children: 0 }],
  };

  // current component state with dispatching to reducer
  const [current, dispatchCurrent] = useReducer(serchReducer, initialState);

  const [rooms, setRooms] = useState(current.room_ref || [{ adult: 1, children: 0 }]);
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

  // data handling
  const onChange = (value, type) => {
    let query = {};
    let modifiedCurrent = current;

    for (const key in modifiedCurrent) {
      if (modifiedCurrent.hasOwnProperty(key)) {
        switch (key) {
          case 'date_range':
            delete modifiedCurrent.date_range;
            break;
          case 'price':
            delete modifiedCurrent.price;
            break;
        }
      }
    }

    if (type === 'date_range') {
      query = {
        ...current,
        setStartDate: value.setStartDate,
        setEndDate: value.setEndDate,
      };
      dispatchCurrent({ type: type, payload: value });
    } else if (type === 'price') {
      console.log('val', value);
      query = {
        ...current,
        minPrice: value ? value[0] : 0,
        maxPrice: value ? value[1] : 1000,
      };
      dispatchCurrent({ type: type, payload: query });
    } else if (type === 'reset') {
      setRoom(0);
      setGuest(0);
      query = {
        ...current,
        setStartDate: null,
        setEndDate: null,
        room: 0,
        guest: 0,
        amenities: [],
        property: [],
        minPrice: 0,
        maxPrice: 1000,
        location_lat: null,
        location_lng: null,
      };
      dispatchCurrent({ type: type, payload: query });
    } else {
      query = {
        ...current,
        [type]: value,
      };
      dispatchCurrent({ type: type, payload: value });
    }

    const params = setStateToUrl(query);
    console.log('query', params);
    dispatch({
      type: 'UPDATE',
      payload: {
        ...current,
        ...query,
      },
    });
    history.push({
      ...location,
      search: params,
    });
  };

  const handleRoomGuestApply = () => {
    const roomInfo = createRoomInfo(rooms);
    const query = {
      ...current,
      room: roomInfo,
    };
    console.log('current');
    dispatchCurrent({
      type: 'roomGuestReset',
      payload: {
        room: roomInfo,
        room_ref: rooms,
      },
    });
    const params = setStateToUrl(query);

    dispatch({
      type: 'UPDATE',
      payload: {
        ...current,
        ...query,
      },
    });
    history.push({
      ...location,
      search: params,
    });
  };

  const handleRoomGuestCancel = () => {
    setRoom(0);
    setGuest(0);
    const query = {
      ...current,
      room: 0,
      guest: 0,
    };
    dispatchCurrent({ type: 'roomGuestReset', payload: query });
    const params = setStateToUrl(query);
    history.push({
      ...location,
      search: params,
    });
  };

  const dateRangeActivateClass =
    current &&
    current.setStartDate !== undefined &&
    current.setEndDate !== undefined &&
    current.setStartDate !== null &&
    current.setEndDate !== null
      ? 'activated'
      : '';

  const priceRangeActivateClass =
    current &&
    current.minPrice !== undefined &&
    current.maxPrice !== undefined &&
    current.minPrice === 0 &&
    current.maxPrice === 1000
      ? ''
      : 'activated';

  let amenitiesLength = 0;

  let amenities = [];

  if (current && current.amenities && typeof current.amenities === 'string') {
    amenities = current.amenities.split(',');
    amenitiesLength = amenities.length;
  } else if (current && current.amenities && current.amenities.length) {
    amenities = current.amenities;
    amenitiesLength = amenities.length;
  }

  return (
    <CategroySearchWrapper>
      {deviceType === 'desktop' && (
        <ViewWithPopup
          className={amenitiesLength ? 'activated' : ''}
          key={getAmenities.id}
          noView={true}
          view={
            <Button type="default">
              {getAmenities.name}
              {amenitiesLength > 0 && `: ${amenitiesLength}`}
            </Button>
          }
          popup={
            <Checkbox.Group
              options={getAmenities.options}
              defaultValue={amenities}
              onChange={(value) => onChange(value, 'amenities')}
            />
          }
        />
      )}

      <ViewWithPopup
        className={dateRangeActivateClass}
        key={400}
        noView={true}
        view={<Button type="default">Choose Date</Button>}
        popup={
          <DateRangePickerBox
            startDateId="startDate-id-category"
            endDateId="endDate-id-category"
            startDate={current.setStartDate ? moment(current.setStartDate, 'MM/DD/YYYY') : null}
            endDate={current.setEndDate ? moment(current.setEndDate, 'MM/DD/YYYY') : null}
            numberOfMonths={1}
            small={true}
            item={calenderItem}
            updateSearchData={(value) => onChange(value, 'date_range')}
          />
        }
      />

      {/* {deviceType === 'desktop' && (
        <ViewWithPopup
          className={priceRangeActivateClass}
          key={300}
          noView={true}
          view={
            <Button type="default">
              {current.minPrice > 0 || current.maxPrice < 1000
                ? `Price Range: ${current.minPrice}, ${current.maxPrice}`
                : `Price per night`}
            </Button>
          }
          popup={
            <Slider
              range
              marks={priceInit}
              min={0}
              max={1000}
              defaultValue={[current.minPrice, current.maxPrice]}
              onAfterChange={(value) => onChange(value, 'price')}
            />
          }
        />
      )} */}
      <ViewWithPopup
        key={200}
        noView={true}
        className={rooms.length > 0 ? 'activated' : ''}
        view={
          <Button type="default">
            <span>Room {rooms.length > 0 && `: ${rooms.length} , `}</span>
            <span>Adult{rooms[0].adult > 0 && `: ${rooms[0].adult}`}</span>
          </Button>
        }
        popup={
          <RoomGuestWrapper>
            {isArray(rooms) &&
              rooms.map((room, index) => (
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
            <ActionWrapper>
              {rooms.length > 0 ? (
                <Button type="default" onClick={handleRoomGuestCancel}>
                  Cancel
                </Button>
              ) : (
                ''
              )}
              <Button type="primary" onClick={handleRoomGuestApply}>
                Apply
              </Button>
            </ActionWrapper>
          </RoomGuestWrapper>
        }
      />

      <ViewWithPopup
        key={100}
        noView={true}
        view={<Button type="default">Reset</Button>}
        popup={
          <Button onClick={() => onChange(initialState, 'reset')}>Reset Search Page URL</Button>
        }
      />
    </CategroySearchWrapper>
  );
};

export default CategorySearchNext;
