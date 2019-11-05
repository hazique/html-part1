import React from 'react';

function HeaderListItem(props) {
    return (
        <li>
            <a>{props.title}</a>
        </li>
    );
}

export default HeaderListItem;