
function Title({children, color, fontsize}){
    return (
        <h1
        style={{
            color: color || "white",
            fontSize: fontsize || "34px"
        }}>
            {children}
        </h1>
    );

}

export default Title;