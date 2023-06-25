import React from "react";

import styles from '../../styles/component-styles/chatroom.module.css';

const ChatRoom = (props) => {
    return (
        <div>{props.contactName}</div>
    )
};

export default ChatRoom;