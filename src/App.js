import Navigation from './routes';
import Navbar from './components/layout/Navbar';
import './App.css';
import './styles/Views.scss';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Navigation />
      <Footer />
    </div>
  )
}