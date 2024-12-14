function Input({label, type, name, maxlength, maxvalue, value, placeholder, req, onChange, className}){
    return(
        <label>
            {label}
            <input 
            type={type} 
            name={name} 
            maxLength={maxlength} 
            max={maxvalue} 
            value={value} 
            placeholder={placeholder} 
            required = {req ? true : false}
            onChange={onChange}
            className={className}
            />
        </label>
    );
}

export default Input;
