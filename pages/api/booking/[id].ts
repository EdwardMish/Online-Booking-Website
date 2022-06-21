import { GET_A_ROOM_CLIENT } from "settings/endpoint";

import type { NextApiRequest, NextApiResponse } from "next";

async function get(request: NextApiRequest, response: NextApiResponse) {
  const { query } = request;

  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const firstName = Array.isArray(query.firstName)
    ? query.firstName[0]
    : query.firstName;
  const lastName = Array.isArray(query.lastName)
    ? query.lastName[0]
    : query.lastName;

  const result = await GET_A_ROOM_CLIENT.searchBookings({
    booking_request_code: id,
  });

  if (!result.ok) {
    return response.status(result.status).json(result.body);
  }

  const bookings = result.body;
  const firstBooking = bookings[0];

  if (
    firstBooking.guest_first_name !== firstName ||
    firstBooking.guest_last_name !== lastName
  ) {
    return response.status(404).end();
  }

  return response.status(result.status).json(firstBooking);
}

function handler(request: NextApiRequest, response: NextApiResponse) {
  const { method } = request;

  switch (method) {
    case "GET":
      return get(request, response);
    default:
      return response.status(405).end();
  }
}

export default handler;
