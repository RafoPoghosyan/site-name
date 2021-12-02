import './style.css';
import React, { useState , useEffect , useContext } from 'react';

import {CreateContextItems} from "../context/AuthContext";


function Checkout(props){

    let [inputsState, setInputsState] = useState({
        name:'defaultValue',
        cardNumber:'defaultValue',
        cvv:'defaultValue',
        date:'defaultValue',
        clickCount:0,
    });

    let [clickPayment, setClickPayment] = useState(false);

    let parsedSelected = JSON.parse(localStorage.getItem('selectedFood')) ;
    let parsedOrder = JSON.parse(localStorage.getItem('orderData')) === null ?  [] : JSON.parse(localStorage.getItem('orderData'));
    let cardNameInput = null , cardNumberInput = null , cardCvvInput = null , expDateInput  = null;
    let context = useContext(CreateContextItems);

    const regExpName =  /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
    const regExpCardNumber = /^[0-9]{13,16}$/;
    const regExpCvv = /^[0-9]{3,4}$/;
    const regExpDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

        const onMakePayment = () => {

            (cardNameInput !== null || inputsState.clickCount === 0) ? setInputsState(prevState => ({
                ...prevState,
                name:regExpName.test(cardNameInput),
            })) : cardNameInput = null;

            cardNumberInput !== null || inputsState.clickCount === 0 ? setInputsState(prevState => ({
                ...prevState,
                cardNumber:regExpCardNumber.test(cardNumberInput),
            })) : cardNumberInput = null;

            cardCvvInput !== null || inputsState.clickCount === 0 ? setInputsState(prevState => ({
                ...prevState,
                cvv:regExpCvv.test(cardCvvInput),
            })) : cardCvvInput = null;

            expDateInput !== null || inputsState.clickCount === 0 ? setInputsState(prevState => ({
                ...prevState,
                date:regExpDate.test(expDateInput),
            })) : expDateInput = null;

            setInputsState( prevState => ({
                ...prevState,
                clickCount: inputsState.clickCount + 1,
            }));
            setClickPayment(!clickPayment);
        };

        useEffect(() => {
            if (inputsState.name === true && inputsState.cardNumber === true
                && inputsState.date === true && inputsState.cvv === true ) {

                let merged = [...parsedOrder, ...parsedSelected];
                let resultArray = [];

                for (let obj of merged) {
                    let found = resultArray.find(item => item.id === obj.id);
                    if (found) {
                        found.qty += obj.qty;
                        found.availablePcs -= obj.qty;
                    } else {
                        resultArray.push(obj)
                    }
                };

                localStorage.setItem('orderData' , JSON.stringify(resultArray));
                localStorage.setItem('selectedFood' , JSON.stringify([]));
                localStorage.setItem('selectedFoodCount' , JSON.stringify(0));

                context.changeOrder(!context.orderSuccess);
            }
        },[clickPayment]);

    return (
        <div className={'checkout-container'}>
            <span>
                Checkout
            </span>
            <div className={'checkout-inputs-container'}>
                <div>
                    <input type='text' placeholder={'Card Holder Name'} className={'input-fields'}  onChange={(e) => {
                        cardNameInput = e.target.value;
                    }}/>{
                    inputsState.name === false ?
                        <p className={'errorAlert'}>Card holder name is incorrect. First and last name should have at least 3 characters and should  space between.  </p>
                        : null
                        }
                </div>
                <div>
                    <input type='number' placeholder={'Card Number'} className={'input-fields'} onChange={(e) => {
                        cardNumberInput = e.target.value
                    }}/> {
                    inputsState.cardNumber === false ?
                        <p className="errorAlert"> Card number is incorrect</p>
                        : null
                        }
                </div>
                <div>
                    <input type='text' placeholder={'Exp Date'} className={'input-fields'} onChange={(e) => {
                        expDateInput = e.target.value
                    }}/> {
                    inputsState.date === false ?
                        <p className={'errorAlert'}> Expiry date is incorrect</p>
                        : null
                        }
                </div>
                <div>
                    <input type='number' placeholder={'CVV/CVC'} className={'input-fields'} onChange={(e) => {
                        cardCvvInput = e.target.value
                    }}/> {
                    inputsState.cvv === false ?
                        <p className={'errorAlert'}> Cvc is incorrect</p>
                        : null
                        }
                </div>
            </div>
            <button onClick={onMakePayment}>
                Make Payment
            </button>
        </div>
    )
};

export default Checkout
