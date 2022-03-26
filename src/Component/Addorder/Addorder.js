import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Addorder.css';
import Item from './SelectItem/item';


const Addorder = (props) => {
   if(props.watchinfo.length > 4){
       alert('You added more then Four Watch');
   }
   const removeallitem = () =>{
     document.getElementById('rootitem').textContent = " ";
   }
    return (
        <div className='addorder'>
            <h2 id='headdin'>Selected Watch</h2>
             <div id='rootitem'>
             {
                (props.watchinfo.length > 4)? props.watchinfo.slice(0,4).map(data => <Item data = {data} key = {data.id}></Item>) :props.watchinfo.map(data => <Item data = {data} key = {data.id}></Item>)
              }
             </div>
                <button type='button'id='btn'>Choose Best For Me  
                </button> <br />
                <button onClick={removeallitem} type='button' id='btn'><span>Choose Again</span>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Addorder;