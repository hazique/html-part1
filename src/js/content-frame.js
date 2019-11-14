import React from 'react';
import ContentItem from './content-item';
import '../style/style.css';

function ContentFrame(props) {
    const itemList = props.itemList;

    let contentList = [];
    itemList.forEach( el => {
        const contentItem = <ContentItem icon={el.icon} itemHeading={el.itemHeading} description={el.description}/>
        contentList.push(contentItem);
    });

    return (
        <div class='content-frame'>
            <h2>{props.heading}</h2>
            <p>{props.subHeading}</p>
            { contentList }
        </div>
    );
}

export default ContentFrame;