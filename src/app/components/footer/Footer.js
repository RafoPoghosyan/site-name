import './style.css';
import  React from 'react';
import googlePlay from "../../assets/images/GooglePlayBadge.png";
import appStore from "../../assets/images/AppStoreBadge.png";
import youtubeIcon from "../../assets/images/youtubeIcons.png";
import twitterIcon from "../../assets/images/twitterIcons.png";
import instagramIcon from "../../assets/images/instagramIcons.png";
import {companyAllInfo} from "../dummyData/DummyData";
import CompanyAllInfo from "../companyAllInfo/CompanyAllInfo";

function Footer () {


    const renderCompanyAllInfo = () => {
        return companyAllInfo.map((item, index) => {
            return (
                <CompanyAllInfo contentItem={item} key={index} />
            )
        })
    };

    return (
        <footer>
            <div className={'bottom-info-container'}>
                {renderCompanyAllInfo()}
                <ul>
                    <li className={'info-title'}>Install App</li>
                    <li >
                        <img src={googlePlay} />

                    </li>
                    <li className={'app-store-img-li'}>
                        <img src={appStore}/>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className={'footer-container'}>
                    <span>
                        © 2021 LILIES, All rights reserved
                    </span>
                <div className={'social-icons-container'}>
                    <img src={youtubeIcon}/>
                    <img src={twitterIcon}/>
                    <img src={instagramIcon}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer