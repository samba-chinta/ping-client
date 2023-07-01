import React from "react";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamIcon from "@mui/icons-material/Videocam";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import InfoIcon from '@mui/icons-material/Info';

import styles from "../../styles/component-styles/chatroom.module.css";

const ChatRoom = (props) => {
    return (
        <div className={styles["chat-room__wrapper"]}>
            <div className={styles["chat-room__header"]}>
                <p className={styles["contact-name"]}>{props.contactName}</p>
                <div className={styles["header-controls"]}>
                    <LocalPhoneIcon />
                    <VideocamIcon />
                    <ScreenShareIcon />
                    <InfoIcon />
                </div>
            </div>
            <div className={styles["chat-room__messages_body"]}>
                <h2>Messages</h2>
            </div>
            <div className={styles["chat-room__footer"]}>Messages form</div>
        </div>
    );
};

export default ChatRoom;
