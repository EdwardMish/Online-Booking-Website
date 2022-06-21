import React,{useState} from 'react';
import { Slider } from 'antd';

export default function DistanceFilter() {
    const [marks, setMarks] = useState({});
    const [current, setCurrent] = useState(15)
    const [disabled, setDisabled] = useState(false)
    React.useEffect(()=>{
        setDisabled(true)
        let marks = {};
        
        [...Array(31).keys()].forEach((p) => {
            
            const active = current === p;
            const style = active?{display: 'block'}:{display:'none'};
            marks = {...marks,[p]: { style:{
                color: '#4772FF', fontWeight:'bold'
            }, label: <span style={style}>{`${p}km`}</span>} }
        });
        setMarks(marks);
        setDisabled(false)
    },[current])
    
  return (
    <div className='rang-section'>
      <div>Distance radius from search location</div>
      <Slider step={1} marks={marks} value={current} max={30} tooltipVisible={false} onChange={(v)=>setCurrent(v)} disabled={disabled}/>
    </div>
  );
}
