

export const Project = (props) => {
  return (
    <div className="floating-white project animate__animated animate__fadeInUp animate__faster">
      <h3 style={{color:"#000",marginTop:"0"}}>{props.title}</h3>
      <p>Production Period: {props.period}</p>
      <p>Technologies: {props.tech}</p>
      {props.children}
    </div>
  )
}