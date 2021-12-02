import  './style.css';
import React , { useState }  from 'react';
import logoIcon from "../../assets/images/logo-Icon.png";
import Modal from 'react-modal';
import SignUp from "../modal/SignUp/SignUp";
import Login from "../modal/Login/Login";

const customStyles = {
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        position: 'fixed',
        left: "50%",
        top: "50%",
        zIndex: '1',
        transform: "translateX(-50%) translateY(-50%)",
        backgroundColor: "#FFFFFF",
        borderRadius: '6px',
        padding: '0',
        height: 'max-content',
        maxWidth: '1440px',
        width: '100%',
        border: 'none',
    },
};



function Header  () {

    let [signUp, setSignUp] = useState(false);
    let [login, setLogin] = useState(false);



    const toggleSignUp = () => {
        setSignUp(!signUp);
    };

    const toggleLogin = () => {
        setLogin(!login)
    };





    return (
        <header>
            <div className={'logo-container'}>
                <img className={'logo-icon'} src={logoIcon}/>
                <span>Lilies</span>
            </div>
            <div className={'nav-container'}>
                <ul className={'nav-list'}>
                    <li>
                        Home
                    </li>
                    <li onClick={toggleLogin}>
                        Login
                    </li>
                    <li>
                        <button onClick={toggleSignUp} >
                            Sign Up
                        </button>
                    </li>
                </ul>
            </div>

            <Modal
                isOpen={signUp}
                onRequestClose={toggleSignUp}
                style={customStyles}
            >
                <SignUp/>
            </Modal>
            <Modal
                isOpen={login}
                onRequestClose={toggleLogin}
                style={customStyles}
            >
                <Login/>
            </Modal>
        </header>

    );
}

export  default Header