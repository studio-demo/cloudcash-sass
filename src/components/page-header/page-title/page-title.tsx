import React, { FC, ReactNode } from "react";
import styles from "./page-title.module.scss";

export interface PageTitleProps {
  className?: string;
  children: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ className, children }) => {
  return <h1 className={`${styles.root} ${className}`}>{children}</h1>;
};
