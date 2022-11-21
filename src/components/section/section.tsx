import React, { HTMLAttributes } from "react";
import { SectionContent } from "./section-content/section-content";
import styles from "./section.module.scss";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  Content?: typeof SectionContent;
}

export const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={`${styles.root} ${className}`}>{children}</section>
  );
};

Section.Content = SectionContent;
