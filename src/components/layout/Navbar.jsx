import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.scss';
import imgLogo from '../../assets/img/logo/Second_Logo.png'

export default function Navbar() {
  const [show, setShow ] = useState(true)

  var scrollPos = 0;
  const updateScrollPosition = () => {
    if ((document.body.getBoundingClientRect()).top > scrollPos){
     setShow(true)
    } else { 
      if (scrollPos <= -80) setShow(false)
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
  }
  
  useEffect(()=> {
    window.addEventListener('scroll', updateScrollPosition);
    return ()=> {
      window.removeEventListener('scroll', updateScrollPosition)
    }
  })

  return (
    <header className={show ? 'header show' : 'header hidden'}>
      <nav className="nav">
        <div className="logo">
          <img src={imgLogo} alt="Logo" />
        </div>
        <ul className="list">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/netflix'}>Netflix</Link></li>
          <li><Link to={'/hbo'}>HBO</Link></li>
          <li><Link to={'/disney'}>Disney</Link></li>
        </ul>
      </nav>
    </header>
  )
}
