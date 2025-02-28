import React from "react";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, className }) => {
  return (
    <select className={className} value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option === "work" ? "업무" : option === "study" ? "공부" : "전체"}
        </option>
      ))}
    </select>
  );
};
