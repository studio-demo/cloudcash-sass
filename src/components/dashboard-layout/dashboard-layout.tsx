import React, { FC, ReactNode } from "react";
import classNames from "classnames";
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
    <div className={classNames(styles.root, className)}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
};
