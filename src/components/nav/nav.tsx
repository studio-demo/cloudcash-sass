import React, { ReactNode } from "react";
import { NavItem, NavItemProps } from "./nav-item/nav-item";
import styles from "./nav.module.scss";

interface NavSubcomponets {
  Item?: NavItemProps;
}

interface NavProps extends NavSubcomponets {
  className?: string;
  children?: ReactNode;
}

const Nav = ({ className, children }: NavProps) => {
  return <nav className={`${styles.root} ${className}`}>{children}</nav>;
};

const Item = (props: NavItemProps) => <NavItem {...props} />;
Nav.Item = Item;

export default Nav;
