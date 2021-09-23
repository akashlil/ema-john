import React from 'react';
import "./Header.css"
import img from "../../ema-john-simple-resources-master/images/logo.png";


const Header = () => {
    return (
        <header className="header">
            <img className="img" src={img} alt="" srcset="" />
            <nav>
                <a href="">Shop</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory here</a>
            </nav>
      </header>
    );
};

export default Header;