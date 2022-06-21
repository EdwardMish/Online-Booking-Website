import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import React, { useState } from 'react';
import { Button } from 'antd';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import { RoomGuestWrapper, ItemWrapper } from './SearchForm.style';

export default function GuestDropDown({ callBack, roomInfo }) {
  const [rooms, setRooms] = useState([{ adult: 1, children: 0 }]);
  const [guests, setGuests] = useState(1);
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
  React.useEffect(() => {
    const roomsData = Array(roomInfo)
      .fill(0)
      .map((a, i) => {
        if (rooms.length < i + 1) return { adult: 1, children: 0 };
        else return rooms[i];
      });
    setRooms(roomsData);
  }, [roomInfo]);
  React.useEffect(() => {
    const total = rooms.reduce((a, cur) => a + cur.adult + cur.children, 0);
    setGuests(total);
    callBack(rooms);
  }, [rooms]);
  return (
    <div className="change-stay">
      <img src="/images/icon-guest.png" />
      <ViewWithPopup
        key={200}
        noView={true}
        className="room_guest"
        view={<div className="ant-picker"> {`${guests} Guests`}</div>}
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

            {/* <Button type="default" onClick={handleAdd}>
              Add Room
            </Button>
            {rooms.length > 1 && (
              <Button type="default" style={{ float: 'right' }} onClick={handleRemove}>
                Remove Room
              </Button>
            )} */}
          </RoomGuestWrapper>
        }
      />
    </div>
  );
}
