import React from "react";

import styles from "../../styles/component-styles/card.module.css";

const Card = (props) => {
    const classes = `${styles["card-wrapper"]} ${props.className}`;

    return <div className={classes}>{props.children}</div>;
};

export default Card;
