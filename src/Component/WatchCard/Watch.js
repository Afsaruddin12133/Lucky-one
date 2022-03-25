import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Watch.css';

const Watch = (props) => {
    const {id,img,name,price,stock} = props.watchcard;
    return (
        <div className='product-card'>
            <div className='product-card-image'><img src= {img} alt="" id='image' /></div>
          <div className='product-card-info'>
          <h2>{name}</h2>
            <h3>Price : ${price}</h3>
            <span>Stock : {stock}</span>
          </div>
            <button type='button' onClick={()=>props.addWatchname(props.watchcard)} id='button'><span id='span'>Add to Card</span>
            <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Watch