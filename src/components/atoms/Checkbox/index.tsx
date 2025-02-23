import React, { useState } from "react";
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
        checked={true}
        onChange={() => {}} // 아무 동작 없이 UI만 표시
        className={styles.input}
      />
      {label}
    </label>
  );
};
