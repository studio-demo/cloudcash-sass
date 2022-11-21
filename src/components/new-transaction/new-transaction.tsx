import React from "react";
import { Avatar } from "../avatar/avatar";
import Card from "../card/card";
import { IconButton } from "../icon-button/icon-button";
import styles from "./new-transaction.module.scss";

export const NewTransaction = () => {
  const users = [
    {
      userName: "Ann",
      profilePic: "/profile-pics/ann.jpg",
    },
    {
      userName: "Monica",
      profilePic: "/profile-pics/monica.jpg",
    },
    {
      userName: "John",
      profilePic: "/profile-pics/john.jpg",
    },
    {
      userName: "Mike",
      profilePic: "/profile-pics/mike.jpg",
    },
    // {
    //   userName: "Mia",
    //   profilePic: "profile-pics/mia.jpg",
    // },
  ];
  return (
    <Card>
      <Card.Title>New Transaction</Card.Title>
      <Card.Content className={styles.destinations}>
        {users.map(({ userName, profilePic }, index) => (
          <div className={styles.user} key={index}>
            <Avatar
              className={styles.profilePic}
              profilePic={profilePic}
              userName={userName}
            />
            <span className={styles.userName}>{userName}</span>
          </div>
        ))}
        <div className={styles.addUser}>
          <IconButton
            className={styles.addButton}
            glyph="add"
            size="small"
            onClick={() => alert("Placeholder: New transaction flow")}
          />
          <span className={styles.userName}>Add</span>
        </div>
      </Card.Content>
    </Card>
  );
};
