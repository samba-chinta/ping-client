import React, { useRef, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { createPortal } from "react-dom";

import styles from "../../styles/component-styles/form.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Toast from "../UI/Toast";
import useRequest from "../../hooks/useRequest";

const Register = (props) => {
    const emailRef = useRef("");
    const userNameRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");

    const [isLoading, setIsLoading] = useState(false);
    const [isAllFilled, setIsAllFilled] = useState(true);
    const [validationAlert, setValidationAlert] = useState("");

    const { response, error, postDataToApiHandler } = useRequest();

    useEffect(() => {
        setTimeout(() => {
            setIsAllFilled(true);
        }, 5000);
    }, [isAllFilled]);

    useEffect(() => {
        setTimeout(() => {
            setValidationAlert("");
        }, 5000);
    }, [validationAlert]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        // retrieving the values
        const email = emailRef.current.value;
        const username = userNameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (!email || !password || !confirmPassword || !username) {
            setIsAllFilled(false);
        } else if (password !== confirmPassword) {
            setValidationAlert("Both password must be the same");
        } else {
            // send a post request to create account
            setIsLoading(true);
            await postDataToApiHandler({
                url: "http://localhost:5000/auth/register",
                data: {
                    username,
                    email,
                    password,
                    token: "",
                },
            });
            setIsLoading(false);
        }

        // set to null
        emailRef.current.value = "";
        userNameRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
    };

    return (
        <div className={styles["form-wrapper"]}>
            <form onSubmit={formSubmitHandler} className={styles["form"]}>
                <h2>Register Yourself!!</h2>
                <Input
                    inputType="email"
                    inputPlaceholder="Email Address*"
                    inputRef={emailRef}
                />
                <Input
                    inputType="text"
                    inputPlaceholder="Username*"
                    inputRef={userNameRef}
                />
                <Input
                    inputType="password"
                    inputPlaceholder="New Password*"
                    inputRef={passwordRef}
                />
                <Input
                    inputType="password"
                    inputPlaceholder="Confirm Password*"
                    inputRef={confirmPasswordRef}
                />
                <Button buttonType="submit" buttonText="Create an Account" />
                <Link to="/auth/login" className={styles["form-link"]}>
                    Already Have an Account? Login
                </Link>
            </form>
            {!isAllFilled &&
                createPortal(
                    <Toast
                        toastMessage="Please Enter all the fields"
                        className="failure"
                    />,
                    document.getElementById("toast")
                )}
            {response &&
                <Navigate to="/auth/login" replace={true} />}
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
                    <Toast toastMessage="Loading" className="info" />,
                    document.getElementById("toast")
                )}
            {validationAlert &&
                createPortal(
                    <Toast
                        toastMessage={validationAlert}
                        className="failure"
                    />,
                    document.getElementById("toast")
                )}
        </div>
    );
};

export default Register;
