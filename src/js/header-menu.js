import React from 'react';
import HeaderMenuItem from './header-menu-item';
import '../style/style.css';

function HeaderMenu() {
    return (
        <div class="header-div">
            <ul>
                <HeaderMenuItem title="Home" />
                <HeaderMenuItem title="Documentation" />
                <HeaderMenuItem title="Examples" />
                <HeaderMenuItem title="Themes" />
                <HeaderMenuItem title="Expo" />
                <HeaderMenuItem title="Logo" />
            </ul>
        </div>
    );
}

export default HeaderMenu;