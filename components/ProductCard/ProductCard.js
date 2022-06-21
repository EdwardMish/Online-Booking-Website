import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import Rating from 'components/UI/Rating/Rating';
import Favourite from 'components/UI/Favorite/Favorite';
import GridCard from '../GridCard/GridCard';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductCard({ id, name, street_address, link, deviceType }) {
  const { data, error } = useSWR(`/api/hotel-single?id=${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return data.price ? (
    <GridCard
      favorite={
        <Favourite
          onClick={(event) => {
            console.log(event);
          }}
        />
      }
      location={street_address}
      title={name}
      price={`$${data.price}/Night - Free Cancellation`}
      rating={<Rating rating={data.star_rating} ratingCount={data.star_rating} type="bulk" />}
      viewDetailsBtn={
        <Link href={`${link}/[slug]`} as={`${link}/${id}`} prefetch={false}>
          <a>
            <FiExternalLink /> View Details
          </a>
        </Link>
      }
    >
      {data.images && (
        <Carousel
          ssr
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          renderDotsOutside={false}
          responsive={responsive}
          deviceType={deviceType}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.images.map(({ urls, title }, index) => (
            <Image key={index} src={urls.default} alt={title} layout="fill" objectFit="cover" />
          ))}
        </Carousel>
      )}
    </GridCard>
  ) : null;
}
