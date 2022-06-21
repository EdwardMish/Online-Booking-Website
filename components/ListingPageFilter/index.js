import React from 'react';
import Wrapper from './style';
import PriceRangeFilter from './PriceRangeFilter';
import DistanceFilter from './DistanceFilter';
import RatingFilter from './RatingFilter';
import BrandFilter from './BrandFilter';
import AmenityFilter from './AmenityFilter';

export default function index() {
  return (
    <Wrapper>
      <PriceRangeFilter />
      <DistanceFilter />
      <RatingFilter />
      <BrandFilter />
      <AmenityFilter />
    </Wrapper>
  );
}
