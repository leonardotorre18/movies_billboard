import './App.css';
import SectionCinema from './components/container/SectionCinema';
import Jumbotron from './components/layout/Jumbotron';

import netflixImg from './assets/img/logo/netflix.png';
import hboImg from './assets/img/logo/hbo.png'
import disneyImg from './assets/img/logo/disney.png';

import { getNetflixMovies, getHboMovies, getDisneyMovies } from './services/movies';
import { useEffect, useState } from 'react';

import Navbar from './components/layout/Navbar';

function App() {
  const [netflixList, setNetflixList] = useState([])
  const [hboList, setHboList] = useState([])
  const [disneyList, setDisneyList] = useState([])

  useEffect(()=> {

    getNetflixMovies()
      .then(data=> setNetflixList(data.data))

    getHboMovies()
      .then(data => setHboList(data.data))

    getDisneyMovies() 
      .then(data => setDisneyList(data.data))
  },[])


  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SectionCinema
        logo={netflixImg}
        background={{
          'background': 'radial-gradient(circle, rgba(239,1,7,1) 0%, rgba(102,0,0,1) 100%)'
        }}
        movies={netflixList}
        autoplayTimeout={4000}
      ></SectionCinema>
      <SectionCinema
        logo={hboImg}
        background={{
          'background': 'linear-gradient(120deg, rgba(154,53,239,1) 0%, rgba(75,0,196,1) 48%, rgba(65,118,214,1) 100%)'
        }}
        movies={hboList}
        autoplayTimeout={4500}
      ></SectionCinema>
        <SectionCinema
          logo={disneyImg}
          background={{
            // 'background': 'radial-gradient(circle, rgba(75,156,211,1) 0%, rgba(0,48,143,1) 100%)'
            'background': 'radial-gradient(circle, rgba(52,58,83,1) 0%, rgba(26,29,41,1) 100%)'
          }}
          movies={disneyList}
          autoplayTimeout={4200}
          ></SectionCinema>
    </div>
  );
}

export default App;
