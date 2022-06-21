import fetch from "isomorphic-unfetch";
import { parseStringPromise } from "xml2js";
import { XMLParser } from "fast-xml-parser";

async function parseXml(xml: string) {
  const json = await parseStringPromise(xml, {
    explicitArray: false,
    emptyTag: () => null,
    ignoreAttrs: true,
    tagNameProcessors: [
      function toCamelCase(name) {
        const words = name.split("-");

        const firstWord = words[0];
        const asUpperCase = [firstWord];

        for (const word of words.slice(1)) {
          const firstLetter = word[0];

          asUpperCase.push(firstLetter.toUpperCase() + word.slice(1));
        }

        return asUpperCase.join("");
      },
    ],
    valueProcessors: [
      function parseNumbers(value) {
        return isNaN(value as any) ? value : parseFloat(value);
      },
      function parseBooleans(value) {
        if (value === "false") return false;
        if (value === "true") return true;
        return value;
      },
    ],
  });

  return json as GetARoomAPI.Availability;
}

class GetARoomClient {
  #configuration: GetARoomClient.Configuration;

  constructor(configuration: GetARoomClient.Configuration) {
    this.#configuration = configuration;
  }

  async fetch(url: string, options: RequestInit = {}): Promise<Response> {
    const response = await fetch(url, options);
    this.#configuration.onRequest?.(url, options, response);

    return response;
  }

  /**
   * @see https://getaroomaffiliate.docs.apiary.io/#reference/0/single-property-content-api/show-property
   */
  async getSingleProperty(id: string) {
    const { baseUrl } = this.#configuration;
    const { apiKey, token } = this.#configuration.authorization;

    const url = `${baseUrl.supply}/hotel/api/properties/${id}.json`;
    const headers = new Headers();

    const authorizationTokenInBase64 = Buffer.from(`${apiKey}:${token}`).toString("base64");
    headers.set("Authorization", `Basic ${authorizationTokenInBase64}`);

    const response = await this.fetch(url, { headers });
    const json = await response.json();
    const property = json as GetARoomAPI.Property;

    return property;
  }

  /**
   * @see https://getaroomaffiliate.docs.apiary.io/#reference/room-availability/detail-availability/single-property-request-for-retail-rates
   */
  async getRoomAvailability(roomId: string, options: GetARoomClient.AvailabilityParameters = {}) {
    const { version = "1.1", rInfo, checkInDate, checkOutDate } = options;
    const { baseUrl, authorization } = this.#configuration;

    const url = new URL(`${baseUrl.availability}/api/${version}/properties/${roomId}/room_availability`);
    url.searchParams.set("api_key", authorization.apiKey);
    url.searchParams.set("auth_token", authorization.token);

    rInfo && url.searchParams.set("rinfo", rInfo);
    checkInDate && url.searchParams.set("check_in", checkInDate);
    checkOutDate && url.searchParams.set("check_out", checkOutDate);

    const headers = new Headers();
    headers.set("Accept-Encoding", "gzip");
    const response = await this.fetch(url.toString(), { headers });

    const parser = new XMLParser({ ignoreAttributes: true });
    const xml = await response.text();
    const json = parser.parse(xml);
    const availability = json as GetARoomAPI.AvailabilityXML;

    return availability;
  }

  /**
   * @see https://getaroomaffiliate.docs.apiary.io/#reference/room-availability/generalsearch-availability/multi-property
   */
  async searchAvailability(propertyIds: string[] = [], options: GetARoomClient.SearchAvailabilityParameters = {}) {
    const { version = "1.1", rInfo, checkInDate, checkOutDate, lowestByType } = options;
    const { baseUrl, authorization } = this.#configuration;

    const url = new URL(`${baseUrl.availability}/api/${version}/room_availability`);
    url.searchParams.set("api_key", authorization.apiKey);
    url.searchParams.set("auth_token", authorization.token);

    rInfo && url.searchParams.set("rinfo", rInfo);
    checkInDate && url.searchParams.set("check_in", checkInDate);
    checkOutDate && url.searchParams.set("check_out", checkOutDate);
    typeof lowestByType === "boolean" && url.searchParams.set("lowest_by_type", `${lowestByType}`);

    const headers = new Headers();
    headers.append("Content-type", "application/x-www-form-urlencoded");
    headers.set("Accept-Encoding", "gzip");

    const body = new URLSearchParams();
    propertyIds && propertyIds.forEach((id) => body.append("property_id[]", id));

    const response = await this.fetch(url.toString(), {
      method: "POST",
      headers,
      body,
      redirect: "follow",
    });

    const parser = new XMLParser({ ignoreAttributes: true });
    const xml = await response.text();
    const json = parser.parse(xml);
    const availability = json as GetARoomAPI.AvailabilityXML;

    return availability;
  }

  /**
   * @see https://getaroomaffiliate.docs.apiary.io/#reference/itinerary/booking/book-a-single-room
   */
  async book(data: GetARoomAPI.ItineraryRequestBody) {
    const { baseUrl, authorization } = this.#configuration;

    const url = new URL(`${baseUrl.book}/api/itineraries.json`);
    url.searchParams.set("api_key", authorization.apiKey);
    url.searchParams.set("auth_token", authorization.token);

    const response = await this.fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        body: json as GetARoomAPI.ItineraryError,
      } as const;
    }

    return {
      ok: true,
      status: response.status,
      body: json as GetARoomAPI.ItinerarySuccess,
    } as const;
  }

  /**
   * @see https://getaroomaffiliate.docs.apiary.io/#reference/pre-book-request/multi-property
   *
   * @deprecated - Use prebook instead
   */
  async prebookXML(propertyId: string, options: GetARoomClient.PrebookParameters) {
    const { version = "1.1", rInfo, checkInDate, checkOutDate, roomId, ratePlanCode } = options;
    const { baseUrl, authorization } = this.#configuration;

    const url = new URL(`${baseUrl.availability}/api/${version}/properties/${propertyId}/room_availability`);
    url.searchParams.set("api_key", authorization.apiKey);
    url.searchParams.set("auth_token", authorization.token);

    rInfo && url.searchParams.set("rinfo", rInfo);
    checkInDate && url.searchParams.set("check_in", checkInDate);
    checkOutDate && url.searchParams.set("check_out", checkOutDate);
    roomId && url.searchParams.set("room_id", roomId);
    ratePlanCode && url.searchParams.set("rate_plan_code", ratePlanCode);

    const response = await this.fetch(url.toString());
    const xml = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: true,
      ignorePiTags: true,
    });
    const json = parser.parse(xml);

    const availability = json as GetARoomAPI.AvailabilityXML;

    return availability;
  }

  /**
   * @see https://getaroomaffiliate.docs.apiary.io/#reference/pre-book-request/multi-property
   */
  async prebook(propertyId: string, options: GetARoomClient.PrebookParameters) {
    const { version = "1.1", rInfo, checkInDate, checkOutDate, roomId, ratePlanCode } = options;
    const { baseUrl, authorization } = this.#configuration;

    const url = new URL(`${baseUrl.availability}/api/${version}/properties/${propertyId}/room_availability`);
    url.searchParams.set("api_key", authorization.apiKey);
    url.searchParams.set("auth_token", authorization.token);

    rInfo && url.searchParams.set("rinfo", rInfo);
    checkInDate && url.searchParams.set("check_in", checkInDate);
    checkOutDate && url.searchParams.set("check_out", checkOutDate);
    roomId && url.searchParams.set("room_id", roomId);
    ratePlanCode && url.searchParams.set("rate_plan_code", ratePlanCode);

    const response = await this.fetch(url.toString());
    const xml = await response.text();

    const json = await parseXml(xml);
    return json;
  }

  /**
   * Finds bookings by their request code.
   *
   * There is currently no documentation for this endpoint.
   *
   * @todo Don't understand why this endpoint returns multiple entries
   * if it only accepts a single request code
   *
   * @todo It doesn't seem we can search bookings by their dates alone,
   * you must always provide a request code. So why exactly can we provide dates?
   */
  async searchBookings(parameters: GetARoomClient.SearchBookingsParameters) {
    const { booking_request_code, booked_at_end, booked_at_start } = parameters;
    const { baseUrl, authorization } = this.#configuration;
    const { apiKey, token } = authorization;

    const url = new URL(`${baseUrl.supply}/hotel/api/itineraries/search`);
    url.searchParams.set("booking_request_code", booking_request_code.toLowerCase());
    booked_at_start && url.searchParams.set("booked_at_start", booked_at_start);
    booked_at_end && url.searchParams.set("booked_at_end", booked_at_end);

    const headers = new Headers();
    const authorizationTokenInBase64 = Buffer.from(`${apiKey}:${token}`).toString("base64");
    headers.set("Authorization", `Basic ${authorizationTokenInBase64}`);
    headers.set("Accept", "application/json");

    const response = await this.fetch(url.toString(), { headers });
    const json = await response.json();

    if (!response.ok) {
      const error = json as { message: string };

      return {
        ok: false,
        status: response.status,
        body: error,
      } as const;
    }

    const bookings = json as GetARoomAPI.Booking[];

    return {
      ok: true,
      status: response.status,
      body: bookings,
    } as const;
  }

  /**
   * Cancels a booking by its reservation token.
   *
   * You can check the reservation token when a booking gets created and access the
   * property **"itinerary.reservations[number].getaroom_reservation_token"**
   *
   * You can also check the reservation token by looking up a booking by its request code
   * and accessing the property **"booking.token"**
   *
   * @see https://getaroomaffiliate.docs.apiary.io/#reference/itinerary/booking/cancel
   */
  async cancelBooking(reservationToken: string) {
    const { baseUrl, authorization } = this.#configuration;

    const url = new URL(`${baseUrl.book}/api/itineraries/${reservationToken}.json`);
    url.searchParams.set("api_key", authorization.apiKey);
    url.searchParams.set("auth_token", authorization.token);

    const response = await this.fetch(url.toString(), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itinerary: {
          state: "cancelled",
        },
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        body: json as { errors: { message: string }[]; params: object },
      } as const;
    }

    return {
      ok: true,
      status: response.status,
      body: json as { booking_cancelled: boolean },
    } as const;
  }
}

export { GetARoomClient };
