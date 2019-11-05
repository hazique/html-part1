import React from 'react';
import logo from '../img/header-logo.svg';
import '../style/style.css';
import HeaderListItem from './header-list-item';

function Header() {
    return (
        <header>
            <a>
                <img src={logo}></img>
            </a>
            <div class="header-div">
                <ul>
                    <HeaderListItem title="Home"/>
                    <HeaderListItem title="Documentation"/>
                    <HeaderListItem title="Examples"/>
                    <HeaderListItem title="Themes"/>
                    <HeaderListItem title="Expo"/>
                    <HeaderListItem title="Logo"/>
                </ul>
            </div>
        </header>
    );
}

export default Header;