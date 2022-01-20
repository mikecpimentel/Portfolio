

export const SkillItem = (props) => {
    let levelMeter = '';
    let filler = '';

    for (let i=0; i<10; i++) {
        if (i < props.level) {
            levelMeter += '■';
        } else {
            filler += '■';
        }
    }

    return (
        <div>
            <span className="skill">{props.skillType}</span>
            <span className="levelBlock">{levelMeter}</span>
            <span className="fillerBlock">{filler}</span>
        </div>
    )
}