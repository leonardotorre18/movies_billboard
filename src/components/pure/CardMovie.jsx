import '../../styles/CardMovie.scss';
import viewIcon from '../../assets/img/icon/checked.png'

const CardMovie = ({movie}) => {
  return(
    <div className='cardMovie'>
      {movie.viewed && <img src={viewIcon} className='viewedIcon' alt="Viewed Icon" />}
      <img 
        className='imgFront' 
        src={movie.imgFront} 
        alt={movie.title}
      />
      {/* <div className='description'>
        <h3 className='title'>{movie.title}</h3>
        <p className='tags'>{ movie.tags.map(tag=>tag +' ') }</p>
      </div> */}
    </div>
  )
}

export default CardMovie;