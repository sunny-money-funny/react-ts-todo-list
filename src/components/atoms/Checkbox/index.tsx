import React from "react";
import styles from "./styles.module.css";

interface CheckboxProps {
  onChange: (checked: boolean) => void;
  checked: boolean;
  className?: string;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({   
  onChange,
  checked,
  className = "",
  label,
}) => {
  return (
    <label className={`${styles.checkbox} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(checked)}
        className={styles.input}
      />
      {label}
    </label>
  );
};
