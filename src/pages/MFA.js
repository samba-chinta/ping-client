import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "../styles/page-styles/mfa.module.css";

const MFA = (props) => {
    const auth = useSelector((state) => state.auth);
    const [isMFAEnabled, setMFAEnabled] = useState(false);
    const [response, setResponse] = useState();
    const [error, setError] = useState();

    // const { response, error, getDataFromApiHandler } = useApi();

    useEffect(() => {
        const getResponseHandler = async () => {
            const res = await fetch(
                `http://localhost:5000/auth/generate-qr?token=${auth.auth_token}&username=${auth.username}`
            );
            if (!res.ok) {
                setError(await res.json());
            } else {
                setResponse(await res.text());
            }
        };
        getResponseHandler();
    }, [isMFAEnabled, auth.username, auth.auth_token]);

    return (
        <div className={styles["mfa-page__wrapper"]}>
            <div className={styles["main-wrapper"]}>
                <div className={styles["mfa-enable__wrapper"]}>
                    <p>Want to set-up Multifactor Authentication?</p>
                    <button type="button" className={styles["btn"]} onClick={() => {
                        setMFAEnabled(true);
                    }}>
                        Enable
                    </button>
                </div>
                {isMFAEnabled && response && (
                    <div
                        className={styles["mfa"]}
                        dangerouslySetInnerHTML={{ __html: response }}
                    />
                )}
                {isMFAEnabled && error && <p>Encounter an error, Try Again!!</p>}
            </div>
        </div>
    );
};

export default MFA;
