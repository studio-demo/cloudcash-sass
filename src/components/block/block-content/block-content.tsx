import React, { HTMLAttributes } from "react";
import styles from "./block-content.module.scss";

export const BlockContent = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
};
