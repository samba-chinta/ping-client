import React from "react";

import styles from "../styles/page-styles/auth.module.css";
import Register from "../components/forms/Register";

const RegisterPage = (props) => {
    return <div className={styles['auth-page__wrapper']}>
        <Register/>
    </div>
}

export default RegisterPage;