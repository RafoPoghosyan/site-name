import './style.css';
import React  from 'react';
import { useHistory } from 'react-router-dom';



function Login() {

    let navigate = useHistory();

    const toDashboard = () => {
        navigate.push('/food/dashboard')


    }
    return(
        <div className={'login-container'}>
            <div className={'login-left-img'}>
            </div>
            <div className={'login-content'}>
                <div className={'login-fields'}>
                    <span className={'login-welcome'}>
                        Welcome Back!
                    </span>
                    <input placeholder={'Your Email address'} type={'text'} className={'input-fields sign-up-email-input'}/>
                    <div className={'password-container'}>
                        <input placeholder={'Your Password'} type={'password'} className={'input-fields sign-up-password-input'}/>
                        <span className={'password-show'}>
                            show
                        </span>
                    </div>
                    <button className={'login-btn'} onClick={toDashboard}>
                        login
                    </button>
                    <div className={'forgot-password'}>
                        <span>
                            Create an account
                        </span>
                        <span>
                            Forgot Password
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login