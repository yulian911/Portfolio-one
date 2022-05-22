import React,{useState} from 'react'

import './nav.css'
import { BsArrowDownCircle,BiMessageRoundedDots,TiGroupOutline,AiOutlineUser,AiOutlineHome } from '../../assets'


const NavBar = ({nav}) => {

  const {home,about,members,contact,footer}=nav
  const [active, setActive] = useState(home)

  return (
    
    <div className="navigation">
      <a href={home} onClick={()=>setActive(home)} >
        <AiOutlineHome className={`icon ${active===home?'active-nav':''}`} />
      </a>
      <a href={about} onClick={()=>setActive(about)}>
        <AiOutlineUser className={`icon ${active===about?'active-nav':''}`} />
      </a>
      <a href={members}onClick={()=>setActive(members)}>
        <TiGroupOutline className={`icon ${active===members?'active-nav':''}`} />
      </a>
      <a href={contact} onClick={()=>setActive(contact)}>
        <BiMessageRoundedDots className={`icon ${active===contact?'active-nav':''}`} />
      </a>
      <a href={footer} onClick={()=>setActive(footer)}>
        <BsArrowDownCircle className={`icon ${active===footer?'active-nav':''}`} />
      </a>
   
    </div>
  );
}

export default NavBar;