export const Institution = (props) => {
  return (
    <div className="floating-white-institution">
      <div style={{paddingLeft:"10px", zIndex:"5"}}>
        <p style={{color:"#292f36", paddingBottom:"0", marginBottom:"0"}}>{props.name}</p>
        <p style={{color:"#0009", fontSize:"0.8em", marginTop:"2px"}}>{props.city}</p>
      </div>
      <div style={{position:"absolute", right:"10px", height:"100%", bottom:"10px", opacity:"1", width:"70px", backgroundImage:`url("${props.logo}")`, backgroundSize:"100%", backgroundPosition:"bottom", backgroundRepeat:"no-repeat"}}>&nbsp;
      </div>
      
    </div>
  )
}