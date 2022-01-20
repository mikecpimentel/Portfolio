

export const SkillItem = (props) => {
    let levelMeter = [];
    let filler = [];

    for (let i=0; i<10; i++) {
        if (i < props.level) {
            levelMeter.push(<span className="skill-unit">▀</span>);
        } else {
            filler.push(<span>▀</span>);
        }
    }

    return (
        <div>
            <span className="skill">{props.skillType}</span>
            <span className="levelBlock">{levelMeter}</span>
            <span className="fillerBlock">{filler}</span>
            <span style={{
                color:"#fff5", fontSize:"0.8em", paddingLeft:"10px"
            }}>{props.level}/10</span>
        </div>
    )
}