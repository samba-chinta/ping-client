import React from "react";

import styles from "../styles/page-styles/auth.module.css";
import Login from "../components/forms/Login";

const LoginPage = (props) => {
    return <div className={styles['auth-page__wrapper']}>
        <Login/>
    </div>
}

export default LoginPage;