import React, { useEffect, useState } from 'react'
import disneyImg from '../assets/img/logo/disney.png';
import BackgroundAbsolute from '../components/layout/BackgroundAbsolute';
import { getDisneyMovies } from '../services/movies';
import Container from '../components/container/Container';
import SectionGrid from '../components/container/SectionGrid'
import CardMovie from '../components/pure/CardMovie';
import LoadingMessage from '../components/pure/LoadingMessage'

export default function Disney() {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    getDisneyMovies().then(res => {
      setMovies(res.data)
    })
  },[])
  return (
    <div className='view'>
      <BackgroundAbsolute 
        background={'radial-gradient(circle, rgba(52,58,83,1) 0%, rgba(26,29,41,1) 100%)'}
      />
      <img 
        className='logo'
        src={disneyImg}
        alt='Logo Disney'
      />
      <Container>
        { movies.length > 0 ?

          <SectionGrid>
            { 
              movies.map((movie, index)=> {
                return <CardMovie 
                  movie={movie}
                  key={index}
                />
              })
            }
          </SectionGrid> :

          <LoadingMessage />
        }
      </Container>
    </div>
  )
}
