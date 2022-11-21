import React from "react";
import styles from "./progress-bar.module.scss";

interface ProgressBarProps {
  className?: string;
  customFillClassName?: string;
  progress: number;
}

export const ProgressBar = ({
  className,
  customFillClassName,
  progress,
}: ProgressBarProps) => {
  const fill = { width: `${progress}%` } as React.CSSProperties;
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={`${styles.fill} ${customFillClassName}`} style={fill} />
    </div>
  );
};
