import React from "react";

import styles from "../styles/page-styles/home.module.css";

import Card from "../components/UI/Card";
import NavButton from "../components/UI/NavButton";

const Home = (props) => {
    return (
        <Card className={styles["page-wrapper"]}>
            <h1>Hii World!!</h1>
            <NavButton
                navRoute="/signup"
                navName="Create an Account"
                isPrimary={true}
            />
            <NavButton
                navRoute="/login"
                navName="Login into your Account"
                isPrimary={false}
            />
        </Card>
    );
};

export default Home;
