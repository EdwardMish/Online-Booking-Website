import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import Rating from 'components/UI/Rating/Rating';
import GridCard from '../GridCard/GridCard';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';
import Loader from 'components/Loader/Loader';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { SINGLE_POST_PAGE } from 'settings/constant';
import { useRouter } from 'next/router';
import { slugify } from 'library/helpers/sluggify';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const MapInfoWindow = ({ popData, onCloseClick }) => {
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/hotel-single?id=${popData.id}`, fetcher);
  const position = { lat: popData?.lat, lng: popData?.lng };
  if (error) return <div>Failed to Load</div>;
  if (!data)
    return (
      <InfoWindow
        position={position}
        options={{ pixelOffset: new window.google.maps.Size(0, -85) }}
        id={popData?.id}
        onCloseClick={onCloseClick}
      >
        <GridCard
          className="info_window_card"
          location={popData?.formattedAddress}
          title={popData?.title}
          price={`$${popData?.price}/Night - Free Cancellation`}
        >
          <Loader />
        </GridCard>
      </InfoWindow>
    );
  const imageSrc = data.images[0]?.urls.default;

  return (
    <InfoWindow
      position={position}
      options={{ pixelOffset: new window.google.maps.Size(0, -85) }}
      id={popData?.id}
      onCloseClick={onCloseClick}
    >
      <GridCard
        viewDetailsBtn={
          <Link href={{pathname: `${SINGLE_POST_PAGE}/[slug]`, query:{
            slug: slugify(data?.name.en),
            id: popData?.id,
            start:query.setStartDate,
            end:query.setEndDate,
            room:query.room,
            modal: true
          }}}
          prefetch={false}>
          <a>
            <FiExternalLink /> View Details
          </a>
        </Link>
        }
        className="info_window_card"
        location={popData?.formattedAddress}
        title={popData?.title}
        price={`$${popData?.price}/Night - Free Cancellation`}
        rating={<Rating rating={data?.star_rating} ratingCount={data?.star_rating} type="bulk" />}
      >
        {imageSrc ? (
          <Image objectFit='cover' src={imageSrc} alt={popData?.title} width={270} height={70} />
        ) : (
          <>No Image</>
        )}
      </GridCard>
    </InfoWindow>
  );
};

export default MapInfoWindow;
