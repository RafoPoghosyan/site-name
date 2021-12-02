import './style.css'
import React, {useState, useEffect, useContext} from 'react';
import logoIcon from '../../assets/images/logo-Icon.png';
import {dashboardListData , productsData} from "../../components/dummyData/DummyData";
import DashboardList from "../../components/dashboardList/DashboardList";
import profileImg from '../../assets/images/profileImg.png';
import FoodCart from "../../components/foodCart/FoodCart";
import {CreateContextItems} from "../../components/context/AuthContext";


function Dashboard() {

    let context = useContext(CreateContextItems);

    const [active, setActive] = useState(0);
    const [productsDataState, setProductsDataState] = useState(productsData);


    useEffect(() => {
        let parsedSelected = JSON.parse(localStorage.getItem('selectedFood'));
        if (parsedSelected !== null) {
            let newProductsData = productsDataState.map((item) => {
                parsedSelected.forEach(elem => {
                    if (elem.id === item.id) {
                        item.availablePcs = elem.availablePcs;
                    }
                });
                return item;
            });
            setProductsDataState(newProductsData);
        }
    }, [context.addToCartValue]);

    useEffect(() => {
        let parsedOrder = []
        if (JSON.parse(localStorage.getItem('selectedFood')) === null || JSON.parse(localStorage.getItem('selectedFood')).length === 0) {
            parsedOrder = JSON.parse(localStorage.getItem('orderData'))
        } else {
            parsedOrder = JSON.parse(localStorage.getItem('selectedFood'));
        }
        if (parsedOrder !== null) {
            let newProductsData = productsDataState.map((item) => {
                parsedOrder.forEach(elem => {
                    if (elem.id === item.id) {
                        item.availablePcs = elem.availablePcs;
                    }
                });
                return item;
            });
            setProductsDataState(newProductsData);
        }
    }, [context.orderSuccess]);

    const changeActive = (index) => {
        setActive(index);
    };

    const renderDashboardList = () => {
        return dashboardListData.map((item, index) => {
            return (
                <DashboardList
                    contentItem={item}
                    index={index}
                    key={index}
                    active={active}
                    changeActive={changeActive}
                />
            );
        });
    };

    const renderProducts = () => {
        return productsDataState.map((item, index) => {
            return (
                <FoodCart
                    contentItem={item}
                    key={index}
                />
            );
        });
    };

    return (
        <div className={'dashboard-container'}>
            <div className={'dashboard-left-side'}>
                <div className={'dashboard-logo'}>
                    <div className={'logo-img-content'}>
                        <img src={logoIcon}/>
                    </div>
                    <span>
                        Lilies
                    </span>
                </div>
                <div className={'dashboard-list'}>
                    <div className={'dashboard-list-container'}>
                        {renderDashboardList()}
                    </div>
                </div>
            </div>
            <div className={'dashboard-right-side'}>
                <div className={'right-side-container'}>
                    <div className={'dashboard-profile-part'}>
                        <div className={'greeting-content'}>
                            <span className={'greeting-text'}>
                                Good morning, Oghenevwede!
                            </span>
                            <span className={'meal-craving-text'}>
                                What delicious meal are you craving today?
                            </span>
                        </div>
                        <div className={'profile-img-container'}>
                            <img src={profileImg}/>
                        </div>
                    </div>
                    <div className={'products-part'}>
                        {renderProducts()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard