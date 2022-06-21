import { ParsedUrlQueryInput } from "querystring";

export interface HotelSearchQuery extends ParsedUrlQueryInput {
  room: string;
  setStartDate: string;
  setEndDate: string;
  locality?: string;
}
export type HotelSearchQueryParams = keyof HotelSearchQuery;
