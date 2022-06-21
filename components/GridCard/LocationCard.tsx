import React, { ReactElement, MouseEvent } from "react";
import PropTypes from "prop-types";
import GridCardWrapper, { ImageWrapper, SPContentWrapper } from "./GridCard.style";
import Link from "next/link";
import Router from "next/router";
import { LISTING_SEARCH } from "settings/constant";
import moment from "moment";
import { SearchContext } from "context/SearchProvider";
import { HotelSearchQuery } from "../../@types/HotelSearchQuery";

const DATE_FORMAT = "MM/DD/YYYY";
const today = moment().format(DATE_FORMAT).toString();
const tomorrow = moment().add(1, "days").format(DATE_FORMAT).toString();

const LocationCard: React.FC<{
  className?: string;
  title?: string | ReactElement;
  numbers?: string;
  children: React.ReactNode;
}> = ({ className, title, children, numbers }) => {
  const { state, dispatch } = React.useContext(SearchContext);
  let classes = `has_btn ${className}`;
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const query: HotelSearchQuery = {
      setStartDate: today,
      setEndDate: tomorrow,
      room: "[[18,3]]",
      locality: title?.toString(),
    };
    dispatch({
      type: "UPDATE",
      payload: {
        ...state,
        ...query,
      },
    });
    Router.push(
      {
        pathname: `${LISTING_SEARCH}`,
        query,
      },
      {
        pathname: `${LISTING_SEARCH}`,
        query,
      },
      { shallow: true }
    );
  };
  return (
    <GridCardWrapper className={`grid_card ${classes}`.trim()}>
      <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
      <SPContentWrapper className="content_wrapper">
        <span style={numbers ? { lineHeight: 1 } : {}}>
          {title}
          <br />
          {numbers && <span style={{ fontSize: "16px", fontWeight: 400 }}>{`${numbers} hotels`} </span>}
        </span>
        <Link href={`${LISTING_SEARCH}/[slug]`} as={LISTING_SEARCH} prefetch={false}>
          <a href="#" onClick={(e) => handleClick(e)}>{`Book now >`}</a>
        </Link>
      </SPContentWrapper>
    </GridCardWrapper>
  );
};

LocationCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default LocationCard;
