import '../../styles/BackgroundAnimate.scss';

export default function BackgroundAnimate(props) {
  return (
    <div className="bgContainer">
      { props.children }
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </div>
  )
}
