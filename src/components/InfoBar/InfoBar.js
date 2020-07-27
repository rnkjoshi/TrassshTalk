import React from 'react';
import './InfoBar.css';
import closeIcon from '../../images/closeIcon.png';
import onlineIcon from '../../images/onlineIcon.png';
import {WhatsappShareButton,WhatsappIcon} from 'react-share';
const InfoBar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online"/>
                <h3>{room}</h3>
            </div>
            <div className="rightContainer">
                <WhatsappShareButton title={`Hey...Let's have a TrassshTalk\nJoin me in room - ${room}\n\n`} url="https://rnkjoshi.github.io/trassshtalk/#/">
                    <WhatsappIcon  size={32} round />
                </WhatsappShareButton>
                <a href="/trassshtalk/" className="closeIcon"><img src={closeIcon} alt="close" /></a>
            </div>
        </div>
    );
};

export default InfoBar;