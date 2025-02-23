import React, { useState } from "react";
import { MainTemplate } from "../templates/MainTemplate";

interface TodoItem {
  id: number;
  category: string;
  task: string;
  completed: boolean;
}

export const ToDoPage: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(0);
  const [undone, setUndone] = useState(0);

  // 할 일 추가
  const addTask = (newTask: string) => {
    const newItem: TodoItem = {
      id: Date.now(),
      category: "일반", // 기본 카테고리로 설정
      task: newTask,
      completed: false, // 새로 추가되는 할 일은 완료되지 않은 상태
    };
    setItems([...items, newItem]);
    setTotal(total + 1);
    setUndone(undone + 1);
  };

  // 카테고리 변경 (추후 필요한 경우)
  const handleCategoryChange = (category: string) => {
    // 카테고리 변경 로직 (필요시)
  };

  // 할 일 삭제
  const deleteTask = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    setTotal(total - 1);
    setUndone(undone - 1); // 삭제된 항목이 미완료 목록에 있으면 미완료에서 빼기
  };

  return (
    <MainTemplate
      items={items}
      onAdd={addTask}
      onCategoryChange={handleCategoryChange}
      onDelete={deleteTask}
      total={total}
      done={done}
      undone={undone}
    />
  );
};

export default ToDoPage;
