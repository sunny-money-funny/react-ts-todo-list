import React from "react";
import styles from "./styles.module.css";

interface RadioProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label: string;
}

export const Radio: React.FC<RadioProps> = ({
    name,
    value,
    checked,
    onChange,
    className = "",
    label,
}) => {
  return (
    <label className={`${styles.radioLabel} ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.radioInput}
      />
      {label}
    </label>
  );
};