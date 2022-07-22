import React from 'react';
import imgLogo from '../assets/img/logo/First_Logo.png';
import BackgroundAbsolute from '../components/layout/BackgroundAbsolute';
import BackgroundAnimate from '../components/layout/BackgroundAnimate';

export default function Home() {
  return (
    <div className='view'>
      <BackgroundAbsolute 
        background={'linear-gradient(260deg, rgba(163,25,21,1) 0%, rgba(22,8,18,1) 100%)'}
      />
      <BackgroundAnimate>
        <img 
          className='logo'
          src={imgLogo}
          alt='Logo Billboard Liyimar Leonardo'
        />
      </BackgroundAnimate>
    </div>
  )
}
