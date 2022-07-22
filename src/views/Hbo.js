import React, { useEffect, useState } from 'react';
import hboImg from '../assets/img/logo/hbo.png';
import BackgroundAbsolute from '../components/layout/BackgroundAbsolute';
import { getHboMovies } from '../services/movies';
import Container from '../components/container/Container';
import SectionGrid from '../components/container/SectionGrid'
import CardMovie from '../components/pure/CardMovie';
import LoadingMessage from '../components/pure/LoadingMessage'

export default function Hbo() {
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    getHboMovies().then(res => {
      setMovies(res.data)
    })
  },[])

  return (
    <div className='view'>
      <BackgroundAbsolute 
        background={'linear-gradient(120deg, rgb(154, 53, 239) 0%, rgb(75, 0, 196) 48%, rgb(65, 118, 214) 100%)'}
      />
      <img 
        className='logo'
        src={hboImg}
        alt='Logo HBO'
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
