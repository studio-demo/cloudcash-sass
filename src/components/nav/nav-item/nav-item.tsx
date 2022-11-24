import { FC, ReactNode } from "react";
import classNames from "classnames";
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
      href="#0"
      tabIndex={selected ? -1 : undefined}
      aria-current={selected ? true : undefined}
      className={classNames(
        styles.root,
        { [styles.selected]: selected },
        className
      )}
    >
      {children}
    </a>
  );
};
