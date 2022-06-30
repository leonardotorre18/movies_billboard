import '../../styles/Jumbotron.scss';
import Image from '../../assets/img/your-name.jpg';

export default function Jumbotron() {
  return (
    <div className='Jumbotron'>
      <img src={Image} alt="Your Name Poster" />
      <div className="description">
        <h2 className="title">
          Your Name
        </h2>
        <p className="time">1h 52min</p>
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
