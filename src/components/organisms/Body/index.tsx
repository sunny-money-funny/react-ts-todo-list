// components/organisms/Body/index.tsx
import React from "react";
import { Item } from "../../molecules/Item";
import styles from "./styles.module.css";

interface TodoItem {
  id: number;
  category: string;
  task: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onCompleteToggle: (id: number) => void;
  onCategoryChange: (id: number, newCategory: string) => void;
  categoryOptions: string[];
  onTaskEdit: (id: number, newTask: string) => void;
}

interface BodyProps {
  items: TodoItem[];
  onDelete: (id: number) => void;
  onCompleteToggle: (id: number) => void;
  onCategoryChange: (id: number, newCategory: string) => void;
  categoryOptions: string[];
  onTaskEdit: (id: number, newTask: string) => void;
}

export const Body: React.FC<BodyProps> = ({
  items,
  onDelete,
  onCompleteToggle,
  onCategoryChange,
  categoryOptions,
  onTaskEdit,
}) => {
  return (
    <div className={styles.body}>
      {items.length === 0 ? (
        <p>아직 할 일이 없다냐옹</p>
      ) : (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            category={item.category}
            task={item.task}
            completed={item.completed}
            onDelete={onDelete}
            onCompleteToggle={onCompleteToggle}
            onCategoryChange={onCategoryChange}
            categoryOptions={categoryOptions}
            onTaskEdit={onTaskEdit}
          />
        ))
      )}
    </div>
  );
};

export default Body;
