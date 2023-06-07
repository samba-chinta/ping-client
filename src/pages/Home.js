import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/page-styles/home.module.css";

const Home = (props) => {
    return (
        <div className={styles["page-wrapper"]}>
            <main className={styles["main__wrapper"]}>
                <div className={styles["main"]}>
                    <h2 className={styles["main_motto"]}>
                        Ping anyone in the world from your comfort zone!!
                    </h2>
                    <div className={styles['routes-wrapper']}>
                    <Link to="/auth/login" className={styles["route-link"]}>
                        Login
                    </Link>
                    <Link to="/auth/register" className={styles["route-link"]}>
                        Register
                    </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
