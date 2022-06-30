import '../../styles/SectionCinema.scss';

import propTypes from 'prop-types'

import Carousel from './Carousel';

const SectionCinema = ({ logo, background, movies, autoplayTimeout }) => {

    return (
        <section className="cinema" style={background}>
            <img className='logo' src={logo} alt="Imagen logo"/>
            <Carousel
                autoplayTimeout={autoplayTimeout}
                movies={movies}
            ></Carousel>
        </section>
    )
}

SectionCinema.propTypes = {
    movies: propTypes.array.isRequired
}
 
export default SectionCinema;