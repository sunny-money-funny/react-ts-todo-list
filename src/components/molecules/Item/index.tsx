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
  onTaskEdit: (id: number, newTask: string) => void;
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
  onTaskEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const itemClass = completed ? styles.completedItem : styles.pendingItem;
  const handleTaskEdit = () => {
    onTaskEdit(id, editedTask); // 수정된 내용 부모에게 전달
    setIsEditing(false); // 수정 모드 종료
  };

  return (
    <div className={`${styles.item} ${itemClass}`}>
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
          <Text variant="default" className={styles.category}>
            {category === "work"
              ? "업무"
              : category === "study"
              ? "공부"
              : "전체"}
          </Text>
        </div>
      )}
      <div className={styles.taskContainer}>
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className={styles.editTask}
          />
        ) : (
          <Text variant="default" className={styles.task}>
            {task}
          </Text>
        )}
      </div>
      <div className={styles.buttons}>
        {isEditing ? (
          <></>
        ) : (
          <Checkbox
            onChange={() => onCompleteToggle(id)}
            checked={completed}
            label=""
          />
        )}
        {isEditing ? (
          <Button
            onClick={handleTaskEdit}
            variant="delete"
            className={styles.editButton}
          >
            💾
          </Button>
        ) : (
          <Button
            onClick={() => setIsEditing(true)} // 수정 모드로 전환
            variant="delete"
            className={styles.editButton}
          >
            ✏️
          </Button>
        )}
        <Button
          onClick={() => onDelete(id)}
          variant="delete"
          className={styles.deleteButton}
        >
          🗑️
        </Button>
      </div>
    </div>
  );
};
