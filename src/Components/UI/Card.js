import React from 'react';

import "./Card.css";

const Card = (props) => {
    const classes = 'card ' + props.className;  // for access class 
    return (
    <div className={classes}> {props.children} </div>// for access children comp & html(jsx)
 );
};

export default Card;