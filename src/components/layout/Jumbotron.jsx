import '../../styles/Jumbotron.scss';
import Image from '../../assets/img/yourname_jumbotron.jpg';

import { getMovie } from '../../services/movies';
import { useEffect, useState } from 'react';

export default function Jumbotron() {
  const [movie, setMovie] = useState({})
  useEffect(()=> {
    getMovie(14).then(res=> setMovie(res.data[0]))
  },[])

  return (
    <div className='Jumbotron'>
      <div className="img">
        <img src={Image} alt="Your Name Poster" />

      </div>
      <div className="description">
        <h2 className="title">
          {movie.title}
        </h2>
        <p className="time">{movie.duration}</p>
        <button 
          className='button' 
          onClick={()=>{
            const message = 'Holiiiiis, quiero ver Your Name y nada me haría más feliz que verla contigo, qué día podemos?'
            window.open("https://api.whatsapp.com/send?phone=+584125077183&text=" + message);
          }}
        >Reservar Acompañante</button>
      </div>
    </div>
  )
}
