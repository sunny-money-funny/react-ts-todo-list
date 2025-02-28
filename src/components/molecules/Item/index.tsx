// molecules/Item/index.tsx
import React, { useState } from "react";
import { Text } from "../../atoms/Text";
import { Checkbox } from "../../atoms/Checkbox";
import { Button } from "../../atoms/Button";
import { Dropdown } from "../../atoms/Dropdown";
import styles from "./styles.module.css";

interface ItemProps {
  id: number;
  category: string;
  task: string;
  completed: boolean;
  categoryOptions: string[];
  onDelete: (id: number) => void;
  onCompleteToggle: (id: number) => void;
  onCategoryChange: (id: number, newCategory: string) => void;
}

export const Item: React.FC<ItemProps> = ({
  id,
  category,
  task,
  completed,
  categoryOptions,  
  onDelete,
  onCompleteToggle,
  onCategoryChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.item}>
      {isEditing ? (
        <Dropdown
          options={categoryOptions}
          value={category}
          onChange={(newCategory) => {
            onCategoryChange(id, newCategory); 
            setIsEditing(false);
         }}
        />
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <Text
            variant="default"
            className={styles.category}
          >
            {category === "work" ? "업무" : category === "study" ? "공부" : "전체"}
          </Text>
        </div>
      )}
      <Text variant="default" className={styles.task}>{task}</Text>

      <div className={styles.buttons}>
        <Checkbox onChange={() => onCompleteToggle(id)} checked={completed} label="" />
        <Button onClick={() => onDelete(id)} variant="delete" className="delete-button">
          삭제
        </Button>
      </div>
    </div>
  );
};
