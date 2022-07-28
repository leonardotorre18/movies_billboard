import PropTypes from 'prop-types';
import '../../styles/BackgroundAbsolute.scss';

export default function BackgroundAbsolute({ background }) {
  return (
    <div 
      className='backgroundAbsolute'
      style={{
        'background': background
      }}
    />
  )
}

BackgroundAbsolute.propTypes = {
  background: PropTypes.string
}