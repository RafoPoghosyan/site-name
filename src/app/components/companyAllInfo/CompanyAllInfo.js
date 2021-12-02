import './style.css'
import React from 'react';
import appStore from './../../assets/images/AppStoreBadge.png';
import googlePlay from './../../assets/images/GooglePlayBadge.png';

function CompanyAllInfo (props) {
    return(
        <div className={'all-info-container'}>
            <ul >
                {props.contentItem.map((item, index) => {
                  return  (index === 0) ?  <li className={'info-title'}>{item}</li>
                      : <li className={'info-title-pieces'}>{item}</li>;
                })}

            </ul>

        </div>
    );
}

export  default CompanyAllInfo