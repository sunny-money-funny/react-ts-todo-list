import React, { useState } from "react";
import { Template } from "../templates";

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

export const Todo = () => {
  const [items, setItems] = useState<TodoItem[]>([]);

  const handleCategoryFilter = (category: string) => {
    const filteredItems = items.filter((item) => item.category === category);
    setItems(filteredItems);
  };  
  
  const handleAdd = (newTask: string) => {
    const newItem = {
      id: Date.now(),
      category: "전체",
      task: newTask,
      completed: false,
      onDelete: (id: number) => {
        setItems(items.filter((item) => item.id !== id));
      },
      onCompleteToggle: (id: number) => {
        const updatedItems = items.map((item) => (
          item.id === id ? { ...item, completed: !item.completed } : item
        ));
        setItems(updatedItems);
      },
      onCategoryChange: (id: number, newCategory: string) => {
        const updatedItems = items.map((item) => (
          item.id === id ? { ...item, category: newCategory } : item
        ));

        setItems(updatedItems);
      },
      categoryOptions: ["전체", "업무", "공부"],
    };
    setItems([...items, newItem]);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCompleteToggle = (id: number) => {
    const updatedItems = items.map((item) => (
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
    setItems(updatedItems);
  };

  const handleCategoryChange = (id: number, newCategory: string) => {
    const updatedItems = items.map((item) => (
      item.id === id ? { ...item, category: newCategory } : item
    ));
    setItems(updatedItems);
  }

  return (
    <Template 
      items={items}
      onDelete={handleDelete} 
      onAdd={handleAdd} 
      onCategoryFilter={handleCategoryFilter} 
      onCompleteToggle={handleCompleteToggle}
      onCategoryChange={handleCategoryChange}
      categoryOptions={["전체", "업무", "공부"]}
    />
  );
};

export default Todo;