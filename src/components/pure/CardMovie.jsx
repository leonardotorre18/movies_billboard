import '../../styles/CardMovie.scss';
import viewIcon from '../../assets/img/icon/checked.png';
import { UrlBase } from '../../services/movies';

const CardMovie = ({movie}) => {
  return(
    <div className='cardMovie'>
      {movie.viewed && <img src={viewIcon} className='viewedIcon' alt="Viewed Icon" />}
      <img 
        className='imgFront' 
        src={UrlBase+movie.img} 
        alt={movie.title}
      />
    </div>
  )
}

export default CardMovie;