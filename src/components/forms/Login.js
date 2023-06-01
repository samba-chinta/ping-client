import React, { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/component-styles/form.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Login = (props) => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    };

    return (
        <div className={styles["form-wrapper"]}>
            <form onSubmit={formSubmitHandler} className={styles["form"]}>
                <h2>Login into your Account</h2>
                <Input
                    inputType="email"
                    inputPlaceholder="Email Address"
                    inputRef={emailRef}
                />
                <Input
                    inputType="password"
                    inputPlaceholder="New Password"
                    inputRef={passwordRef}
                />
                <label htmlFor="remember-me" className={styles['checkbox']}>
                    <input type="checkbox" id="remember-me" />
                    <span>Remember Me</span>
                </label>
                <Button buttonType="submit" buttonText="Login" />
                <Link to="/auth/register" className={styles["form-link"]}>
                    Don't have a account? Register
                </Link>
            </form>
        </div>
    );
};

export default Login;
