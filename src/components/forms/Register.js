import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

import styles from "../../styles/component-styles/form.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Toast from "../UI/Toast";
import useRequest from "../../hooks/useRequest";

const Register = (props) => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");
    const [isAllFilled, setIsAllField] = useState(true);

    const { response, error, isLoading, postRequestHandler } = useRequest();

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        // retrieving the values
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (!email || !password || !confirmPassword) {
            // raise a toast with error
            setIsAllField(false);
        } else {
            // send a post request to create account
            await postRequestHandler({
                url: "http://localhost:5000/auth/register",
                token: "", // no token for now
                body: {
                    email,
                    password,
                },
            })
        }

        // set to null
        emailRef.current.value = "";
        passwordRef.current.value = "";
        confirmPassword.current.value = "";
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
                createPortal(
                    <Toast
                        toastMessage="Successfully Registered"
                        className="success"
                    />,
                    document.getElementById("toast")
                )}
            {error &&
                createPortal(
                    <Toast
                        toastMessage="Registration Failed, Try Again!"
                        className="failure"
                    />,
                    document.getElementById("toast")
                )}
            {isLoading &&
                createPortal(
                    <Toast toastMessage="Loading" className="info" />,
                    document.getElementById("toast")
                )}
        </div>
    );
};

export default Register;
