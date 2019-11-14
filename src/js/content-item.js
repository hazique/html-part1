import React from 'react';
import '../style/style.css';

export default function ContentItem (props){
    return (
        <div class='content-item'>
            <a><img src={props.icon}></img></a>
            <span>{props.itemHeading}</span>
            <p>{props.description}</p>
        </div>
    );
}