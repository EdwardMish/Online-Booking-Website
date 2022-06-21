import Head from "next/head";
import SearchListing from "components/SearchListing";
import { getDeviceType } from "library/helpers/get-device-type";
import Router from "next/router";
import ListingWrapper from "containers/Listing/Listing.style";
import Container from "components/UI/Container/Container";
import useSWR from "swr";
import { SearchForm, SearchVariant } from "components/UI/SearchForm/SearchForm";
import { getPropertiesByLocation } from "library/helpers/get-api-data";
import WhyChoose from "components/WhyChoose";
import TagManager from "react-gtm-module";
import React, { useCallback, useEffect } from "react";
import { decodeRoomInfoString } from "../library/helpers/common";
import { ListingSkeletons } from "../components/UI/Skeletons/ListingsSkeletons";
import { fetcher } from "library/helpers/use-swr-fetcher";
import { useRoomSearch } from "../library/hooks/use-room-search";
import NoContents from "components/NoContents";

export default function ListingPage({ deviceType, query, ids, locations }) {
  const { data, error } = useSWR([`/api/hotel-search`, { query, ids }], fetcher);
  const info = decodeRoomInfoString(query.room);
  const { changeRoomSearch } = useRoomSearch();
  const singlePageReload = useCallback((searchQuery) => changeRoomSearch(searchQuery, query), [query]);

  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        event: "Search",
        page_type: "search_results",
        locality: query.locality,
        check_in: query.setStartDate,
        check_out: query.setEndDate,
        rooms: info.rooms,
        adult_guests: info.adults,
        child_guests: info.children,
      },
      dataLayerName: "PageDataLayer",
    };
    TagManager.dataLayer(tagManagerArgs);
  }, []);

  if (error) return <NoContents />;

  const isLoading = !data && !error;
  return (
    <ListingWrapper>
      <Head>
        <title>Search Results | Reservations Center</title>
      </Head>
      <Container>
        <SearchForm loading={isLoading} variant={SearchVariant.LISTING} changeStay={singlePageReload} query={query} />

        {isLoading && (
          <>
            <ListingSkeletons />
          </>
        )}
        {data?.success && (
          <SearchListing
            fetching={data ? false : true}
            location={locations}
            processedData={data ? data.rooms.sort((a, b) => a["lowest-average"] - b["lowest-average"]) : []}
            deviceType={deviceType}
            query={query}
          />
        )}
        {data && !data?.rooms.length && <NoContents />}
        <WhyChoose />
      </Container>
    </ListingWrapper>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;
  const deviceType = getDeviceType(req);
  const { locality } = query;
  const data = await getPropertiesByLocation(locality);
  const ids = data?.ids;
  const locations = data.locations;

  return {
    props: { query, deviceType, ids, locations },
  };
}
