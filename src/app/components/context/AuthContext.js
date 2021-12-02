import React , { useState } from 'react';


export  const CreateContextItems = React.createContext({
    checkRemoveClick: true,
    changeRemoveClick: () => {},
    currentObj: {},
    changeCurrentObj: () => {},
    orderSuccess:false,
    changeOrder: () => {},
    addToCartValue:true,
    changeAddToCart: () => {},

});

const PassingContentItem = ({children}) => {

    const [newValue, setNewValue] = useState(true);
    const [newObj, setNewObj] = useState({});
    const [order, setOrder] = useState(false);
    const [addToCartValue, setAddToCartValue] = useState(true);


    const passCheckValue = (bool) => {
        setNewValue(bool);

    };

    const pasNewObj = (val) => {
        setNewObj(val);
    };

    const passOrderResult = (result) => {
        setOrder(result);
    };

    const passAddToCartValue = (val) => {
        setAddToCartValue(val)
    };






    return (
        <CreateContextItems.Provider
            value={{
                checkRemoveClick: newValue,
                changeRemoveClick: passCheckValue,
                currentObj: newObj,
                changeCurrentObj: pasNewObj,
                orderSuccess:order,
                changeOrder: passOrderResult,
                addToCartValue:addToCartValue,
                changeAddToCart:passAddToCartValue,

            }}
        >
            {children}
        </CreateContextItems.Provider>
    )
};

export default PassingContentItem