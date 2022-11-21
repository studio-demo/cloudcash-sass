import React, { HTMLAttributes } from "react";
import styles from "./block-title.module.scss";

export const BlockTitle = ({
  className,
  children,
}: HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={`${styles.root} ${className}`}>{children}</h2>;
};
