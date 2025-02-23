import React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  onClick: () => void;
  variant: "add" | "delete";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};