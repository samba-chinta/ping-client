import React from "react";

import styles from "../../styles/component-styles/list.module.css";

const OrderedList = (props) => {
    const list_title = props.listTitle;
    const list_items = props.listItems;
    const classes = `${props.className} ${styles["list"]}`

    return (
        <div className={styles["list-wrapper"]}>
            <h3>{list_title}</h3>
            <ol className={classes}>
                {list_items.map((item) => {
                    return (
                        <li key={Math.random()} className={styles["list-itme"]}>
                            {item}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default OrderedList;
