import moment from 'moment';
import { FaWifi, FaCarAlt, FaSwimmer, FaAirFreshener } from 'react-icons/fa';
import { MdFreeBreakfast, MdLunchDining, MdAllInclusive } from 'react-icons/md';
import { RiRefund2Line } from 'react-icons/ri';

export const removeDuplicate = (arr) =>
  arr.filter((v, i, a) => a.findIndex((t) => t.room['hotel-id'] === v.room['hotel-id']) === i);

export const createRoomInfo = (roomInfo) => {
  const room = roomInfo.length;
  var r_info = '[';
  for (let i = 0; i < room; i++) {
    r_info += `[`;
    for (let j = 0; j < roomInfo[i].adult; j++) {
      if (j === 0) r_info += '18';
      else {
        r_info += `,18`;
      }
    }
    for (let j = 0; j < roomInfo[i].children; j++) {
      r_info += `,3`;
    }
    if (i === room - 1) r_info += `]`;
    else r_info += `],`;
  }
  r_info += ']';

  return r_info;
};

export const iconMapping = (code) => {
  switch (code) {
    case 'free_breakfast':
      return <MdFreeBreakfast />;
    case 'free_internet':
      return <FaWifi />;
    case 'free_dinner':
      return <FaWifi />;
    case 'free_cancellation':
      return <RiRefund2Line />;
    case 'free_lunch':
      return <MdLunchDining />;
    case 'all_inclusive':
      return <MdAllInclusive />;
    case 'free_parking':
      return <FaCarAlt />;

    default:
      break;
  }
};

export const decodeRoomInfoString = (roomInfo) => {
  const roomArray = roomInfo.split('],[');
  let guests = 0,
    adults = 0,
    children = 0;
  roomArray.forEach((r) => {
    const room = r.replace(/\[/g, '');
    room.split(',').forEach((p) => {
      const age = parseInt(p);
      if (age >= 18) adults++;
      else children++;
      guests++;
    });
  });
  return {
    rooms: roomArray.length,
    adults: adults,
    children: children,
    guests: guests,
  };
};

export const handleCheckInDate = (dateString) => {
  return moment(dateString).isBefore() ? moment().format('MM/DD/YYYY') : dateString;
};

export const handleCheckoutDate = (dateString) => {
  return moment(dateString).isBefore() ? moment().add(1, 'days').format('MM/DD/YYYY') : dateString;
};

export const AddDays = (dateString, days) =>
  moment(dateString).add(days, 'days').format('MM/DD/YYYY');
