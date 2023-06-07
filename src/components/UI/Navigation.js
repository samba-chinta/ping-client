import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../../styles/component-styles/navigation.module.css";

const Navigation = (props) => {
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
                        <NavLink
                            to="/log-out"
                            className={`${styles["nav-link"]} ${styles["get-started"]}`}
                        >
                            Logout
                        </NavLink>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
