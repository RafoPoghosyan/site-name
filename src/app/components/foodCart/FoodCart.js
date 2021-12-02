import './style.css';
import React, {useState} from 'react';
import Modal from 'react-modal';
import FoodCartDetails from "../modal/foodCartDetails/FoodCartDetails";
import { foodCartInfo } from "../dummyData/ModalStyle";


function FoodCart(props) {
    console.log(props)

    let [cart, setCart] = useState(false);


    const cartOpen = () => {
        setCart(!cart);
    };


    return (
        <>
            <div className={'food-cart-container'} onClick={cartOpen}>
                <div className={'food-info-container'}>
                    <div className={'food-img'}>
                        <img src={props.contentItem.foodImg}/>
                    </div>
                    <span className={'food-name'}>
                        {props.contentItem.foodName}
                    </span>
                    <span className={'food-description'}>
                        {props.contentItem.foodDescription}
                    </span>
                </div>
                <div className={'price-container'}>
                    <div>
                        N {props.contentItem.price.toLocaleString(undefined, {minimumFractionDigits: 2})}
                    </div>
                    <div className={'btn-highlight-hidden'}>
                        {props.contentItem.add}
                    </div>
                </div>
            </div>
            <Modal
                isOpen={cart}
                onRequestClose={cartOpen}
                style={foodCartInfo}
            >
                <FoodCartDetails
                    contentItem={props.contentItem}
                />
            </Modal>
        </>
    );
}

export default FoodCart