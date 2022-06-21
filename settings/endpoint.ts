// import { logger } from "library/helpers/logger";
import { GetARoomClient } from "library/clients/GetARoomClient/GetARoomClient";
import { logger } from "library/logger";

export const environment = process.env.ENV as "development" | "production";

const sanitizeParamsRegex = new RegExp("(api_key|auth_token)=([\\w\\d-]+)", "gi");

/* @ts-ignore */
const isDevelopmentEnv = environment === "development";

const API_KEY = isDevelopmentEnv ? process.env.API_KEY! : process.env.API_KEY_PROD!;
const AUTH_TOKEN = isDevelopmentEnv ? process.env.AUTH_TOKEN! : process.env.AUTH_TOKEN_PROD!;

const AUTH = `api_key=${API_KEY}&auth_token=${AUTH_TOKEN}`;

const GetARoomBaseUrl = {
  availability: {
    development: "https://availability.integration2.testaroom.com",
    production: "https://availability.getaroom.com",
  },
  book: {
    development: "https://book.integration2.testaroom.com",
    production: "https://book.getaroom.com",
  },
  supply: {
    development: "https://supply.integration2.testaroom.com",
    production: "https://supply.getaroom.com",
  },
};

export const ACTIVE_HOTELS_LIST_CSV = `${GetARoomBaseUrl.book[environment]}/api/properties.csv?${AUTH}`;

export const ACTIVE_HOTELS_LIST_XML = `${GetARoomBaseUrl.book[environment]}/api/properties.xml?${AUTH}`;

export const BOOKING = `${GetARoomBaseUrl.book[environment]}/api/itineraries.json?${AUTH}`;

export const CANCEL_BOOKING = `${GetARoomBaseUrl.book[environment]}/api/itineraries/{GAR Reservation Token}.json?auth_token={auth_token}&api_key={api_key}`;

export const GET_A_ROOM_CLIENT = new GetARoomClient({
  baseUrl: {
    availability: GetARoomBaseUrl.availability[environment],
    book: GetARoomBaseUrl.book[environment],
    supply: GetARoomBaseUrl.supply[environment],
  },
  authorization: {
    apiKey: API_KEY,
    token: AUTH_TOKEN,
  },
  onRequest: (url, options, response) => {
    logger.info({
      request: {
        method: options.method || "GET",
        url: url.replace(sanitizeParamsRegex, "$1=REDACTED"),
        body: options.body,
      },
      response: {
        statusCode: response.status,
      },
    });
  },
});
