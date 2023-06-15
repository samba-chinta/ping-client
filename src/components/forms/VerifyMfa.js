import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import styles from "../../styles/component-styles/form.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import useApi from "../../hooks/useRequest";
import Toast from "../UI/Toast";

const VerifyMfa = (props) => {
    const auth = useSelector((state) => state.auth);

    const totpRef = useRef("");
    const { response, error, getDataFromApiHandler } = useApi();
    const [validationAlert, setValidationAlert] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setValidationAlert("");
        }, 5000);
    }, [validationAlert]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const totp = totpRef.current.value;

        if (!totp) {
            setValidationAlert("Please fill all the fields");
        } else {
            setIsLoading(true);
            console.table([auth.auth_token, totp, auth.username])
            await getDataFromApiHandler({
                url: `http://localhost:5000/auth/verify-totp?token=${auth.auth_token}&totp=${totp}&username=${auth.username}`,
            });
            setIsLoading(false);
        }
    };

    return (
        <div className={styles["form-wrapper"]}>
            <form onSubmit={formSubmitHandler} className={styles["form"]}>
                <h2>Verify the Identity</h2>
                <Input
                    inputType="text"
                    inputPlaceholder="Enter TOTP"
                    inputRef={totpRef}
                />
                <Button buttonType="submit" buttonText="Verify Me" />
            </form>
            {validationAlert &&
                createPortal(
                    <Toast
                        toastMessage="Please Enter all the fields"
                        className="failure"
                    />,
                    document.getElementById("toast")
                )}
            {response && <Navigate to="/" replace={true} />}
            {error &&
                createPortal(
                    <Toast
                        toastMessage={`${error?.message}`}
                        className="failure"
                    />,
                    document.getElementById("toast")
                )}
            {isLoading &&
                createPortal(
                    <Toast toastMessage="Loading..." className="info" />,
                    document.getElementById("toast")
                )}
        </div>
    );
};

export default VerifyMfa;
