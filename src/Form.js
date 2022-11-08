import React, {useState} from 'react';
import FormInput from './FormInput';
import './_form.scss';
export default function Form(){
    const [values, setValues]=useState({
        firstName: "",
        lastName: "",
        email:"",
        password:"",
    });
    const inputs=[
        {
            id:1,
            name:"firstName",
            type:"text",
            placeholder: "First Name",
            errorMessage: "First Name cannot be empty",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true

        },
        {
            id:2,
            name:"lastName",
            type:"text",
            placeholder: "Last Name",
            errorMessage: "Last Name cannot be empty",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true

        },
        {
            id:3,
            name:"email",
            type:"text",
            placeholder: "Email",
            errorMessage: "Looks like this is not an email",
            required: true
        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder: "Password",
            errorMessage: "Password cannot be empty",
      
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true

        },
    ];
    function handleSubmit(e){
        e.preventDefault();
    }
    function onChange(e){
        setValues({...values, [e.target.name]:e.target.value});
    }
    return(
        <form onSubmit={handleSubmit}>
                               {inputs.map((input)=>(<FormInput key={input.id} {...input}value={values[input.name]} onChange={onChange}/>))}
                               <input type="submit" value="CLAIM YOUR FREE TRIAL" className="btn-primary"/>
                                <small>By clicking the button, you are agreeing to our <span>Terms and Services</span></small>
                            </form>
    );
}