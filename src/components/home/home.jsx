import React, { useState,useEffect } from 'react'
import './home.css'
import {BsMouse, img2} from '../../assets'
import Buttons from '../button/button';

// const toggle =document.querySelector('.hover-show')
// toggle.addEventListener('click' ,()=>{
//     toggle.classList.toggle('active')
// })



const Home = () => {
  const [toggle, setToggle] = useState(false)

  
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className={`hover-show ${toggle?'active':''}` } onClick={()=>setToggle(!toggle)}>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img2} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
          quos deserunt, maxime sint sunt tempore quidem ad praesentium itaque,
          aspernatur, magnam culpa iste adipisci?
        </p>
      </h2>

      <Buttons />
    </div>
  );
}



export default Home