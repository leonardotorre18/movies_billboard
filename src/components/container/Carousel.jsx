import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import '../../styles/Carousel.scss'

import propTypes from 'prop-types'

import CardMovie from "../pure/CardMovie";


const Carousel = ({movies, autoplayTimeout}) => {
    return(
        <div>
        <OwlCarousel
        margin={10}
        loop={true}
        nav={true}
        navText={[
          '<span class="prev"><<span>',
          '<span class="next">><span>']}
          autoplay={true}
          autoplayTimeout={autoplayTimeout}
          autoplaySpeed={1000}
          autoplayHoverPause={true}
          items={1}
          responsive={{
          447: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 }
        }}
        lazyLoad={true}
        >
        {
          movies.map((movie,i)=>{
            return <CardMovie
            key={i}
            movie={movie}
            ></CardMovie>
          })
        }
        </OwlCarousel>
      </div>
    )

}

Carousel.propTypes = {
  movies: propTypes.array.isRequired
}

export default Carousel;