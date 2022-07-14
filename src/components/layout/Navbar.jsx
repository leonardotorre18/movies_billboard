import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/Navbar.scss';

export default function Navbar() {
  const [show, setShow ] = useState(true)

  var scrollPos = 0;
  const updateScrollPosition = () => {
    if ((document.body.getBoundingClientRect()).top > scrollPos){
     setShow(true)
    } else { 
      if (scrollPos <= -50) setShow(false)
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
      <ul className="list">
        <li>Netflix</li>
        <li>HBO</li>
        <li>Disney</li>
      </ul>
    </header>
  )
}
