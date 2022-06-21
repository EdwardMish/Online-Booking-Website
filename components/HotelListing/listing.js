import React from 'react';
import ListingCard from './ListingCard';
import { SINGLE_POST_PAGE } from '../../settings/constant';

export default function Listing({ rooms, deviceType, query }) {
  return rooms.map((room, index) => (
    <ListingCard
      key={index}
      query={query}
      link={SINGLE_POST_PAGE}
      deviceType={deviceType}
      id={room.room['hotel-id']}
      price={room['lowest-average']}
    />
  ));
}
