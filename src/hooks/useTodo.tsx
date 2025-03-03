import { useState, useEffect } from "react";

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

const randomMessages = [
  "굿잡이라냥 😸",
  "멋지다냥! 😺",
  "집사 짱!! 😻",
  "완료! 잘했냥 🐾",
  "집사 perfect😽 ",
];

export const useTodo = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [completedItemId, setCompletedItemId] = useState<number | null>(null);
  const categoryOptions = ["all", "work", "study"];

  const addTodo = (task: string, category: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      task,
      category,
      completed: false,
      onDelete: deleteTodo,
      onCompleteToggle: toggleComplete,
      onCategoryChange: changeCategory,
      categoryOptions,
      onTaskEdit: changeCategory,
    };

    setItems((prevItems) => [newTodo, ...prevItems]);
  };

  const deleteTodo = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleComplete = (id: number) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          const newCompleted = !item.completed;
          return { ...item, completed: newCompleted };
        }
        return item;
      });

      // 완료된 항목을 맨 아래로 이동
      const completedItems = updatedItems.filter((item) => item.completed);
      const remainingItems = updatedItems.filter((item) => !item.completed);

      // 완료된 항목은 배열 뒤로
      return [...remainingItems, ...completedItems];
    });

    setCompletedItemId(id);
  };

  useEffect(() => {
    if (completedItemId !== null) {
      const randomMessage =
        randomMessages[Math.floor(Math.random() * randomMessages.length)];
      alert(randomMessage);

      // 완료된 항목 ID를 리셋해서 랜덤 메시지가 한 번만 나오도록 함
      setCompletedItemId(null);
    }
  }, [completedItemId]); // completedItemId가 변경될 때마다 실행

  const changeCategory = (id: number, newCategory: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, category: newCategory } : item
      )
    );
  };

  const changeTask = (id: number, newTask: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, task: newTask } : item
      )
    );
  };

  const handleCategoryFilter = (category: string) => {
    setActiveFilter(category);
  };

  const filteredItems = items.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return {
    items,
    addTodo,
    deleteTodo,
    toggleComplete,
    changeCategory,
    handleCategoryFilter,
    filteredItems,
    activeFilter,
    categoryOptions,
    changeTask,
  };
};
