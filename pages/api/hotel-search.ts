import { NextApiRequest, NextApiResponse } from "next";
import { GET_A_ROOM_CLIENT } from "settings/endpoint";

async function post(request: NextApiRequest, response: NextApiResponse) {
  const { setStartDate, setEndDate, room } = request.body.query;

  const availability = await GET_A_ROOM_CLIENT.searchAvailability(request.body.ids, {
    rInfo: room,
    checkInDate: setStartDate,
    checkOutDate: setEndDate,
    lowestByType: true,
  });

  const roomStays = availability["room-stays"]?.["room-stay"];
  if (!roomStays) {
    return response.status(200).json({ success: false, rooms: [] });
  }

  const roomStaysAsArray = Array.isArray(roomStays) ? roomStays : [roomStays];

  const roomStaysByHotel = new Map<string, typeof roomStaysAsArray[number]>();
  for (const roomStay of roomStaysAsArray) {
    const { room } = roomStay;
    const { "hotel-id": hotelId } = room;

    if (roomStaysByHotel.has(hotelId)) {
      continue;
    }

    roomStaysByHotel.set(hotelId, roomStay);
  }

  const firstRoomStayPerHotel = Array.from(roomStaysByHotel.values());

  return response.status(200).json({ success: true, rooms: firstRoomStayPerHotel });
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
