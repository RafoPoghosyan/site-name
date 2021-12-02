import './style.css';
import googlePlay from './../../assets/images/GooglePlayBadge.png';
import appStore from  './../../assets/images/AppStoreBadge.png';
import topPastaImg from  './../../assets/images/topPastaImage.png';
import React from "react";
import { mealOfDayData } from './../../components/dummyData/DummyData';
import MealsOfDay from "../../components/mealsOfDay/MealsOfDay";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";





function Home () {



    const renderMealsOfDay = () => {
        return mealOfDayData.map((item, index) => {
            return (
                <MealsOfDay contentItem={item} key={index}/>
            );
        });
    };

    return (
        <div className={'main-container'}>
            <Header/>
            <article className={'home-article'}>
                <div className={'sections-container'}>
                    <section>
                        <div className={'order-container'}>
                            <div className={'left-order-context'}>
                                <h1>
                                    Order food anytime, anywhere
                                </h1>
                                <p>
                                    Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!
                                </p>
                                <div className={'download-icon-container'}>
                                    <img className={"app-download-icon"} src={googlePlay}/>
                                    <img className={"app-download-icon"} src={appStore}/>
                                </div>
                            </div>
                            <div className={'top-pasta-image'}>
                                <img  src={topPastaImg}/>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2>
                            Special Meals of the day!
                        </h2>
                        <div className={'meals-container'}>
                            {renderMealsOfDay()}

                        </div>
                    </section>
                    <section>
                        <div className={'get-notified-container'}>
                            <div className={'get-notified-left-side'}>
                            <span>
                                Get notified when we update!
                            </span>
                                <p>
                                    Get notified when we add new items to our specials menu, update our price list of have promos!
                                </p>
                            </div>
                            <div>
                                <input className={'get-notified-email'} type={'text'} placeholder={'gregphillips@gmail.com'}/>
                                <button className={'get-notified-btn'}>
                                    Get notified
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
            <Footer/>
        </div>
    );
}

export default Home