import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./card-content.module.scss";

export const CardContent = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};
