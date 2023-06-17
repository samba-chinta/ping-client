import React from 'react';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import styles from '../../styles/component-styles/chatbar.module.css';

const ChatBar = (props) => {
    return (
        <div className={styles['chat-bar__wrapper']}>
            <ChatBubbleOutlineIcon/>
            <h3 className={styles['chat-contact__name']}>
                {props.contactName}
            </h3>
        </div>
    )
}

export default ChatBar;