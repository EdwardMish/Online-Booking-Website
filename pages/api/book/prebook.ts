import { GET_A_ROOM_CLIENT } from "settings/endpoint";

import type { NextApiRequest, NextApiResponse } from "next";

async function post(request: NextApiRequest, response: NextApiResponse) {
  const { uuid, r_info, checkIn, checkOut, roomId, ratePlanCode } = request.body;

  const availability = await GET_A_ROOM_CLIENT.prebookXML(uuid, {
    checkInDate: checkIn,
    checkOutDate: checkOut,
    rInfo: r_info,
    ratePlanCode,
    roomId,
  });

  const roomStays = availability["room-stays"];

  return response.status(200).json(roomStays);
}

function handler(request: NextApiRequest, response: NextApiResponse) {
  const { method } = request;

  switch (method) {
    case "POST":
      return post(request, response);
    default:
      return response.status(405).end();
  }
}

export default handler;
