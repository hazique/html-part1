import React from 'react';
import '../style/style.css';

function HeaderOptionItem (props) {
    return (
        <li>
            <img src={props.imageUrl}/>
        </li>
    );
}

export default HeaderOptionItem;