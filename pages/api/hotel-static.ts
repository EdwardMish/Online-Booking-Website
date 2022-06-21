import { GET_A_ROOM_CLIENT } from "settings/endpoint";

import type { NextApiRequest, NextApiResponse } from "next";

async function get(request: NextApiRequest, response: NextApiResponse) {
  const { query } = request;

  if (!("id" in query)) {
    response.status(400).json({ message: "Id is required in the query string" });
    return;
  }

  const id = Array.isArray(query.id) ? query.id[0] : query.id;

  const property = await GET_A_ROOM_CLIENT.getSingleProperty(id);

  return response.status(200).json(property);
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
