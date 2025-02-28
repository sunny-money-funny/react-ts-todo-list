import { useState } from "react";

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

export const useTodo = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const addTodo = (task: string, category: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      task,
      category,
      completed: false,
      onDelete: deleteTodo,
      onCompleteToggle: toggleComplete,
      onCategoryChange: changeCategory,
      categoryOptions: ["all", "work", "study"],
    };

    setItems((prevItems) => [...prevItems, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleComplete = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const changeCategory = (id: number, newCategory: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, category: newCategory } : item
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
  };
};
