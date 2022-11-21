import React, { HTMLAttributes } from "react";
import styles from "./section-content.module.scss";

export const SectionContent = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
};
