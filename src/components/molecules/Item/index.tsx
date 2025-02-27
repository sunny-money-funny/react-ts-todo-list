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
  checked: boolean;
  onDelete: (id: number) => void;
  onCompleteToggle: (id: number) => void;
  onCategoryChange: (id: number, newCategory: string) => void;
  categoryOptions: string[];
}

export const Item: React.FC<ItemProps> = ({
  id,
  category,
  task,
  checked,
  onDelete,
  onCompleteToggle,
  onCategoryChange,
  categoryOptions
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
            setIsEditing(false); // 선택 후 드롭다운 닫기
          }}
        />
      ) : (
        <div onClick={() => setIsEditing(true)}>
        <Text
          variant="default"
          className={styles.category}
        >
          {category}
        </Text>
        </div>
      )}
      <Text variant="default" className={styles.task}>{task}</Text>

      <div className={styles.buttons}>
        <Checkbox onChange={() => onCompleteToggle(id)} checked={checked} label="" />
        <Button onClick={() => onDelete(id)} variant="delete" className="delete-button">
          삭제
        </Button>
      </div>
    </div>
  );
};
