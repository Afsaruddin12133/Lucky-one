import React from 'react';
import './Nav.css';
import Logo from './photo/logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
          <img src={Logo} alt=""  id='logo'/>  
         <div>
         <ul className='linkbutton'>
              <a href="/home"><li>Home</li></a>
              <a href="/shop"><li>Shop</li></a>
              <a href="/order"><li>Order</li></a>
              <a href="/manage-review"><li>Order Review</li></a>
              <a href="/About"><li>About</li></a>
          </ul>
         </div>
        </div>
    );
};

export default Navbar;