import React from 'react'

import './nav.css'
import { BsArrowDownCircle,BiMessageRoundedDots,TiGroupOutline,AiOutlineUser,AiOutlineHome } from '../../assets'

const NavBar = () => {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#members">
        <TiGroupOutline className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default NavBar;