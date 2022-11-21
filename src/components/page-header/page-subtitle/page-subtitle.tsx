import React, { FC, ReactNode } from "react";
import styles from "./page-subtitle.module.scss";

export interface PageSubtitleProps {
  className?: string;
  children: ReactNode;
}

export const PageSubtitle: FC<PageSubtitleProps> = ({
  className,
  children,
}) => {
  return <span className={`${styles.root} ${className}`}>{children}</span>;
};
