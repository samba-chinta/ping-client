import React from "react";

import styles from "../../styles/component-styles/button.module.css";

const Button = (props) => {
    const classes = `${styles["button-wrapper"]} ${props.className}`;
    const button_type = props.buttonType;
    const button_text = props.buttonText;

    return (
        <button className={classes} type={button_type} >
            {button_text}
        </button>
    );
};

export default Button;
