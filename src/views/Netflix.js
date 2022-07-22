import React, { useEffect, useState } from 'react'
import netflixImg from '../assets/img/logo/netflix.png';
import BackgroundAbsolute from '../components/layout/BackgroundAbsolute';
import { getNetflixMovies } from '../services/movies';
import Container from '../components/container/Container';
import SectionGrid from '../components/container/SectionGrid'
import CardMovie from '../components/pure/CardMovie';
import LoadingMessage from '../components/pure/LoadingMessage'


export default function Netflix() {
  
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    getNetflixMovies().then(res => {
      setMovies(res.data)
    })
  },[])

  return (
    <div className='view'>
      <BackgroundAbsolute 
        background={'radial-gradient(circle, rgba(239,1,7,1) 0%, rgba(102,0,0,1) 100%)'}
      />
      <img 
        className='logo'
        src={netflixImg}
        alt='Logo Netflix'
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
