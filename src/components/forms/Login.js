import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import styles from "../../styles/component-styles/form.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import useApi from "../../hooks/useRequest";
import Toast from "../UI/Toast";
import { authActions } from "../../redux/auth-slice";

const Login = (props) => {
    const dispatch = useDispatch();

    const userNameRef = useRef("");
    const passwordRef = useRef("");
    const { response, error, postDataToApiHandler } = useApi();
    const [validationAlert, setValidationAlert] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setValidationAlert("");
        }, 5000);
    }, [validationAlert]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const username = userNameRef.current.value;
        const password = passwordRef.current.value;

        if (!username || !password) {
            setValidationAlert("Please fill all the fields");
        } else {
            setIsLoading(true);
            await postDataToApiHandler({
                url: "http://localhost:5000/auth/login",
                data: {
                    username,
                    password,
                },
            });
            setIsLoading(false);
        }
    };

    if (response) {
        localStorage.setItem('token', response.authToken);
        localStorage.setItem('username', response.username);
        localStorage.setItem('isMFAEnabled', response.isMFAEnabled);
        localStorage.setItem('isloggedin', true);
        dispatch(
            authActions.login({
                token: response.authToken,
                username: response.username,
                isMFAEnabled: response.isMFAEnabled,
            })
        )
    }

    return (
        <div className={styles["form-wrapper"]}>
            <form onSubmit={formSubmitHandler} className={styles["form"]}>
                <h2>Login into your Account</h2>
                <Input
                    inputType="text"
                    inputPlaceholder="Username"
                    inputRef={userNameRef}
                />
                <Input
                    inputType="password"
                    inputPlaceholder="New Password"
                    inputRef={passwordRef}
                />
                <label htmlFor="remember-me" className={styles["checkbox"]}>
                    <input type="checkbox" id="remember-me" />
                    <span>Remember Me</span>
                </label>
                <Button buttonType="submit" buttonText="Login" />
                <Link to="/auth/register" className={styles["form-link"]}>
                    Don't have a account? Register
                </Link>
            </form>
            {validationAlert &&
                createPortal(
                    <Toast
                        toastMessage="Please Enter all the fields"
                        className="failure"
                    />,
                    document.getElementById("toast")
                )}
            {response && <Navigate to="/auth/mfa" replace={true} />}
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

export default Login;
