

export const Project = (props) => {
  const images = props.images ? props.images.map(photo => <img src={photo} />) : 'No images';


  return (
    <div className="floating-white-project animate__animated animate__fadeInUp animate__faster">
      <div style={{flexBasis:"70%", paddingRight:"40px", textAlign:"justify"}}>
        <h3 style={{color:"#000",marginTop:"0"}}>{props.title}</h3>
        <p style={{fontSize:"0.8em", margin:"0", padding:"0"}}>Period: {props.period}</p>
        <p style={{fontSize:"0.8em", margin:"0", padding:"0"}}>Technologies: {props.tech}</p>
        {props.children}
      </div>
      <div style={{flexBasis:"30%"}}>
        {images}
      </div>
    </div>
  )
}