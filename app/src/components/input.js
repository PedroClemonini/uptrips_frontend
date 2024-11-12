function Input({label, type, name, maxlength, maxvalue, value}){
    return(
        <label>
            {label}
            <input type={type} name={name} maxLength={maxlength} maxvalue={maxvalue} value={value}/>
        </label>
    );
}

export default Input;
