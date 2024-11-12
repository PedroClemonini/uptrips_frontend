
function Link({href, target, children}){
    
    if({target}.target === "_blank"){
        console.log({target}.target);
        return(
            <a href={href} target="_blank" rel="noreferrer" className="link">{children}</a>
        );
    } else {
        return(
            <a href={href} className="link">{children}</a>
        );
    }
}

export default Link;
