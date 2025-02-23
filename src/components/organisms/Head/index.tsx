import React from "react";
import { AddList } from "../../molecules/AddList";
import { Filter } from "../../molecules/Filter";
import { Text } from "../../atoms/Text";
import styles from "./styles.module.css";

interface HeadProps {
  onAdd: (newTask: string) => void;
  onCategoryChange: (category: string) => void;
}

export const Head: React.FC<HeadProps> = ({ onAdd, onCategoryChange }) => {
  return (
    <div className={styles.headContainer}>
      <div className={styles.headText}>
        <Text variant="title" className={styles.title}>
          냥 투두
        </Text>
      </div>
      <div className={styles.inputContainer}>
        <AddList onAdd={onAdd} />
      </div>
      <div className={styles.filterWrapper}>
        <Filter onCategoryChange={onCategoryChange} />
      </div>
    </div>
  );
};
