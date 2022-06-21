import { Select } from 'antd';

const { Option } = Select;

export default function RoomDropDown({ field }) {
  return (
    <div className="change-stay">
      <img src="/images/icon-room.png" />
      <Select
        showSearch
        style={{ width: '100%' }}
        placeholder="1 Room"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
        {...field}
      >
        <Option value="1">1 Room</Option>
        <Option value="2">2 Rooms</Option>
        <Option value="3">3 Rooms</Option>
        <Option value="4">4 Rooms</Option>
        <Option value="5">5 Rooms</Option>
        <Option value="6">6 Rooms</Option>
        <Option value="7">7 Rooms</Option>
        <Option value="8">8 Rooms</Option>
      </Select>
    </div>
  );
}
