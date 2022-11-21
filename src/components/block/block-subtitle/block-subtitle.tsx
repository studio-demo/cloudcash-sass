import React, { HTMLAttributes } from "react";
import styles from "./block-subtitle.module.scss";

export const BlockSubtitle = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
};
