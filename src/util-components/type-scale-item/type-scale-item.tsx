import { FC, ReactNode } from "react";
import styles from "./type-scale-item.module.scss";

export interface TypeScaleItemProps {
  label: string;
  children?: ReactNode;
}

export const TypeScaleItem: FC<TypeScaleItemProps> = ({ label, children }) => {
  return (
    <div className={styles.root}>
      <span className={styles.label}>{label}</span>
      {children}
    </div>
  );
};
