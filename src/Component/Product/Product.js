import React, { useEffect, useState } from 'react';
import Addorder from '../Addorder/Addorder';
import Watch from '../WatchCard/Watch';
import './Product.css';
const Product = () => {
    const [watch , setWatch] = useState([])
  useEffect(()=>{
    fetch('https://mocki.io/v1/dd8e1da2-ebb0-442e-a4bf-3ba0464720b7')
    .then(data => data.json())
    .then(data => setWatch(data))
  },[]);
  const [info ,setInfo] = useState([])
  const addWatchname = (watchinfo) =>{
     let newinfo = [...info , watchinfo]
     setInfo(newinfo);
  }
  
    return (
        <div className='root-product'>
            <div className='all-product'>
            {
                watch.map(watchdata=><Watch key = {watchdata.id} watchcard = {watchdata} addWatchname={addWatchname}></Watch>)
            }
            </div>
            <div className='order-card'>
           <Addorder watchinfo = {info}></Addorder>
            </div>
        </div>
    );
};

export default Product;