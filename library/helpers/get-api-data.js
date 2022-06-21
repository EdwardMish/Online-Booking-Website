import fetch from 'isomorphic-unfetch';
import shuffle from 'lodash/shuffle';
import axios from 'axios';

const fetchArrayData = (api) => {
  return fetch(api)
    .then((r) => r.json())
    .then((data) => {
      return data;
    });
};

export const getPropertiesByLocation = async (locality) => {
  const api = `${process.env.NEXT_PUBLIC_SERVER_API}/api/hotel-list?locality=${locality}`;
  const data = await fetchArrayData(api);
  return data;
};

export const processAPIData = (apiData) => {
  let fetchData = {};
  if (apiData) {
    apiData.forEach((item, key) => {
      fetchData.data = item.data ? [...item.data] : [];
      fetchData.name = item.name ? item.name : '';
    });
  }
  const data = fetchData ? fetchData.data : [];
  return data;
};

export const searchedData = (processedData) => {
  const randNumber = Math.floor(Math.random() * 50 + 1);
  const data = shuffle(processedData.slice(0, randNumber));
  return data;
};

export const searchStateKeyCheck = (state) => {
  for (var key in state) {
    if (
      state[key] !== null &&
      state[key] != '' &&
      state[key] != [] &&
      state[key] != 0 &&
      state[key] != 100
    ) {
      return true;
    }
  }
  return false;
};

export const paginator = (posts, processedData, limit) => {
  return [...processedData.slice(posts.length, posts.length + limit)];
};

export const getAPIData = async (apiUrl) => {
  console.log('apiurl', apiUrl);
  const promises = apiUrl.map(async (repo) => {
    var response;
    var apiPath = `${process.env.NEXT_PUBLIC_SERVER_API}/data/${repo.endpoint}.json`;
    switch (repo.name) {
      // case 'listingHotel':
      //   // test purpose only
      //   apiPath = `${process.env.NEXT_PUBLIC_SERVER_API}/data/test.json`;
      //   response = await fetchArrayData(apiPath);
      //   // test purpose only
      //   // const csvData = await fetchCSVData(ACTIVE_HOTELS_LIST_CSV_PROD);
      //   // response = await csv().fromString(csvData);
      //   break;
      case 'listingSearch':
        apiPath = `${process.env.NEXT_PUBLIC_SERVER_API}/api/hotel-search`;
        const res = await axios.post(apiPath, { query: repo.query });
        if (res.data.success) response = res.data.rooms;
        else response = [];
        break;
      case 'hotelSingleData':
        const api = `${process.env.NEXT_PUBLIC_SERVER_API}/api/hotel-single?id=${repo.id}`;
        const singleHotel = await fetchArrayData(api);
        response = [singleHotel];
        break;
      case 'locationData':
        response = await fetchArrayData(apiPath);

        break;
      case 'luxaryHotelData':
        response = await fetchArrayData(apiPath);

        break;
      case 'topHotelData':
        response = await fetchArrayData(apiPath);
        break;
      default:
        break;
    }

    return {
      name: repo.name,
      data: response,
    };
  });
  const receivedData = await Promise.all(promises);
  return receivedData;
};
