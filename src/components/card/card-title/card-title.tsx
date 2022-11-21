import React, { HTMLAttributes } from "react";
import styles from "./card-title.module.scss";

export const CardTitle = ({
  className,
  children,
}: HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={`${styles.root} ${className}`}>{children}</h2>;
};
