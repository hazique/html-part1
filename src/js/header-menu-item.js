import React from 'react';

function HeaderMenuItem(props) {
    return (
        <li>
            <a>{props.title}</a>
        </li>
    );
}

export default HeaderMenuItem;