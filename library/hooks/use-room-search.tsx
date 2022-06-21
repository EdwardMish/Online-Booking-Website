import TagManager from "react-gtm-module";
import { useRouter } from "next/router";
import { LISTING_SEARCH } from "settings/constant";
import { useCallback } from "react";
import { HotelSearchQuery } from "../../@types/HotelSearchQuery";
import { decodeRoomInfoString } from "library/helpers/common";

export const useRoomSearch = () => {

  const router = useRouter();

  /**
   * Accepts a query and uses the router to change the page in the SPA
   * NOTE: This is *moved* logic not *good* logic.
   * @param searchQuery
   */
  const changeRoomSearch = useCallback((searchQuery: string, query: HotelSearchQuery, pathname = LISTING_SEARCH) => {
    const info = decodeRoomInfoString(query.room);
    const tagManagerArgs = {
      dataLayer: {
        event: 'Update Search',
        page_type: 'search_results',
        locality: query.locality,
        check_in: query.setStartDate,
        check_out: query.setEndDate,
        rooms: info.rooms,
        adult_guests: info.adults,
        child_guests: info.children,
      },
      dataLayerName: 'PageDataLayer',
    };
    TagManager.dataLayer(tagManagerArgs);
    router.push(
      {
        pathname,
        query: searchQuery,
      },
      {
        pathname,
        query: searchQuery,
      }
    );
  }, []);

  return {
    changeRoomSearch
  }
}
