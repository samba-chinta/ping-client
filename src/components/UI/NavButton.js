import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/component-styles/navbutton.module.css";

const NavButton = (props) => {
    const nav_route = props.navRoute;
    const nav_name = props.navName;
    const classes = `${styles["link-wrapper"]} ${
        props.isPrimary ? styles["primary-route"] : styles["secondary-route"]
    } ${props.className}`;

    return (
        <Link className={classes} to={nav_route}>
            {nav_name}
        </Link>
    );
};

export default NavButton;
