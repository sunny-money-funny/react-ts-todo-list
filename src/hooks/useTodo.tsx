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

  // *TO DO* 삭제 함수
  const deleteTodo = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleComplete = (id: number) => {
    setItems((prevItems) => {
      let shouldSetCompletedId = false;
  
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          const newCompleted = !item.completed;
          if (newCompleted) {
            shouldSetCompletedId = true; // 상태 변경 시 플래그 설정
          }
          return { ...item, completed: newCompleted };
        }
        return item;
      });
  
      console.log("Updated Items (before setting completedItemId):", updatedItems);
  
      if (shouldSetCompletedId) {
        setCompletedItemId(id); // 상태 변경을 여기에만 설정
      }
  
      const completedItems = updatedItems.filter((item) => item.completed);
      const remainingItems = updatedItems.filter((item) => !item.completed);
  
      return [...remainingItems, ...completedItems];
    });
  };
  
  useEffect(() => {
    console.log("useEffect triggered");
    console.log("completedItemId after update:", completedItemId);
    if (completedItemId !== null) {
      const randomMessage =
        randomMessages[Math.floor(Math.random() * randomMessages.length)];
      alert(randomMessage);
  
      setCompletedItemId(null);
      console.log("Completed Item ID Reset:", completedItemId);
    }
  }, [completedItemId]);
  
  console.log("Before update: completedItemId:", completedItemId);
  
  
  // *TO DO* 수정 함수
  const changeTask = (id: number, newTask: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, task: newTask } : item
      )
    );
  };

  // *TO DO* 카테고리 변경 함수
  const changeCategory = (id: number, newCategory: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, category: newCategory } : item
      )
    );
  };

  // 현재 활성화된 카테고리 필터 업데이트 
  const handleCategoryFilter = (category: string) => {
    setActiveFilter(category);
  };

  // 카테고리에 따라 필터링된 *TO DO* 목록 
  const filteredItems = items.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  // 전체, 완료, 미완료 할 일 계산
  const total = items.length;
  const done = items.filter((item) => item.completed).length;
  const undone = total - done;

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
    total,
    done,
    undone,
  };
};
