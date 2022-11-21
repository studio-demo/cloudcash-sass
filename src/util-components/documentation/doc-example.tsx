import React, { ReactNode } from "react";
import styles from "./doc-example.module.scss";

export interface DocExampleProps {
  className?: string;
  children: ReactNode;
  description?: ReactNode;
}

export const DocExample = ({
  className,
  children,
  description,
}: DocExampleProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.content}>{children}</div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
};
