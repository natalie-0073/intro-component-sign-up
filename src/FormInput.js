import React, {useState} from "react";
import './_formInput.scss';
export default function FormInput(props){
    const [focused, setFocused]=useState(false);
    const {label, errorMessage, onChange, id, ...inputProps}=props;
    const handleFocus=(e)=>{
        setFocused(true);
    }
    return(
<div className="formInput">
    <input {...inputProps}
    onChange={onChange}
    onBlur={handleFocus}
    onFocus={()=>inputProps.name==="password"&&setFocused(true)}
    focused={focused.toString()}/>
    <span className="error">{errorMessage}</span>
</div>
    );
}