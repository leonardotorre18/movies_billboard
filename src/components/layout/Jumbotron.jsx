import '../../styles/Jumbotron.scss';
import Image from '../../assets/img/your-name.jpg';

export default function Jumbotron() {
  return (
    <div className='Jumbotron'>
      <div className="img">
        <img src={Image} alt="Your Name Poster" />

      </div>
      <div className="description">
        <h2 className="title">
          Your Name
        </h2>
        <p className="time">1h 52min</p>
        <button 
          className='button' 
          onClick={()=>{
            const message = ''
            window.open("" + message);
          }}
        >Reservar Acompañante</button>
      </div>
    </div>
  )
}
