export function mapDataHelper(infoValue) {
  const tempMapObj = {};
  const tempMapArray = [];

  if (infoValue && infoValue.length !== 0) {
    infoValue.map(
      ({
        place_id,
        address_components,
        formatted_address,
        geometry: { location },
      }) => {
        let id = '';
        let lat = '';
        let lng = '';
        let formattedAddress = '';
        let city = '';
        let state_long = '';
        let state_short = '';
        let zipcode = '';
        let country_long = '';
        let country_short = '';

        id = place_id;
        lat = location.lat();
        lng = location.lng();
        formattedAddress = formatted_address;
        
        address_components?.forEach((item) => {
          if (item.types.includes('locality')) {
            city = item.long_name;
          }
          if (item.types.includes('administrative_area_level_1')) {
            state_long = item.long_name;
            state_short = item.short_name;
          }
          if (item.types.includes('postal_code')) {
            zipcode = item.long_name;
          }
          if (item.types.includes('country')) {
            country_long = item.long_name;
            country_short = item.short_name;
          }
        });
       
        tempMapObj.id = id;
        tempMapObj.lat = lat;
        tempMapObj.lng = lng;
        tempMapObj.formattedAddress = formattedAddress;
        tempMapObj.city = city;
        tempMapObj.state_short = state_short;
        tempMapObj.state_long = state_long;
        tempMapObj.zipcode = zipcode;
        tempMapObj.country_short = country_short;
        tempMapObj.country_long = country_long;
        tempMapArray.push(tempMapObj);
        return tempMapArray;
      }
    );
  }

  return tempMapArray;
}
