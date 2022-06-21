import type { Error as MongooseError } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

import { Reservation } from "models/Reservation";
import { GET_A_ROOM_CLIENT } from "settings/endpoint";
import { connectToDatabase } from "models/database";

async function post(request: NextApiRequest, response: NextApiResponse) {
  const requestBody = request.body as GetARoomAPI.ItineraryRequestBody;
  const bookResponse = await GET_A_ROOM_CLIENT.book(requestBody);

  if (bookResponse.ok === false) {
    const firstError = bookResponse.body.errors[0];

    return response.status(bookResponse.status).json({ message: firstError.full_message });
  }

  if (process.env.ENV !== "production") {
    return response.status(bookResponse.status).json(bookResponse.body);
  }

  try {
    const connection = await connectToDatabase();
    const reservation = requestBody.itinerary.reservations[0];

    await Reservation.create({
      email: reservation.email,
      checkIn: new Date(reservation.check_in),
      checkOut: new Date(reservation.check_out),
      name: `${reservation.rooms[0].given_name} ${reservation.rooms[0].family_name}`,
      numberOfRooms: reservation.rooms.length,
      propertyUuid: reservation.property_uuid,
      roomTypeUuid: reservation.room_type_uuid,
      phone: requestBody.itinerary.payment.credit_card.billing_phone,
      guestAgesPerRoom: reservation.rooms.map(({ guest_ages }) => guest_ages),
      billingAddress: {
        state: requestBody.itinerary.payment.credit_card.billing_address.region,
        city: requestBody.itinerary.payment.credit_card.billing_address.locality,
        zipCode: requestBody.itinerary.payment.credit_card.billing_address.postal_code,
        country: requestBody.itinerary.payment.credit_card.billing_address.country_name,
        address: requestBody.itinerary.payment.credit_card.billing_address.street_address,
      },
      affiliateDetails: {
        token: requestBody.itinerary.affiliate_token,
        sessionCode: requestBody.itinerary.affiliate_session_code,
        customerCode: requestBody.itinerary.affiliate_customer_code,
      },
      customFields: {
        confirmation: requestBody.itinerary.custom_fields.confirmation,
      },
    });

    await connection.disconnect();
  } catch (error) {
    console.log("Error saving the reservation into the database - ", (error as Error | MongooseError).message);
  }

  return response.status(bookResponse.status).json(bookResponse.body);
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
