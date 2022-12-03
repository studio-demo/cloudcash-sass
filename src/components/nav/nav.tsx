import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./nav.module.scss";

interface NavProps {
  className?: string;
  children?: ReactNode;
}

export const Nav = ({ className, children }: NavProps) => {
  return <nav className={classNames(styles.root, className)}>{children}</nav>;
};
