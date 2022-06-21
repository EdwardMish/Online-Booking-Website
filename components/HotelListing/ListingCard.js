import React, { useState, useContext, useCallback } from "react";
import Link from 'next/link';
import Heading from 'components/UI/Heading/Heading';
import { Row, Col } from 'antd';
import ReservationFormWrapper, {
  FormActionArea,
  RatingArea,
  LocationWrapper,
} from './Reservation.style.js';
import { Carousel } from 'antd';
import useSWR from 'swr';
import Image from 'next/image';
import Rating from 'components/UI/Rating/Rating';
import { ListingSkeleton } from '../UI/Skeletons/ListingSkeleton.js';
import { slugify } from 'library/helpers/sluggify.js';
import { userDateContext } from "../../context/DateContext";
import { useRoomSearch } from "../../library/hooks/use-room-search";
import { en_us } from "../../settings/en_us";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ListingForm = ({ deviceType, price, id, query, link }) => {
  const { dateSelectionIsDirty, pendingStartDate, pendingEndDate } = useContext(userDateContext);
  const { changeRoomSearch } = useRoomSearch();
  const reloadRoomSearch = useCallback((searchQuery) =>
    changeRoomSearch(searchQuery, query), [query]);
  const { data, error } = useSWR(`/api/hotel-static?id=${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <ListingSkeleton />;
  const { images, name, star_rating, address, currency_code } = data;
  const location = `${address.street_address.en} ${address.locality.en} ${address.region.en} ${address.country_code}`;
  const hotelTitle = slugify(name.en);

  return (
    <ReservationFormWrapper className="form-container" onSubmit={(e) => e.preventDefault()}>
      <Row id="reviewSection">
        <Col xl={6} xs={24}>
          <Carousel autoplay>
            {images.map(({ urls, title }, index) => (
              <div style={{ lineHeight: 0 }} key={index}>
                <Image height={380} width={510} src={urls.default} alt={title} />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col xl={12} xs={24} className="card-content">
          <Row gutter={10} style={{ alignItems: 'center' }}>
            <Col className="brand-logo" xl={6} xs={24}>
              <img src="/images/brand.png" />
            </Col>
            <Col xl={18} xs={24}>
              <Heading content={name.en} />
              <RatingArea>
                <Rating rating={star_rating} ratingCount={star_rating} type="bulk" />
              </RatingArea>
            </Col>
          </Row>
          <LocationWrapper>{location}</LocationWrapper>
        </Col>
        <Col xl={6} style={{ width: '100%' }}>
          <FormActionArea>
            { dateSelectionIsDirty ?
              <button
                onClick={(e) => reloadRoomSearch(`locality=${query.locality}&setStartDate=${pendingStartDate}&setEndDate=${pendingEndDate}&room=${query.room}`)}
              >
                {en_us.CHECK_RATES}
              </button>
              :
              <>
                <div>{`$${Math.floor(price)}`}</div>
                <div style={{ color: '#959595', fontSize: '16px', textAlign: 'center' }}>
                  Avg. nightly rate
                </div>
                <Link
                  href={`${link}/[slug]`}
                  as={`${link}/${hotelTitle}?id=${id}&start=${query.setStartDate}&end=${query.setEndDate}&room=${query.room}&modal`}
                  prefetch={false}
                >
                  <a target="_blank">{`Choose rooms >`}</a>
                </Link>
              </>
            }
          </FormActionArea>
        </Col>
      </Row>
    </ReservationFormWrapper>
  );
};

export default ListingForm;
