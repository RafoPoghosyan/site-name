import './style.css'
import React from "react";

function MealsOfDay (props) {
    return (
        <div className={'meals-main-container'}>
            <div className={'meal-img'}>
                <img  src={props.contentItem.mealImg}/>
            </div>
            <span className={'meal-name'}>
                {props.contentItem.name}
            </span>
            <p className={'meal-description'}>
                {props.contentItem.description}
            </p>

        </div>
    );
}

export default MealsOfDay