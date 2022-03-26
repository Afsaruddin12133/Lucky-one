import React from 'react';
import '../Addorder/SelectItem/item.css';

const ChooseBest = (props) => {
    const {img,name} = props.data
    return (
        <div>
            <h2 id='choose'>Choose Best For Me</h2>
            <div id='iconroot'>
           <img src= {img} alt="" id='icon'/>
           <h3 id='name'>{name}</h3>
        </div>
        </div>
    );
};

export default ChooseBest;