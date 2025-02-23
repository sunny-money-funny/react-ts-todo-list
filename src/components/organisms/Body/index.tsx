import React from "react";
import { Item } from "../../molecules/Item";
import styles from "./styles.module.css";

interface TodoItem {
  id: number;
  category: string;
  task: string;
  completed: boolean;  
}

interface BodyProps {
  items: TodoItem[];
  onDelete: (id: number) => void;
  className?: string;
}

export const Body: React.FC<BodyProps> = ({ items, onDelete }) => {
  return (
    <div className={styles.bodyContainer}>
      {items.length === 0 ? (
        <p>아직 할일이 없다냐옹</p>
      ) : (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            category={item.category}
            task={item.task}
            checked={item.completed}  // 완료 상태 전달
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default Body;
