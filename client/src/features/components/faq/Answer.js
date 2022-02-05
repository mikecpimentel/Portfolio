

export const Answer = (props) => {
    return (
        <div>
            <p style={{fontWeight:"200", color:"#fffa", fontSize:"0.8em", marginTop:"10px"}}> {'> '}{props.children}</p>
        </div>
    )
}