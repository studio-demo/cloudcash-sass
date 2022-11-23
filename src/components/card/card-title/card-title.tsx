import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./card-title.module.scss";

export const CardTitle = ({
  className,
  children,
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={classNames(styles.root, className)}>
      {children}
      <div></div>
    </h2>
  );
};
