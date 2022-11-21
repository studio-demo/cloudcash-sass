import React, { ReactNode } from "react";
import styles from "./doc.module.scss";

export interface DocProps {
  className?: string;
  children: ReactNode;
}

export const Doc = ({ className, children }: DocProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
