// pages/index.tsx
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
  const [filteredItems, setFilteredItems] = useState<TodoItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleCategoryFilter = (category: string) => {
    console.log("Parent handleCategoryFilter", category);
    setActiveFilter(category);
    if (category === "all") {
      setFilteredItems([]);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  const handleAdd = (newTask: string) => {
    const newItem = {
      id: Date.now(),
      category: "전체",
      task: newTask,
      completed: false,
      onDelete: (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        setFilteredItems((prevItems) => prevItems.filter((item) => item.id !== id));
      },
      onCompleteToggle: (id: number) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
          )
        );
        setFilteredItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
          )
        );
      },
      onCategoryChange: (id: number, newCategory: string) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, category: newCategory } : item
          )
        );
        // 수정된 부분: 현재 필터에 따라 filteredItems 업데이트
        if (activeFilter === "all") {
          setFilteredItems([]);
        } else {
          const filtered = items.filter((item) => item.category === activeFilter);
          setFilteredItems(filtered);
        }
      },
      categoryOptions: ["전체", "업무", "공부"],
    };
    setItems((prevItems) => [...prevItems, newItem]);
    if(activeFilter === "all" || activeFilter === newItem.category){
      setFilteredItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const handleDelete = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setFilteredItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCompleteToggle = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    setFilteredItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleCategoryChange = (id: number, newCategory: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, category: newCategory } : item
      )
    );
    // 수정된 부분: 현재 필터에 따라 filteredItems 업데이트
    if (activeFilter === "all") {
      setFilteredItems([]);
    } else {
      const filtered = items.filter((item) => item.category === activeFilter);
      setFilteredItems(filtered);
    }
  };
  console.log("Template items props", activeFilter === "all" ? items : filteredItems);
  return (
    <Template
      items={activeFilter === "all" ? items : filteredItems}
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