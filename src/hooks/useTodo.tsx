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

  // *TO DO* 완료 체크 함수
  const toggleComplete = (id: number) => {
    setItems((prevItems) => {
      let shouldSetCompletedId = false;
  
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          const newCompleted = !item.completed;
          if (newCompleted) {
            shouldSetCompletedId = true; // ✅ true로 변경될 때만 플래그 설정
          }
          return { ...item, completed: newCompleted };
        }
        return item;
      });
  
      if (shouldSetCompletedId) {
        setCompletedItemId(id); // ✅ 상태 변경이 확정된 후 실행
      }
  
      const completedItems = updatedItems.filter((item) => item.completed);
      const remainingItems = updatedItems.filter((item) => !item.completed);
  
      return [...remainingItems, ...completedItems];
    });
  };
  
  // *TO DO* 완료 시 랜덤 메시지 출력 함수
  useEffect(() => {
    if (completedItemId !== null) {
      const randomMessage =
        randomMessages[Math.floor(Math.random() * randomMessages.length)];
      alert(randomMessage);

      setCompletedItemId(null);
    }
  }, [completedItemId]); 

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
