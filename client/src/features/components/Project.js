import { useState } from "react";
import ReactModal from "react-modal";

const imageStyles = {
    padding: "20px 20px 0 20px",
    width: "95%",
    maxHeight: "80%",
    objectFit: "contain",
    borderRadius: "10px",
};
const divStyles = {
    display: "flex",
    justifyContent: "space-between",
    gap: "3px",
    position: "absolute",
    bottom: "0",
    width: "100%",
};
const div2Styles = {
    display: "flex",
    backgroundColor: "#292f3655",
    padding: "5px",
};
const pStyle = {
    fontSize: "0.8em",
    margin: "0",
    padding: "0",
};
const p2Style = {
    color: "#000",
    fontWeight: "200",
    fontSize: "0.8em",
    margin: "0",
    padding: "5px",
};

export const Project = (props) => {
    const imageArray = props.data.images;
    const title = props.data.title;
    const period = props.data.period;
    const tech = props.data.tech;
    const description = props.data.description;

    const modalObjects = {};
    for (let i = 0; i < imageArray.length; i++) {
        modalObjects["modal_" + i] = false;
    }
    const [modalStatuses, setModalStatuses] = useState(modalObjects);

    const handleClick = (e) => {
        if (modalStatuses["modal_" + e.target.id] == false) {
            setModalStatuses({
                ...modalObjects,
                ["modal_" + e.target.id]: true,
            });
        } else {
            setModalStatuses({
                ...modalObjects,
                ["modal_" + e.target.id]: false,
            });
        }
    };

    const handleOnRequestClose = (index) => {
        if (modalStatuses["modal_" + index] == false) {
            setModalStatuses({ ...modalObjects, ["modal_" + index]: true });
        } else {
            setModalStatuses({ ...modalObjects, ["modal_" + index]: false });
        }
    };

    const images = imageArray
        ? imageArray.map((photo, index) => (
              <>
                  <div className="modal-link-image">
                      <img src={photo[0]} id={index} onClick={handleClick} />
                  </div>
                  <ReactModal
                      isOpen={modalStatuses["modal_" + index]}
                      id={"modal_" + index}
                      onRequestClose={() => handleOnRequestClose(index)}
                      shouldCloseOnEsc={true}
                      shouldCloseOnOverlayClick={true}
                      className="modal-content-style"
                  >
                      <img src={photo[1]} id={index} style={imageStyles} />
                      <p style={{ padding: "0px", fontWeight: "200" }}>
                          {photo[2]}
                      </p>
                      <div style={divStyles}>
                          {index - 1 >= 0 ? (
                              <div
                                  id={index - 1}
                                  className="project-buttons"
                                  onClick={handleClick}
                              >
                                  &#x27F5; Previous Image
                              </div>
                          ) : (
                              <div className="project-buttons-disabled"></div>
                          )}
                          {index + 1 < imageArray.length ? (
                              <div
                                  id={index + 1}
                                  className="project-buttons"
                                  onClick={handleClick}
                              >
                                  Next image &#x27F6;
                              </div>
                          ) : (
                              <div
                                  className="project-buttons-disabled"
                                  id={index + 1}
                                  onClick={handleClick}
                              >
                                  Close
                              </div>
                          )}
                      </div>
                  </ReactModal>
              </>
          ))
        : "No images";

    return (
        <div className="floating-white-project animate__animated animate__fadeIn animate__faster">
            <div className="project-text-area">
                <h3 style={{ color: "#000", marginTop: "0" }}>{title}</h3>
                <p style={pStyle}>Period: {period}</p>
                <p style={pStyle}>Technologies: {tech}</p>
                {description.map((item) =>
                    item[0] === "p" ? (
                        <p>{item[1]}</p>
                    ) : item[0] === "ul" ? (
                        <ul>
                            {item[1].map((listItem) => (
                                <li>{listItem}</li>
                            ))}
                        </ul>
                    ) : null
                )}
            </div>
            <p style={p2Style}>Click images to enlarge</p>
            <div style={div2Styles}>{images}</div>
        </div>
    );
};