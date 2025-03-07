// organism/head/index.tsx
import React from "react";
import { AddList } from "../../molecules/AddList";
import { Filter } from "../../molecules/Filter";
import { Text } from "../../atoms/Text";
import styles from "./styles.module.css";

interface HeadProps {
  onAdd: (newTask: string) => void;
  onCategoryFilter: (category: string) => void;
}

export const Head: React.FC<HeadProps> = ({ onAdd, onCategoryFilter }) => {
  const handleTitleClick = () => {
    window.location.reload();
  };
  
  return (
    <div className={styles.headContainer}>
      <div className={styles.headText}>
        <Text variant="title" className={styles.title} onClick={handleTitleClick} > 
          냥 투두
        </Text>
      </div>
      <div className={styles.inputContainer}>
        <AddList onAdd={onAdd} />
      </div>
      <div className={styles.filterWrapper}>
        <Filter onCategoryFilter = {onCategoryFilter}/>
      </div>
    </div>
  );
};
