import React, { ButtonHTMLAttributes } from "react";
import { Icon, Glyph } from "../icon/icon";
import styles from "./status-badge-icon-button.module.scss";

interface StatusBadgeIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
  glyph: Glyph;
  hasUpdates?: boolean;
}

export const StatusBadgeIconButton = ({
  className,
  label,
  glyph,
  hasUpdates = false,
  ...props
}: StatusBadgeIconButtonProps) => {
  return (
    <button
      className={`${styles.root} ${className}`}
      aria-label={hasUpdates ? `${label} – has unread items` : label}
      {...props}
    >
      {hasUpdates && <div className={styles.indicator}></div>}
      <Icon glyph={glyph} />
    </button>
  );
};