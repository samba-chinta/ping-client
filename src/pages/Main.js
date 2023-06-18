import React from "react";

import styles from "../styles/page-styles/main.module.css";
import ChatBar from "../components/chat/ChatBar";

const Main = (props) => {
    return (
        <div className={styles['main-page__wrapper']}>
            <div className={styles['chat-list']}>
                ChatList
            </div>
            <div className={styles['chat-room']}>
                Chat Room
            </div>
        </div>
    )
}

export default Main;