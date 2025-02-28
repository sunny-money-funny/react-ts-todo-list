// components/pages/index.tsx
import React from 'react';
import { useTodo } from '../../hooks/useTodo';
import { Template } from '../templates';

const Page: React.FC = () => {
  const {
    filteredItems,
    handleCategoryFilter,
    addTodo,
    deleteTodo,
    toggleComplete,
    changeCategory,
    activeFilter,
    categoryOptions
  } = useTodo();

  return (
    <Template
      items={filteredItems}
      onDelete={deleteTodo}
      onAdd={(newTask: string) => addTodo(newTask, activeFilter !== "all" ? activeFilter : "all")}
      onCategoryFilter={handleCategoryFilter}
      onCompleteToggle={toggleComplete}
      onCategoryChange={changeCategory}
      categoryOptions={categoryOptions} 
    />
  );
};

export default Page;