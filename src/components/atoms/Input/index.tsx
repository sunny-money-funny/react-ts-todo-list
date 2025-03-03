import React from "react";
import styles from "./styles.module.css";

interface InputProps {
  type: "text" | "radio";
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
  checked,
  onKeyDown,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      disabled={disabled}
      checked={checked}
      onKeyDown={onKeyDown}
    />
  );
};
