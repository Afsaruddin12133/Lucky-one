import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Item from '../Addorder/SelectItem/item';
import ChooseBest from '../ChooseBest/ChooseBest';
import './Addorder.css';

const Addorder = (props) => {
  let randomItem = (items) =>{
      return items[Math.floor(Math.random()*items.length)];  
    }
    const [state , setState] = useState([])
    const ran = () =>{
        let item = randomItem(props.watchinfo);
        setState(item)
    }
    const deleteItem = () =>{
      document.getElementById('rootitem').textContent= "";
    }
    return (
             <div className='addorder'>
            <h2 id='headdin'>Selected Watch</h2>
             <div id='rootitem'>
             { 
               (props.watchinfo.length > 4)? props.watchinfo.slice(0,4).map(data => <Item data = {data} key = {data.id}></Item>) :props.watchinfo.map(data => <Item data = {data} key = {data.id}></Item>)
             }
             <ChooseBest data = {state}></ChooseBest>
             </div>
                <button type='button'id='btn' onClick={ran} >Choose Best For Me  
                </button> <br />
                <button onClick={deleteItem}  type='button' id='btn'><span>Choose Again</span>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
        </div>
      
    );
};

export default Addorder;