import classNames from "classnames";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { Nav } from "../nav/nav";
import { NavItem } from "../nav/nav-item/nav-item";
import logo from "../../assets/images/logo.svg";
import upgradeTeaser from "../../assets/images/illustrations/sidebar-footer-upgrade.svg";
import styles from "./sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <img src={logo} alt="Cloudcash logo" />
      <Nav className={styles.nav}>
        <NavItem selected>
          <Icon glyph="insights" aria-hidden />
          Overview
        </NavItem>
        <NavItem>
          <Icon glyph="list" aria-hidden />
          Transactions
        </NavItem>
        <NavItem>
          <Icon glyph="creditCard" aria-hidden />
          Cards
        </NavItem>
        <NavItem>
          <Icon glyph="draft" aria-hidden />
          Invoices
        </NavItem>
        <NavItem>
          <Icon glyph="verified" aria-hidden />
          Goals
        </NavItem>
        <NavItem>
          <Icon glyph="settings" aria-hidden />
          Settings
        </NavItem>
      </Nav>
      <div className={styles.footer}>
        <img
          src={upgradeTeaser}
          className={styles.footerIllustration}
          aria-hidden
          alt=""
        />
        <span className={styles.footerText}>
          Give your money awesome space in cloud
        </span>
        <Button onClick={() => alert("Navigate to upgrade flow")}>
          Upgrade to Premium
        </Button>
      </div>
    </div>
  );
};
