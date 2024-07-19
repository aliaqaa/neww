import React from 'react';
import {FaUser, FaHome ,FaCog,FaShoppingCart} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-10 h-10 bg-black rounded-lg ">
      <ul className="">
        <li className=''> <FaHome />  </li>
        <li> <FaShoppingCart/>  </li>
        <li> <FaCog/>   </li>
        <li> <FaUser/>  </li>
        </ul>
    </div>
  );
}

export default Footer;
