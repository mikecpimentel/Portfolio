

export const Answer = (props) => {
    return (
        <div>
            <p style={{fontWeight:"200", color:"#fffa", fontSize:"1em", marginTop:"10px", lineHeight:"1.5"}}> {'> '}{props.children}</p>
        </div>
    )
}