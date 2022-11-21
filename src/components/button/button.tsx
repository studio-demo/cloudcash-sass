import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={`${styles.root} ${className}`} {...props}>
      {children}
    </button>
  );
};
