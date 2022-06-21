import React,{useState} from 'react';
import { Slider } from 'antd';

export default function PriceRangeFilter() {
    const [marks, setMarks] = useState({});
    const [current, setCurrent] = useState([0, 499])
    const [disabled, setDisabled] = useState(false)
    React.useEffect(()=>{
        setDisabled(true)
        let marks = {};
        
        [...Array(500).keys()].forEach((p,index) => {
            
            const active = current[0] === p || current[1] === p;
            const style = active?{display: 'block'}:{display:'none'};
            marks = {...marks,[p]: { style:{
                color: '#4772FF', fontWeight:'bold'
            }, label: <span style={style}>{`$${p}`}</span>} }
        });
        setMarks(marks);
        setDisabled(false)
    },[current])
    
  return (
    <div className='rang-section'>
      <div>Price range</div>
      <Slider marks={marks} range value={current} max={499} tooltipVisible={false} onChange={(v)=>setCurrent(v)} disabled={disabled}/>
    </div>
  );
}
