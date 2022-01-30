import { useState } from "react";

export const SkillItem = (props) => {
    let levelMeter = [];
    let filler = [];
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    for (let i=0; i<10; i++) {
        if (i < props.level) {
            levelMeter.push(<span className="skill-unit">▀</span>);
        } else {
            filler.push(<span>▀</span>);
        }
    }

    return (
        <div onClick={handleClick} className={open ? 'skill-div-outer skill-div-outer-open' : 'skill-div-outer skill-div-outer-closed'} >
            <div className="skill-div">
                <span className="skill">{props.skillType}</span>
                <span className={open ? 'levelBlock levelBlock-open' : 'levelBlock levelBlock-closed'}>{levelMeter}</span>
                <span className={open ? 'fillerBlock fillerBlock-open' : 'fillerBlock fillerBlock-closed'}>{filler}</span>
                <span style={{
                    color:"#fff5", fontSize:"0.8em", paddingLeft:"10px"
                }}>{props.level}/10</span>
                <span className="skill-info-button">Info</span> 
            </div>
            <div className={open ? 'skill-open skill-info-div' : 'skill-closed skill-info-div'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
    )
}