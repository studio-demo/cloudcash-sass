import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./card-subtitle.module.scss";

export const CardSubtitle = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};
