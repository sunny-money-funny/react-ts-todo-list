import React from "react";
import { Text } from "../../atoms/Text";
import { Checkbox } from "../../atoms/Checkbox";
import { Button } from "../../atoms/Button";
import styles from "./styles.module.css";

interface ItemProps {
  id: number;
  category: string;
  task: string;
  onDelete: (id: number) => void;
  checked: boolean;
}

export const Item: React.FC<ItemProps> = ({ id, category, task, onDelete }) => {
  return (
    <div className={styles.item}>
      <Text variant="default" className={styles.category}>
        {category}
      </Text>
      <Text variant="default" className={styles.task}>
        {task}
      </Text>

      <div className={styles.buttons}>
        <Checkbox onChange={() => {}} checked={true} label="" />
        <Button
          onClick={() => onDelete(id)}
          variant="delete"
          className="delete-button"
        >
          삭제
        </Button>
      </div>
    </div>
  );
};
