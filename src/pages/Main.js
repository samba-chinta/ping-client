import React, { useState } from "react";

import styles from "../styles/page-styles/main.module.css";
import ChatBar from "../components/chat/ChatBar";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Link } from "react-router-dom";

const contacts = [
    "Damon",
    "Stafen",
    "Klaus",
    "Caroline",
    "Elena",
    "Katherine",
    "Rebekah",
    "Jeremy",
    "Jenny",
    "Alaric",
    "Elijah",
];

const Main = (props) => {
    const [selectedContact, setSelectedContact] = useState();

    return (
        <div className={styles["main-page__wrapper"]}>
            <div className={styles["chat-list"]}>
                <div className={styles["new-chat"]}>
                    <p>New Chat</p>
                    <Link>
                        <PersonAddAlt1Icon />
                    </Link>
                </div>
                <div className={styles["contacts"]}>
                    {contacts.map((contact) => {
                        return (
                            <ChatBar
                                contactName={contact}
                                key={Math.random()}
                                setContactHandler={(contact) => {
                                    setSelectedContact(contact)
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={styles["chat-room"]}>
                {selectedContact? <h1>Say Hello to {selectedContact}</h1>: "Chat Room"}
            </div>
        </div>
    );
};

export default Main;
