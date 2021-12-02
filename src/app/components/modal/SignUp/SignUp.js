import './style.css'
import React, {useState} from 'react';
import axios from "axios";

function SignUp() {

    let [inputsState, setInputsState] = useState({
        nameValid:'defaultValue',
        emailValid:'defaultValue',
        passwordValid:'defaultValue',
        clickedCount:0,
        showHidePassword:false,
        signUpNameInput: null,
        signUpEmailInput: null,
        signUpPasswordInput: null

    });


    const regExpName = /([A-Z][a-z]*)([\\s\\\'-][A-Z][a-z]*)*/;
    const regExpEmail = /\w+(\.|-|_)?\w+@\w+\.\w{2,3}/ ;
    const regExpPass =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    let name = inputsState.signUpNameInput, email = inputsState.signUpEmailInput, password = inputsState.signUpPasswordInput;

    const onShowPassword = () => {
        setInputsState(prevState => ({
            ...prevState,
            showHidePassword: !inputsState.showHidePassword,
        }));
    };


    const onSignUp = () => {
        console.log(name)

        name !== null || inputsState.clickedCount === 0  ? setInputsState(prevState => ({
            ...prevState,
            signUpNameInput:name,
            nameValid: regExpName.test(name),
        })) : name = null;

        email !== null || inputsState.clickedCount === 0  ? setInputsState(prevState => ({
            ...prevState,
            signUpEmailInput: email,
            emailValid: regExpEmail.test(email),
        })) : email = null;

        password !== null || inputsState.clickedCount === 0  ? setInputsState(prevState => ({
            ...prevState,
            signUpPasswordInput:password,
            passwordValid: regExpPass.test(password),
        }))  : password = null;

        setInputsState(prevState => ({
            ...prevState,
            clickedCount: inputsState.clickedCount + 1,
        }));
        console.log(inputsState)

    };

    if(inputsState.nameValid === true && inputsState.emailValid === true && inputsState.passwordValid === true) {
        console.log(1)
        console.log(inputsState,'sdfsds')
        console.log(inputsState.signUpNameInput, inputsState.signUpEmailInput, inputsState.signUpPasswordInput)
        axios.post('https://lilies.herokuapp.com/auth/registration',
            {
                "name":inputsState.signUpNameInput,
                "email":inputsState.signUpEmailInput,
                "password":inputsState.signUpPasswordInput,
            }).then(response => {
            console.log(558)
                console.log(response)
        }).catch(error => {
            console.log(999)
            console.error(error.response)
        })

        console.log(55)
    }


    console.log(inputsState)


    return (
        <div className={'sign-up-container'}>
            <div className={'left-img-content'}>
                <p>
                    Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.
                </p>

            </div>
            <div className={'sign-up-content'}>
                <div className={'sign-up-fields'}>
                    <span className={'welcome-text'}>
                        Welcome to Lilies!
                    </span>
                    <div>
                        <input placeholder={'Your First Name'} type={'text'} className={'input-fields sign-up-name-input'} onChange={e => {
                            name = e.target.value;
                        }}/>
                        {
                            inputsState.name === false ?
                                <p className={'errorAlert'}>Name is incorrect. Name must start with capital letter</p>
                                : null
                        }
                    </div>
                    <div>
                        <input placeholder={'Your Email address'} type={'text'} className={'input-fields sign-up-email-input'} onChange={e => {
                            email = e.target.value;
                        }}/>
                        {
                            inputsState.email === false ?
                                <p className={'errorAlert'}>Email address is invalid.</p>
                                : null
                        }
                    </div>
                    <div className={'password-container'}>
                        <input placeholder={'Your Password'} type={inputsState.showHidePassword ? 'text' : 'password'} className={'input-fields sign-up-password-input'} onChange={e => {
                            password = e.target.value
                        }}/>
                        <span className={'password-show'} onClick={onShowPassword}>
                            {
                                inputsState.showHidePassword ? 'hide' : 'show'
                            }
                        </span>
                        {
                            inputsState.password === false ?
                                <p className={'errorAlert'}>Password is incorrect.</p>
                                : null
                        }
                    </div>
                    <button className={'sign-up-btn'} onClick={onSignUp}>
                        SIGN UP
                    </button>
                    <span className={'have-account'}>Already have an account.
                            <span>
                            LOGIN
                        </span>
                    </span>

                </div>

            </div>
        </div>

    );

}

export default SignUp