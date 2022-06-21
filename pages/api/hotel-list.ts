import { Property } from "models/Property";

import type { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "models/database";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "GET") {
    const locality = request.query.locality;

    const connection = await connectToDatabase();
    const item = await Property.findOne({ locality: locality });
    await connection.disconnect();

    return response.status(200).json({
      ids: item ? item.ids : [],
      locations: { lat: item?.lat, lng: item?.lng },
    });
  }
}
