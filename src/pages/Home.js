import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "../styles/page-styles/home.module.css";

const Home = (props) => {
    return (
        <div className={styles["page-wrapper"]}>
            <header className={styles["header"]}>
                <div className={styles["page-navigation__wrapper"]}>
                    <h3 className={styles["app-name"]}>ping</h3>
                    <nav className={styles["page-navigation"]}>
                        <NavLink
                            to="/register"
                            className={`${styles["nav-link"]} ${styles["get-started"]}`}
                        >
                            Get Started
                        </NavLink>
                    </nav>
                </div>
            </header>
            <main className={styles["main__wrapper"]}>
                <div className={styles["main"]}>
                    <h2 className={styles["main_motto"]}>
                        Ping anyone in the world from your comfort zone!!
                    </h2>
                    <div className={styles['routes-wrapper']}>
                    <Link to="/login" className={styles["route-link"]}>
                        Login
                    </Link>
                    <Link to="/register" className={styles["route-link"]}>
                        Register
                    </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
