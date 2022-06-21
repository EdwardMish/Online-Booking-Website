import { GET_A_ROOM_CLIENT } from "settings/endpoint";

import type { NextApiRequest, NextApiResponse } from "next";

async function put(request: NextApiRequest, response: NextApiResponse) {
  const { query } = request;

  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const firstName = Array.isArray(query.firstName) ? query.firstName[0] : query.firstName;
  const lastName = Array.isArray(query.lastName) ? query.lastName[0] : query.lastName;

  const searchResult = await GET_A_ROOM_CLIENT.searchBookings({
    booking_request_code: id,
  });

  if (!searchResult.ok) {
    return response.status(searchResult.status).json(searchResult.body);
  }

  const bookings = searchResult.body;
  const firstBooking = bookings[0];

  if (firstBooking.guest_first_name !== firstName && firstBooking.guest_last_name !== lastName) {
    return response.status(404).end();
  }

  const getARoomReservationToken = firstBooking.token;
  const cancelResult = await GET_A_ROOM_CLIENT.cancelBooking(getARoomReservationToken);

  if (!cancelResult.ok) {
    return response.status(cancelResult.status).json(cancelResult.body);
  }

  response.status(200).end();
}

function handler(request: NextApiRequest, response: NextApiResponse) {
  const { method } = request;

  switch (method) {
    case "PUT":
      return put(request, response);
    default:
      return response.status(405).end();
  }
}

export default handler;
