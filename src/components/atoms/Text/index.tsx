import React from "react";
import styles from "./styles.module.css";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "title" | "count";
  onClick?: () => void;
}

export const Text: React.FC<TextProps> = ({
  children,
  className = "",
  variant = "default",
  onClick,
}) => {
  return (
    <span className={`${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </span>
  );
};