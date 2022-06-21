import csv from "csvtojson";

import type { IProperty } from "models/Property";
import type { NextApiRequest, NextApiResponse } from "next";

import { Property } from "models/Property";
import { ACTIVE_HOTELS_LIST_CSV } from "settings/endpoint";
import { connectToDatabase } from "models/database";

const fetchCSVData = async (url: string) => {
  const response = await fetch(url);

  return await response.text();
};

export default async function handler(nextRequest: NextApiRequest, nextResponse: NextApiResponse) {
  if (nextRequest.method === "GET") {
    const csvData = await fetchCSVData(ACTIVE_HOTELS_LIST_CSV);
    const response = await csv().fromString(csvData);

    const properties: IProperty[] = [];

    response.forEach((item) => {
      const locality = item.region ? `${item.locality} ${item.region}` : item.locality;
      const found = properties.findIndex((x) => x.locality === locality);
      if (found === -1) {
        properties.push({
          locality,
          ids: [item.id],
          lat: [item.latitude],
          lng: [item.longitude],
        });
      } else {
        properties[found].ids = [...properties[found].ids, item.id];
        properties[found].lat = [...properties[found].lat, item.latitude];
        properties[found].lng = [...properties[found].lng, item.longitude];
      }
    });
    console.log("response.length", properties.length);
    const connection = await connectToDatabase();
    await Property.deleteMany({});
    await Property.insertMany(properties);
    await connection.disconnect();

    nextResponse.status(200).send("CRON JOB Executed!");
  }
}
