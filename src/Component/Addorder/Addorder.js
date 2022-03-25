import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Addorder.css';

const Addorder = () => {
    return (
        <div className='addorder'>
            <h2 id='headdin'>Selected Watch</h2>
                
                <button type='button'id='btn'>Choose Best For Me  
                </button> <br />
                <button type='button' id='btn'><span>Choose Again</span>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Addorder;