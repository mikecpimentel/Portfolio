import { useState } from 'react';
import ReactModal from 'react-modal';

export const Project = (props) => {

  const modalObjects = {};
  for (let i=0; i<props.images.length; i++) {
    modalObjects['modal_' + i] = false;
  }
  const [modalStatuses, setModalStatuses] = useState(modalObjects);

  const handleClick = (e) => {
    if (modalStatuses['modal_' + e.target.id] == false) {
      setModalStatuses({...modalObjects, ['modal_' + e.target.id]: true});
    } else {
      setModalStatuses({...modalObjects, ['modal_' + e.target.id]: false});
    }  
  }

  const handleOnRequestClose = index => {
    if (modalStatuses['modal_' + index] == false) {
      setModalStatuses({...modalObjects, ['modal_' + index]: true});
    } else {
      setModalStatuses({...modalObjects, ['modal_' + index]: false});
    }  
  }

 

  const images = props.images ? props.images.map((photo, index) => (
      <>
        <div className='modal-link-image'><img src={photo[0]} id={index} onClick={handleClick} /></div>
        <ReactModal
        isOpen={modalStatuses['modal_' + index]}
        id={'modal_' + index}
        onRequestClose={() => handleOnRequestClose(index)}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="modal-content-style"
        >
          <img src={photo[1]} id={index} style={{padding:"20px 20px 0 20px", width:"95%", maxHeight:"80%", objectFit:"contain", borderRadius:"10px"}} />
          <p style={{padding:"0px", fontWeight:"200"}}>{photo[2]}</p>
          <div style={{display:"flex", justifyContent:"space-between", gap:"3px", position:"absolute", bottom:"0", width:"100%"}}>
            {index-1 >= 0 ? <div id={index-1} className='project-buttons' onClick={handleClick}>&#x27F5; Previous Image</div> : <div className='project-buttons-disabled'></div>}
            {index+1 < props.images.length ? <div id={index+1} className='project-buttons' onClick={handleClick}>Next image &#x27F6;</div> : <div className='project-buttons-disabled' id={index+1} onClick={handleClick}>Close</div>}
          </div>
        </ReactModal>
      </>
    )) : 'No images';


  return (
    <div className="floating-white-project animate__animated animate__fadeIn animate__faster">
      <div className='project-text-area'>
        <h3 style={{color:"#000",marginTop:"0"}}>{props.title}</h3>
        <p style={{fontSize:"0.8em", margin:"0", padding:"0"}}>Period: {props.period}</p>
        <p style={{fontSize:"0.8em", margin:"0", padding:"0"}}>Technologies: {props.tech}</p>
        {props.children}
      </div>
      <p style={{color:"#000", fontWeight:"200", fontSize:"0.8em", margin:"0", padding:"5px"}}>Click images to enlarge</p>
      <div style={{display:"flex", backgroundColor:"#292f3655", padding:"5px"}}>
        {images}
      </div>
    </div>
  )
}