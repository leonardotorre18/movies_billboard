import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import '../../styles/SectionCarousel.scss'

const SectionCarousel = ({ autoplayTimeout, children }) => {
  return(
    <section className='sectionCarousel'>
      <OwlCarousel
        margin={10}
        // loop={true}
        nav={true}
        navText={[
          '<span class="prev"><<span>',
          '<span class="next">><span>'
        ]}
        autoplay={true}
        // autoplayTimeout={autoplayTimeout || 3.4}
        // autoplaySpeed={1000}
        autoplayHoverPause={true}
        items={2}
        responsive={{
          447: { items: 3 },
          768: { items: 4 },
          992: { items: 5 },
          1200: { items: 6 }
        }}
        // lazyLoad={true}
      >
        
      { children }

      </OwlCarousel>
    </section>
  )
}

export default SectionCarousel;