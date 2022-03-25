import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Addorder.css';
import Item from './SelectItem/item';
const Addorder = (props) => {
    const [state , setState] = useState(0)
   if(props.watchinfo.length > 4){
       alert('You added more then Four Watch');
   }
    return (
        <div className='addorder'>
            <h2 id='headdin'>Selected Watch</h2>
              {
                (props.watchinfo.length > 4)? props.watchinfo.slice(0,4).map(data => <Item data = {data} key = {data.id}></Item>) :props.watchinfo.map(data => <Item data = {data} key = {data.id}></Item>)
              }
                <button type='button'id='btn'>Choose Best For Me  
                </button> <br />
                <button  type='button' id='btn'><span>Choose Again</span>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Addorder;