import './style.css';
import React, {useState, useContext} from 'react';
import {CreateContextItems} from "../../context/AuthContext";


function FoodCartDetails(props) {

    let [orderCount, setOrderCount] = useState(1);
    let [total, setTotal] = useState(1000);

    let context = useContext(CreateContextItems);

    const orderCountMinus = () => {
        if (orderCount > 1) {
            setOrderCount(--orderCount);
            setTotal(orderCount * props.contentItem.price);
        }
    };

    const orderCountPlus = () => {
        if (orderCount < props.contentItem.availablePcs) {
            setOrderCount(++orderCount);
            setTotal(orderCount * props.contentItem.price);
        }
    };

    const addToCart = () => {
        if (orderCount <= props.contentItem.availablePcs) {
            let selFood = JSON.parse(localStorage.getItem('selectedFood'));

            props.contentItem.availablePcs -= orderCount;
            if (selFood === null) {
                selFood = [];
            };
            let isSome = selFood.some(item => {
                if (item.id === props.contentItem.id) {
                    item.qty += orderCount;
                    item.availablePcs -= orderCount;
                    return item.id === props.contentItem.id;
                }
            });
            if (!isSome) {
                props.contentItem.qty += orderCount;
                selFood.push(props.contentItem);
            };

            let qtyCount = selFood.map(elem => elem.qty).reduce((preVal, curVal) => preVal + curVal);
            localStorage.setItem("selectedFood", JSON.stringify(selFood));
            localStorage.setItem("selectedFoodCount", JSON.stringify(qtyCount));

            context.changeAddToCart(!context.addToCartValue);;
            props.contentItem.qty = 0;
        } else {
            alert('not available');
        }
    };

    return (
        <div className={'food-cart-details-container'}>
            <div className={"details-food-img"}>
                <img src={props.contentItem.foodImg}/>
            </div>
            <p className={'details-food-name food-name'}>
                {props.contentItem.foodName}
            </p>
            <p className={'details-description food-description'}>
                {props.contentItem.fullDescription}
            </p>
            <div className={'details-order-info-container'}>
                <span>N {props.contentItem.price.toLocaleString(undefined, {minimumFractionDigits: 2})}
                </span>
                <span> Total: {total.toLocaleString(undefined, {minimumFractionDigits: 2})}
                </span>
                <span>
                    {props.contentItem.cookingTime} Mins
                </span>
                <span>
                    {props.contentItem.availablePcs} Pcs Avail
                </span>
            </div>
            <div className={'order-add-container'}>
                <div className={'order-count-container'}>
                    <div onClick={orderCountMinus} className={'btn-highlight-hidden'}>
                        -
                    </div>
                    <span>
                        {orderCount}
                    </span>
                    <div onClick={orderCountPlus} className={'btn-highlight-hidden'}>
                        +
                    </div>
                </div>
                <div className={'details-add-btn btn-highlight-hidden'} onClick={addToCart}>
                    {props.contentItem.add}
                </div>
            </div>

        </div>
    );
}

export default FoodCartDetails