import React, { useEffect, useState } from 'react';
import imgLogo from '../assets/img/logo/First_Logo.png';
import BackgroundAbsolute from '../components/layout/BackgroundAbsolute';
import BackgroundAnimate from '../components/layout/BackgroundAnimate';
import SectionCarousel from '../components/container/SectionCarousel';
import CardMovie from '../components/pure/CardMovie';
import Container from '../components/container/Container'

import {moviesViewed} from '../utils/index';


export default function Home() {

  const [viewed, setViewed] = useState([])
  const [willview, setWillview] = useState([])
  
  useEffect(()=>{
    const viewedList = [13,14]
    const willviewList = [8]

    moviesViewed(viewedList, values => {
      setViewed(values)
    })

    moviesViewed(willviewList, values => {
      setWillview(values)
    })
  },[])

  return (
    <div className='view'>
      <BackgroundAbsolute 
        background={'linear-gradient(260deg, rgba(163,25,21,1) 0%, rgba(22,8,18,1) 100%)'}
        // background={'rgb(163,25,21)'}
      />
      <BackgroundAnimate>
         <img 
          className='logo'
          src={imgLogo}
          alt='Logo Billboard Liyimar Leonardo'
        /> 
      </BackgroundAnimate>

      <Container>
        <h2 className='title'>Películas vistas</h2>
      <SectionCarousel>
        {viewed.map((movie, key) => {
          return <CardMovie movie={movie.data} key={key}></CardMovie>
        })}
      </SectionCarousel>
      </Container>

      <Container>
        <h2 className='title'>Películas para ver pronto</h2>
      <SectionCarousel>
        {willview.map((movie, key) => {
          return <CardMovie movie={movie.data} key={key}></CardMovie>
        })}
      </SectionCarousel>
      </Container>
    </div>
  )
}
