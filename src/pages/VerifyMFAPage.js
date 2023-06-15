import React from "react";

import styles from "../styles/page-styles/auth.module.css";
import VerifyMfa from "../components/forms/VerifyMfa";

const VerifyMFAPage = (props) => {
    return <div className={styles['auth-page__wrapper']}>
        <VerifyMfa/>
    </div>
}

export default VerifyMFAPage;