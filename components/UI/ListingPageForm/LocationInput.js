import { Select } from 'antd';
import MapAutoComplete from 'components/Map/MapAutoComplete';
import { isEmpty } from 'lodash';
import { mapDataHelper } from 'components/Map/mapDataHelper';
import { message } from 'antd';

export default function LocationInput({ callBack }) {
  const handleUpdate = (event) => {
    const { searchedPlaceAPIData } = event;
    if (!isEmpty(searchedPlaceAPIData)) {
      const mapData = mapDataHelper(searchedPlaceAPIData);
      const city = mapData && mapData[0] && mapData[0].city.replace(' City', '');
      const state_short = mapData && mapData[0] && mapData[0].state_short;
      if (!city) {
        message.error('Please add a city!');
        return;
      }
      const locality = state_short ? `${city} ${state_short}` : city;
      callBack(locality);
    }
  };
  return (
    <div className="change-stay">
      <img src="/images/location.png" />
      <MapAutoComplete updateValue={(value) => handleUpdate(value)} />
    </div>
  );
}
