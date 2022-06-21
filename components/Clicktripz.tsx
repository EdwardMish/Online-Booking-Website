import Head from "next/head";
import { useEffect, useMemo, useRef } from "react";

interface ClicktripzProps {
  /**
   * Enables or disables the integration from running
   *
   * @default true
   */
  enabled?: boolean;
  /**
   * Alphanumerical identifier of the property
   *
   * @example "504ff0e1-8e4f-5c87-8d95-c04d862ad950"
   */
  propertyId?: string;
  /**
   * @example "Monumental Hotel Orlando"
   */
  propertyName?: string;
  /**
   * @example "155 East 50th Street New York NY US"
   */
  propertyAddress?: string;
  /**
   * @example 40.756092
   */
  propertyLatitude?: number;
  /**
   * @example -73.9714005
   */
  propertyLongitude?: number;
  /**
   * @example "Los Angeles"
   */
  city: string;
  /**
   * @example "CA"
   */
  province: string;
  /**
   * @example "US"
   */
  countryCode: string;
  /**
   * @example 2022-01-30
   */
  checkInDate: string;
  /**
   * @example 2022-02-30
   */
  checkOutDate: string;
  /**
   * @example [{ adults: 1, children: 0, infants: 0 }]
   */
  rooms: { adults: number; children: number; infants: number }[];
}

/**
 * @see https://support.clicktripz.com/hc/en-us/categories/115001382147-Technical-Documentation
 */
function Clicktripz(props: ClicktripzProps) {
  const {
    enabled = true,
    propertyId,
    propertyName,
    propertyAddress,
    propertyLatitude,
    propertyLongitude,
    city,
    province,
    countryCode,
    checkInDate,
    checkOutDate,
    rooms,
  } = props;

  const isFirstRenderRef = useRef(true);

  /**
   * @see https://support.clicktripz.com/hc/en-us/articles/360050635332-Building-and-Using-Your-UCO#h_01EMSNP8VE1S9YJ2X0FJ3VKP1M
   */
  useEffect(
    function updateUCO() {
      if (isFirstRenderRef.current) {
        isFirstRenderRef.current = false;
        return;
      }

      (window as any)._CTZ_RELOAD?.();
    },
    [enabled]
  );

  /**
   * @see https://support.clicktripz.com/hc/en-us/articles/360050635332-Building-and-Using-Your-UCO#h_01EMS6WBGTYQEY92364CKB2FQ8
   */
  const universalClicktripzObject = useMemo(
    () => ({
      enabled,
      verticals: {
        hotel: {
          active: true,
          property: {
            id: propertyId,
            name: propertyName,
            address: propertyAddress,
            latitude: propertyLatitude,
            longitude: propertyLongitude,
          },
          search: {
            city,
            province,
            countryCode,
            checkInDate,
            checkOutDate,
            rooms,
          },
        },
      },
    }),
    [
      enabled,
      propertyId,
      propertyName,
      propertyAddress,
      propertyLatitude,
      propertyLongitude,
      city,
      province,
      countryCode,
      checkInDate,
      checkOutDate,
      rooms,
    ]
  );

  useEffect(
    function assignUCOtoWindow() {
      (window as any)._CTZ = universalClicktripzObject;
    },
    [universalClicktripzObject]
  );

  return (
    <Head>
      <script
        defer
        charSet="UTF-8"
        data-publisher="b81afbc20b8140fab1c664dfebdb28b8"
        src="https://static.clicktripz.com/tag.js"
      />
    </Head>
  );
}

/**
 * @see https://support.clicktripz.com/hc/en-us/articles/360050635332#h_01EHQMFANCBCT4BJQY0BQZHT87
 */
const clicktripzSubmitProps = { "ct-submit": "true" };

export { Clicktripz, clicktripzSubmitProps };
