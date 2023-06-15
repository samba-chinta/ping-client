import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth-slice";

import styles from "../../styles/component-styles/navigation.module.css";

const Navigation = (props) => {
    const dispatch = useDispatch();
    const [logout, setLogout] = useState(false);

    const logoutHandler = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("isloggedin");
        localStorage.removeItem("isMFAEnabled");
        dispatch(authActions.logout());
        setLogout(true);
    };

    return (
        <header className={styles["header"]}>
            <div className={styles["page-navigation__wrapper"]}>
                <h3 className={styles["app-name"]}>ping</h3>
                <nav className={styles["page-navigation"]}>
                    {!props.isLoggedIn && (
                        <NavLink
                            to="/register"
                            className={`${styles["nav-link"]} ${styles["get-started"]}`}
                        >
                            Get Started
                        </NavLink>
                    )}
                    {props.isLoggedIn && (
                        <button
                            type="button"
                            className={styles["logout-btn"]}
                            onClick={logoutHandler}
                        >
                            Logout
                        </button>
                    )}
                    {logout && <Navigate to="/" />}
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
