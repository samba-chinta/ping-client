import React from 'react';

import styles from "../../styles/component-styles/toast.module.css";

const Toast = (props) => {
    const classes = `${styles['toast-wrapper']} ${styles[props.className]}`
    return <div className={classes}>
        {props.toastMessage}
    </div>
}

export default Toast;