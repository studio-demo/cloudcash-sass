import React, { HTMLAttributes } from "react";
import styles from "./card-subtitle.module.scss";

export const CardSubtitle = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
};
