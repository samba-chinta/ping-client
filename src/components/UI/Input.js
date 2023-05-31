import React from "react";

import styles from "../../styles/component-styles/input.module.css";

const Input = (props) => {
    const input_type = props.inputType;
    const placeholder = props.inputPlaceholder;
    const classes = `${styles["input-wrapper"]} ${props.className}`;
    const input_ref = props.inputRef;

    return (
        <input
            type={input_type}
            placeholder={placeholder}
            className={classes}
            ref={input_ref}
        />
    );
};

export default Input;
