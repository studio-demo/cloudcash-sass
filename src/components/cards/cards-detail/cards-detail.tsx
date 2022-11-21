import React from "react";
import styles from "./cards-detail.module.scss";

interface CardsDetailProps {
  className?: string;
  label: string;
  currency: string; //should be enum or from intl
  amount: number;
  trend?: "positive" | "negative" | "neutral";
  emphasized?: boolean;
}

export const CardsDetail = ({
  label,
  currency,
  amount,
  trend = "neutral",
  emphasized = false,
  className,
}: CardsDetailProps) => {
  const formattedAmount = new Intl.NumberFormat(undefined, {
    style: "decimal",
    minimumFractionDigits: 2,
  }).format(amount);

  return (
    <div className={`${styles.root} ${className}`}>
      <h6 className={styles.label}>{label}</h6>
      <span
        className={`${styles.amount} ${styles[trend]} ${
          emphasized && styles.emphasized
        }`}
      >
        <span className={styles.currency}>{currency}</span>
        {formattedAmount}
      </span>
    </div>
  );
};
