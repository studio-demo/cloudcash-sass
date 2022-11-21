import React, { FC, ReactNode } from "react";
import { Sidebar } from "../sidebar/sidebar";
import styles from "./dashboard-layout.module.scss";

interface DashboardLayoutProps {
  className?: string;
  children: ReactNode;
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
};
