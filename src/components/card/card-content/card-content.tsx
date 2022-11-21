import React, { HTMLAttributes } from "react";
import styles from "./card-content.module.scss";

export const CardContent = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
};
