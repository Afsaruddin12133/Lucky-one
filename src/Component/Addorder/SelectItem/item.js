import React from 'react';
import './item.css';

const Item = (props) => {
    const {img,name} = props.data
    return (
        <div className='iconroot'>
           <img src= {img} alt="" id='icon'/>
           <h3 id='name'>{name}</h3>
        </div>
    );
};

export default Item;