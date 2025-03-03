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
  onDelete: (id: number) => void;
  onCompleteToggle: (id: number) => void;
  onCategoryChange: (id: number, newCategory: string) => void;
  categoryOptions: string[];
}

interface TemplateProps {
  items: TodoItem[];
  onDelete: (id: number) => void;
  onAdd: (newTask: string) => void;
  onCompleteToggle: (id: number) => void;
  onCategoryFilter: (category: string) => void;
  onCategoryChange: (id: number, newCategory: string) => void;
  categoryOptions: string[];
}

export const Template: React.FC<TemplateProps> = ({
  items,
  onDelete,
  onAdd,
  onCategoryFilter,
  onCategoryChange,
  onCompleteToggle,
  categoryOptions,
}) => {
  const total = items.length;
  const done = items.filter((item) => item.completed).length;
  const undone = total - done;

  return (
    <div>
      <div className={styles.blank}></div>
      <div className={styles.templateContainer}>
        <div className={styles.head}>
          <Head onAdd={onAdd} onCategoryFilter={onCategoryFilter} />
        </div>
        <div className={styles.body}>
          <Body
            items={items}
            onDelete={onDelete}
            onCompleteToggle={onCompleteToggle}
            onCategoryChange={onCategoryChange}
            categoryOptions={categoryOptions}
          />
        </div>
        <div className={styles.foot}>
          <Foot total={total} done={done} undone={undone} />
        </div>
      </div>
    </div>
  );
};
