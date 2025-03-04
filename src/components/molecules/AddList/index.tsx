import React, { useState } from "react";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input"; // Input 컴포넌트 불러오기
import styles from "./styles.module.css";

interface AddListProps {
  onAdd: (newTask: string) => void;
}

export const AddList: React.FC<AddListProps> = ({ onAdd }) => {
  const [task, setTask] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddClick = () => {
    if (task.trim()) {
      onAdd(task);
      setTask("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddClick(); // 엔터 키 입력 시 추가 실행
    }
  };

  return (
    <div className={styles.inputContainer}>
      <Input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하라냥 ㅋ"
      />
      <Button onClick={handleAddClick} variant="add">
        ADD
      </Button>
    </div>
  );
};
