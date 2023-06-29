import React, { useState } from "react";

import styles from "../styles/page-styles/main.module.css";
import ChatBar from "../components/chat/ChatBar";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Link } from "react-router-dom";
import ChatRoom from "../components/chat/ChatRoom";

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
                <form className={styles["contacts"]}>
                    {contacts.map((contact) => {
                        return (
                            <div key={Math.random()}>
                                <label
                                    htmlFor={`${contact}_${contact[0]}`.toLowerCase()}
                                >
                                    <ChatBar
                                        contactName={contact}
                                        setContactHandler={(contact) => {
                                            setSelectedContact(contact);
                                        }}
                                    />
                                </label>
                                <input
                                    type="checkbox"
                                    name="user-contact"
                                    id={`${contact}_${contact[0]}`.toLowerCase()}
                                />
                            </div>
                        );
                    })}
                </form>
            </div>
            {selectedContact ? (
                <ChatRoom contactName={selectedContact} />
            ) : (
                <div>Select the contact to chat</div>
            )}
        </div>
    );
};

export default Main;
