import React, { useState } from 'react';
import './Clicker.css';


export default function Clicker() {
  const [count, setCount] = useState(0);
    return (
      <div className='container'>
        <div className='viewNumber'>
          <div className='counter'>{count}</div>
        </div>
        <div className='wrapper'>
          <div className='plus'>
            <button onClick={()=>setCount(count+1)}></button>
          </div>
          <div className='refresh'>
            <button onClick={()=>setCount(count*0)}></button>
          </div>
          <div className='minus'>
            <button onClick={()=>setCount(count-1)}></button>
          </div>
        </div>
        
      </div>
    );
  }

 