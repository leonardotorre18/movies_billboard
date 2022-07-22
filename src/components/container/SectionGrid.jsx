import '../../styles/SectionGrid.scss';

const SectionGrid = (props) => {
  return (
    <section className="sectionGrid">
      {props.children}
    </section>
  )
}
 
export default SectionGrid;