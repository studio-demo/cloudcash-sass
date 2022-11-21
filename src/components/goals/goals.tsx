import React from "react";
import { IconButton } from "../icon-button/icon-button";
import { GoalItem } from "./goal-item/goal-item";
import styles from "./goals.module.scss";

export const Goals = () => {
  const goals = [
    {
      title: "Holidays",
      imageUrl: "/images/illustrations/mountain.svg",
      date: "Aug 7, 2022",
      amount: 550,
      currency: "USD",
    },
    {
      title: "Renovation",
      imageUrl: "/images/illustrations/brush.svg",
      date: "Sep 15, 2022",
      amount: 200,
      currency: "USD",
    },
    {
      title: "Xbox",
      imageUrl: "/images/illustrations/controller.svg",
      date: "Jan 1, 2023",
      amount: 820,
      currency: "USD",
    },
  ];
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>Goals</h2>
        <IconButton
          glyph="add"
          size="small"
          onClick={() => alert("Placeholder: Add goals flow")}
        />
      </div>
      <ul className={styles.goals}>
        {goals.map(({ title, imageUrl, date, amount, currency }, index) => (
          <GoalItem
            key={index}
            title={title}
            imageUrl={imageUrl}
            date={date}
            amount={amount}
            currency={currency}
          />
        ))}
      </ul>
    </div>
  );
};
