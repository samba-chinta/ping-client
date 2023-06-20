import React from "react";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import styles from "../../styles/component-styles/chatbar.module.css";

const ChatBar = (props) => {
    const selectHandler = () => {
        props.setContactHandler(props.contactName)
    }
    return (
        <label className={styles["chat-bar__wrapper"]} onClick={selectHandler}>
            <ChatBubbleOutlineIcon />
            <h3 className={styles["chat-contact__name"]}>
                {props.contactName}
            </h3>
            {props.children}
        </label>
    );
};

export default ChatBar;
