import React, { useState } from 'react';

const Form = (props) => {
    const {inputs, setInputs} = props;

    const [formFirstName, setFormFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [formFirstNameErr, setFormFirstNameErr] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

    const [isValid, setIsValid] = useState(false);

    const onChange = event => {
        setInputs ({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }

    const handleFormFirstNameError = (event) => {
        setFormFirstName(event.target.value);
        setFormFirstNameErr(event.target.value);

        if (event.target.value.length < 2) {
            setFormFirstNameErr("field must contain at least 2 characters");
        } 
        else {
            setFormFirstNameErr("");
        }
    }

    const handleLastNameError = event => {
        setLastName(event.target.value);
        setLastNameErr(event.target.value);

        if (event.target.value.length < 2) {
            setLastNameErr("field must contain at least 2 characters");
        } 
        else {
            setLastNameErr("");
        }
    }

    const handleEmailError = event => {
        setEmail(event.target.value);
        setEmailErr(event.target.value);
        
        if (event.target.value.length < 5) {
            setEmailErr("email must contain at least 5 characters");
        } 
        else {
            setEmailErr("");
        }
    }

    const handlePasswordError = event => {
        setPassword(event.target.value);
        setPasswordErr(event.target.value);
        
        if (event.target.value.length < 8) {
            setPasswordErr("field must contain at least 8 characters");
        } 
        else {
            setPasswordErr("");
        }
    }

    const handleConfirmPasswordError = event => {
        setConfirmPassword(event.target.value);
        setConfirmPasswordErr(event.target.value);
        
        if (event.target.value.length < 8) {
            setConfirmPasswordErr("password must contain at least 8 characters");
        } 
        else if (event.target.value.length != handlePasswordError) {
            setConfirmPasswordErr("passwords do not match. please try again.");
        }
        else {
            setConfirmPasswordErr("");
        }
    }

    return (
        <form onSubmit={ event => event.preventDefault() }>
        <div>
            <div>
                <label htmlFor="formFirstName">First Name: </label>
                <input onChange={handleFormFirstNameError} type="text" name="formFirstName"></input>
                {
                    formFirstNameErr ?
                        <p style={{color: 'maroon'}}>{formFirstNameErr}</p> :
                        ""
                }
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input onChange={handleLastNameError} type="text" name="lastName"></input>
                {
                    lastNameErr ?
                        <p style={{color: 'maroon'}}>{lastNameErr}</p> :
                        ""
                }
            </div>
            <div>
                <label htmlFor="email">Email Address: </label>
                <input onChange={handleEmailError} type="text" name="email"></input>
                {
                    emailErr ?
                        <p style={{color: 'maroon'}}>{emailErr}</p> :
                        ""
                }
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input onChange={handlePasswordError} type="text" name="password"></input>
                {
                    emailErr ?
                        <p style={{color: 'maroon'}}>{passwordErr}</p> :
                        ""
                }
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input onChange={handleConfirmPasswordError} type="text" name="confirmPassword"></input>
                {
                    emailErr ?
                        <p style={{color: 'maroon'}}>{confirmPasswordErr}</p> :
                        ""
                }
            </div>
        </div>
    </form>
    );
}
export default Form;