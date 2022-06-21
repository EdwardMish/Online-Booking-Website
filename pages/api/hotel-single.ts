import moment from "moment";
import { GET_A_ROOM_CLIENT } from "settings/endpoint";

import type { NextApiRequest, NextApiResponse } from "next";

interface GetResponseBody extends GetARoomAPI.Property {
  availableRooms: GetARoomAPI.AvailabilityXML["room-stays"]["room-stay"] | {};
}

async function get(request: NextApiRequest, response: NextApiResponse) {
  const { query } = request;

  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const start = Array.isArray(query.start) ? query.start[0] : query.start;
  const end = Array.isArray(query.end) ? query.end[0] : query.end;
  const room = Array.isArray(query.room) ? query.room[0] : query.room;

  function isValidDateString(date: string) {
    return moment(date, "MM/DD/YYYY", true).isValid();
  }
  const checkInDate = isValidDateString(start) ? start : moment().format("MM/DD/YYYY");
  const checkOutDate = isValidDateString(end) ? end : moment().add(1, "days").format("MM/DD/YYYY");

  const [property, availability] = await Promise.all([
    GET_A_ROOM_CLIENT.getSingleProperty(id),
    GET_A_ROOM_CLIENT.getRoomAvailability(id, {
      rInfo: room?.includes("[") ? room : "[[18]]",
      checkInDate,
      checkOutDate,
    }),
  ]);

  const body: GetResponseBody = {
    ...property,
    availableRooms: availability["room-stays"]["room-stay"] ?? {},
  };

  return response.status(200).json(body);
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
