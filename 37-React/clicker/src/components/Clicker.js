import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={()=>setCount(count+1)}>
            <FontAwesomeIcon icon={faPlus} color='white' size='4x' />
            </button>
          </div>
          <div className='refresh'>
            <button onClick={()=>setCount(count*0)}>
            <FontAwesomeIcon icon={faSyncAlt} size='4x' />
            </button>
          </div>
          <div className='minus'>
            <button onClick={()=>setCount(count-1)}>
            <FontAwesomeIcon icon={faMinus} color='white' size='4x' />
            </button>
          </div>
        </div>
        
      </div>
    );
  }

 