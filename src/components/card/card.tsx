import React, { HTMLAttributes } from "react";
import { CardTitle } from "./card-title/card-title";
import { CardSubtitle } from "./card-subtitle/card-subtitle";
import { CardContent } from "./card-content/card-content";
import styles from "./card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  Title?: typeof CardTitle;
  Subtitle?: typeof CardSubtitle;
  Content?: typeof CardContent;
}

const Card = ({ className, children }: CardProps) => {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
};

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Content = CardContent;

export default Card;