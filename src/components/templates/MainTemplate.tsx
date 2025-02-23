import React from "react";
import { Head } from "../organisms/Head";
import { Body } from "../organisms/Body";
import { Foot } from "../organisms/Foot";
import styles from "./styles.module.css";

interface TodoItem {
  id: number;
  category: string;
  task: string;
  completed: boolean;
}

interface MainTemplateProps {
  items: TodoItem[];
  onAdd: (newTask: string) => void;
  onCategoryChange: (category: string) => void;
  onDelete: (id: number) => void;
  total: number;
  done: number;
  undone: number;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({
  items,
  onAdd,
  onCategoryChange,
  onDelete,
  total,
  done,
  undone,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Head onAdd={onAdd} onCategoryChange={onCategoryChange} />
      </div>
      <div className={styles.body}>
        <Body items={items} onDelete={onDelete} />
      </div>
      <div className={styles.foot}>
        <Foot total={total} done={done} undone={undone} />
      </div>
    </div>
  );
};

export default MainTemplate;
