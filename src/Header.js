import React from 'react';
import './Header.css';
import { VscThreeBars } from "react-icons/vsc";
import { FaSearch, FaMicrophone, FaRegBell } from "react-icons/fa";


const Header = () => {
    return (
        <div id='Header'>
            <div className='FRCS'>
                <VscThreeBars id='threeBars' />
                <img src={require('./images/logo.jpg')} id='logo' />
            </div>
            <div className='FRCC'>
                <div id='searchBar'>
                    <input placeholder='Search' />
                    <FaSearch id='searchIcon' />
                </div>
                <FaMicrophone id='microphone' />
            </div>
            <div className='FRCE'>
                <FaRegBell id='notificationBell' />
                <div id='dp'>
                    <img src={require('./images/dp.jpg')} />
                </div>
            </div>
        </div>
    )
}

export default Header