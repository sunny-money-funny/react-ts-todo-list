import React, { useState } from "react";
import { Template } from "../templates";
import { TodoItem } from "../molecules/TodoItem";
import { Foot } from "../organisms/Foot";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export const Page: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: "리액트 공부하기", completed: false },
    { id: 2, task: "운동하기", completed: true },
  ]);

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Template>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleComplete} />
        ))}
      </div>
      <Foot completedCount={todos.filter((todo) => todo.completed).length} />
    </Template>
  );
};
