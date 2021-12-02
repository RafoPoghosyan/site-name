import './style.css';
import React, {useContext, useEffect, useState} from 'react';
import Modal from 'react-modal';
import OrdersYourCart from "../modal/ordersYourCart/OrdersYourCart";
import Checkout from "../checkout/Checkout";
import { yourCartStyle, checkoutStyle } from "../dummyData/ModalStyle";
import {CreateContextItems} from "../context/AuthContext";


function DashboardList (props) {

    const [openYourCart, setOpenYourCart] = useState(false);
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [selectedCount, setSelectedCount] = useState(JSON.parse(localStorage.getItem('selectedFoodCount')));
    const [orderCount, setOrderCount] = useState(JSON.parse(localStorage.getItem('orderCount')));
    const [checkRemoveClick, setCheckRemoveClick] = useState(true);


    let contextInDashboard = useContext(CreateContextItems);
    let selFood = JSON.parse(localStorage.getItem('selectedFood'));
    let ordersParse = JSON.parse(localStorage.getItem('orderData'));

    useEffect(()=> {
        setSelectedCount(JSON.parse(localStorage.getItem('selectedFoodCount')));

    }, [contextInDashboard.addToCartValue]);

    useEffect(() => {

        let orderQty = 0;
        ordersParse !== null ? orderQty =  ordersParse.reduce((sum,b)=>(sum += b.qty),0) : orderQty = 0;

        localStorage.setItem('orderCount', JSON.stringify(orderQty))
        setOrderCount(JSON.parse(localStorage.getItem('orderCount')))
        setSelectedCount(JSON.parse(localStorage.getItem('selectedFoodCount')));
    },[contextInDashboard.orderSuccess]);

    if (checkRemoveClick !== contextInDashboard.checkRemoveClick) {
        selFood.find(item => {
            if (item.id === contextInDashboard.currentObj.id) {

                if (contextInDashboard.currentObj.qty < 1) {
                    selFood.splice(selFood.indexOf(item), 1);
                    if (selFood.length === 0) {
                        localStorage.setItem("selectedFood", JSON.stringify(selFood));
                        localStorage.setItem("selectedFoodCount", JSON.stringify(0));
                        return item.id === contextInDashboard.currentObj.id;
                    }
                } else {
                    selFood[selFood.indexOf(item)].qty = contextInDashboard.currentObj.qty;
                }
                localStorage.setItem('selectedFoodCount', JSON.stringify(selFood.map(elem => elem.qty).reduce((preVal, curVal) => preVal + curVal)));
                localStorage.setItem("selectedFood", JSON.stringify(selFood));
                return item.id === contextInDashboard.currentObj.id;
            }
        });
        setSelectedCount(JSON.parse(localStorage.getItem('selectedFoodCount')));
        setCheckRemoveClick(contextInDashboard.checkRemoveClick);
    }


    const toggleOpenCategories = () => {
        if (props.index === 3) {
            if (selFood !== null) {
                setOpenYourCart(true);
            }  if (openYourCart === true) {
                setOpenYourCart(false)
            }
        } else if (props.index === 2) {
            if (ordersParse !== null) {
                setOpenYourCart(true);
            }  if (openYourCart === true) {
                setOpenYourCart(false)
            }
        }

    };

    const toggleCheckoutOpen = () => {
        setCheckoutOpen(!checkoutOpen);
    };

    return (
        <>
            <div className={`list-container btn-highlight-hidden ${props.active === props.index ? 'active' : 'not-active' }`} onClick={() => {
                props.changeActive(props.index);
                toggleOpenCategories();
            }}>
                <div className={'list-icon-style'}>
                    <img className={` ${props.active === props.index ? 'filter-black' : 'filter-gray' }`} src={props.contentItem.icon}/>
                </div>
                <div className={'list-text-style'}>
                    <span className={`list-text `}>
                    {props.contentItem.text}
                    </span>
                    {(props.index === 3 && selectedCount > 0) ?
                        <span className={'selected-foods' }>
                        {selectedCount}
                        </span>
                        : null
                    }
                    {(props.index === 2 && orderCount > 0) ?
                    <span className={'selected-foods' }>
                        {orderCount}
                        </span>
                    : null
                }
                </div>
            </div>
            {props.index === 3 ? <Modal
                isOpen={openYourCart}
                onRequestClose={toggleOpenCategories}
                style={yourCartStyle}
            >
                <OrdersYourCart
                    checkOrder={false}
                    onOpenCheckout={toggleCheckoutOpen}
                />
            </Modal>
            : null }
            {props.index === 2 ? <Modal
                isOpen={openYourCart}
                onRequestClose={toggleOpenCategories}
                style={yourCartStyle}
            >
                <OrdersYourCart
                    checkOrder={true}
                    onOpenCheckout={toggleCheckoutOpen}
                />
            </Modal>
                : null }
            <Modal
                isOpen={checkoutOpen}
                style={checkoutStyle}
                onRequestClose={toggleCheckoutOpen}
                onAfterOpen={toggleOpenCategories}
            >
                <Checkout/>
            </Modal>
        </>
    );
}

export default DashboardList