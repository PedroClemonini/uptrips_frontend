
function Button({classe, onClick, type, children}){
    return(
        <button 
            className={`button ${classe}`}
            type={type}
            onClick={onClick} 
        >
            {children}
        </button>
    );
}

export default Button;
