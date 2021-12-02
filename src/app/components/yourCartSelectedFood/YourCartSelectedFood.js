import './style.css'
import React , { useContext } from 'react';
import {CreateContextItems} from '../context/AuthContext';

function YourCartSelectedFood (props) {

    let context = useContext(CreateContextItems);

    const decreaseQty = () => {
        props.contentItem.qty -= 1;
        context.changeCurrentObj(props.contentItem);
        context.changeRemoveClick(!context.checkRemoveClick);
    };

    const increaseQty = () => {
        props.contentItem.qty += 1;
        context.changeCurrentObj(props.contentItem);
        context.changeRemoveClick(!context.checkRemoveClick);
    };

    return (
        <div className={'selected-food-container'}>
            <div className={'img-name-container'}>
                <div className={'your-cart-food-img'}>
                    <img src={props.contentItem.foodImg}/>
                </div>
                <div className={'name-remove-container'}>
                    <span className={'food-name'}>{props.contentItem.foodName}</span>
                    { props.contentItem.qty === 1 ? <span className={'your-cart-remove btn-highlight-hidden'} onClick={decreaseQty}>Remove</span>
                    : null }
                </div>
            </div>
            <div className={'your-cart-price-container'}>
                <div className={'plus-minus-your-cart'}>
                    <button onClick={increaseQty} className={'btn-highlight-hidden btn-increase-decrease'}>+</button>
                    <span>{props.contentItem.qty}</span>
                    { props.contentItem.qty === 1 ?
                        <button onClick={decreaseQty} className={'btn-highlight-hidden btn-increase-decrease disabled-btn'} disabled>-</button>
                        : <button onClick={decreaseQty} className={`btn-highlight-hidden  btn-increase-decrease`} >-</button>
                    }
                </div>
                <span>N { props.contentItem.price
                    .toLocaleString(undefined, {minimumFractionDigits:2})}
                </span>
                <span>N { (props.contentItem.price * props.contentItem.qty)
                    .toLocaleString(undefined, {minimumFractionDigits:2})}
                </span>
            </div>
        </div>
    );
}

export default YourCartSelectedFood