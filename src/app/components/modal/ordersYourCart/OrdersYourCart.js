import './style.css';
import React from 'react';
import YourCartSelectedFood from "../../yourCartSelectedFood/YourCartSelectedFood";



function OrdersYourCart (props) {


    let cartData = [];

    props.checkOrder  ? cartData = JSON.parse(localStorage.getItem('orderData'))
    : cartData = JSON.parse(localStorage.getItem('selectedFood'));

    let totalPrice = 0;
     cartData.forEach(item => {
         totalPrice += item.price * item.qty;
     })

    const renderCartData = () => {
        return cartData.map((item, index) => {
            return (
                <YourCartSelectedFood
                contentItem={item}
                key={index}
                />
            );
        });
    };

    return(
        <div className={'your-cart-container'}>
            <div>
                 {
                    props.checkOrder ? <span> Your Order </span>
                        : <span> Your Cart </span>
                 }
                <div>
                    <div className={'your-cart-title'}>
                        <div>
                            Item
                        </div>
                        <div className={'price-qty-container'}>
                            <span>
                            Qty
                            </span>
                            {
                                props.checkOrder ? <span> Price </span>
                                    : <span> Unit Price </span>
                            }
                            {
                                props.checkOrder ? <span> Status </span>
                                    : <span> Sub-total </span>
                            }
                        </div>
                    </div>
                </div>
                {renderCartData()}
                { props.checkOrder ? null :
                    <>
                        <div className={'total-price'}>
                            <span className={'total-text'}>
                                Total:
                            </span>
                            <span className={'total-price-text'}>
                                N {totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2})}
                            </span>
                        </div>
                        <div className={'checkout-btn btn-highlight-hidden'} onClick={props.onOpenCheckout} >
                        Checkout
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default OrdersYourCart