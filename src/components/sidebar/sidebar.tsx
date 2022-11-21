import React, { FC } from "react";
import Nav from "../nav/nav";
import { Icon } from "../icon/icon";
import styles from "./sidebar.module.scss";
import { Button } from "../button/button";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <img src="/images/logo.svg" alt="Cloudcash logo" />
      <Nav className={styles.nav}>
        <Nav.Item selected>
          <Icon glyph="insights" aria-hidden />
          Overview
        </Nav.Item>

        <Nav.Item>
          <Icon glyph="list" aria-hidden />
          Transactions
        </Nav.Item>

        <Nav.Item>
          <Icon glyph="creditCard" aria-hidden />
          Cards
        </Nav.Item>

        <Nav.Item>
          <Icon glyph="draft" aria-hidden />
          Invoices
        </Nav.Item>

        <Nav.Item>
          <Icon glyph="verified" aria-hidden />
          Goals
        </Nav.Item>

        <Nav.Item>
          <Icon glyph="settings" aria-hidden />
          Settings
        </Nav.Item>
      </Nav>
      <div className={styles.footer}>
        <img
          src="/images/illustrations/sidebar-footer-upgrade.svg"
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
