import React, { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/component-styles/form.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Register = (props) => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(confirmPasswordRef.current.value);
    };

    return (
        <div className={styles["form-wrapper"]}>
            <form onSubmit={formSubmitHandler} className={styles["form"]}>
                <h2>Register Yourself!!</h2>
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
                <Input
                    inputType="password"
                    inputPlaceholder="Confirm Password"
                    inputRef={confirmPasswordRef}
                />
                <Button buttonType="submit" buttonText="Create an Account" />
                <Link to="/auth/login" className={styles["form-link"]}>
                    Already Have an Account? Login
                </Link>
            </form>
        </div>
    );
};

export default Register;
