import React, { FC, ReactNode } from "react";
import styles from "./nav-item.module.scss";

export interface NavItemProps {
  className?: string;
  children?: ReactNode;
  selected?: boolean | undefined;
}

export const NavItem: FC<NavItemProps> = ({
  className,
  children,
  selected,
}) => {
  return (
    <a
      href="/#"
      tabIndex={selected ? -1 : undefined}
      aria-current={selected ? true : undefined}
      className={`${styles.root} ${selected && styles.selected} ${className}`}
    >
      {children}
    </a>
  );
};
