import React, { useState } from "react";
import styles from "./styles.module.css";
import { Radio } from "../../atoms/Radio";

interface FilterProps {
  onCategoryFilter: (category: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ onCategoryFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  return (
    <div className={styles.filter}>
      <Radio
        name="category"
        value="all"
        checked={selectedCategory === "all"}
        onChange={() => handleCategoryChange("all")}
        label="전체"
      />
      <Radio
        name="category"
        value="work"
        checked={selectedCategory === "work"}
        onChange={() => handleCategoryChange("work")}
        label="업무"
      />
      <Radio
        name="category"
        value="study"
        checked={selectedCategory === "study"}
        onChange={() => handleCategoryChange("study")}
        label="공부"
      />
    </div>
  );
};
