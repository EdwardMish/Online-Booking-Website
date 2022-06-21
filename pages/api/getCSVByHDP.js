import { ACTIVE_HOTELS_LIST_CSV } from "settings/endpoint";

const csv = require("csvtojson");
var { Parser } = require("json2csv");
import moment from "moment";

const fetchCSVData = (url) => {
  return fetch(url)
    .then((r) => r.text())
    .then((data) => {
      return data;
    });
};
export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log("ACTIVE_HOTELS_LIST_CSV", ACTIVE_HOTELS_LIST_CSV);
    const csvData = await fetchCSVData(ACTIVE_HOTELS_LIST_CSV);
    const response = await csv().fromString(csvData);
    const todayDate = moment().format("MM/DD/YYYY");
    const tomorrowDate = moment().add(1, "days").format("MM/DD/YYYY");
    var properties = [];

    response.forEach((item) => {
      const hotel = {
        name: item.name,
        address: item.street_address,
        url: `https://hamptoninnandsuiteshotel.com/hotel/${item.name.replace(/ /g, "-")}?id=${
          item.id
        }&start=${todayDate}&end=${tomorrowDate}&room=[[-1]]&modal`,
      };
      properties.push(hotel);
    });
    const fields = [
      {
        label: "Hotel Name",
        value: "name",
      },
      {
        label: "Address",
        value: "address",
      },
      {
        label: "Hotel URL",
        value: "url",
      },
    ];
    const json2csv = new Parser({ fields: fields });
    try {
      const csv = json2csv.parse(properties);
      res.setHeader("Content-disposition", "attachment; filename=hotels.csv");
      res.setHeader("Content-Type", "text/csv");
      res.status(200).send(csv);
    } catch (error) {
      console.log("error:", error.message);
      res.status(500).send(error.message);
    }
  }
}
