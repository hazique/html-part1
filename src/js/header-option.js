import React from 'react';
import HeaderOptionItem from './header-option-item';

import github from '../img/github.svg';
import twitter from '../img/twitter.svg';
import slack from '../img/slack.svg';

import '../style/style.css';

function HeaderOption(){
    return (
        <div class="headerOption">
            <ul>
                <HeaderOptionItem imageUrl={github} />
                <HeaderOptionItem imageUrl={twitter} />
                <HeaderOptionItem imageUrl={slack} />
            </ul>
            <a>Download</a>
            
        </div>

    );
}

export default HeaderOption;