import React from 'react';
import logo from '../img/header-logo.svg';
import '../style/style.css';
import HeaderMenu from './header-menu';
import HeaderOption from './header-option';

function Header() {
    return (
        <header>
            <a>
                <img src={logo}></img>
            </a>
            <HeaderMenu />
            <HeaderOption />
        </header>
    );
}

export default Header;