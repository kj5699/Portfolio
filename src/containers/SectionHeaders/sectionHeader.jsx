import './sectionHeader.scss'
const SectionHeader = props => {
    return (
        <div className ="header" style={{ color :props.color ?props.color :'#444649'}}>
            {props.sectionName}
            
            
        </div>
    )
}

export default SectionHeader;