import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Addorder.css';
import Item from './SelectItem/item';


const Addorder = (props) => {
   if(props.watchinfo > 4){
       alert('You added more then Four Watch');
   }
   const removeallitem = () =>{
     document.getElementById('rootitem').textContent = " ";
   }
   const [state ,setState] = useState(0)
   const chooseBest = () =>{
    document.getElementById('rootitem').textContent = " ";
    let index = Math.round(Math.random() * props.watchinfo.length)
    setState(index)
  }
  console.log(state)
    return (
        <div className='addorder'>
            <h2 id='headdin'>Selected Watch</h2>
             <div id='rootitem'>
             {
                (props.watchinfo.length > 4)? props.watchinfo.slice(0,4).map(data => <Item data = {data} key = {data.id}></Item>) :props.watchinfo.map(data => <Item data = {data} key = {data.id}></Item>)
              }
              {
                (props.watchinfo)? props.watchinfo.slice(0 , state).map(data => <Item data = {data} key = {data.id}></Item>) : console.log('Hello')
              }
              
             </div>
                <button type='button'id='btn' onClick={chooseBest}>Choose Best For Me  
                </button> <br />
                <button onClick={removeallitem} type='button' id='btn'><span>Choose Again</span>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Addorder;