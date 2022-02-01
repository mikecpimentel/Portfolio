

export const ProjectPhotos = (props) => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
      {props.children}
    </div>
  )
}