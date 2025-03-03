import React, { useState } from "react";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input"; // Input 컴포넌트 불러오기
import styles from "./styles.module.css";

interface AddListProps {
  onAdd: (newTask: string) => void; // 할 일을 추가하는 함수
}

export const AddList: React.FC<AddListProps> = ({ onAdd }) => {
  const [task, setTask] = useState<string>(""); // 할 일을 입력받는 상태

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value); // 입력값을 상태에 업데이트
  };

  const handleAddClick = () => {
    if (task.trim()) {
      onAdd(task); // 할 일이 비어있지 않으면 onAdd 호출
      setTask(""); // 입력 필드 초기화
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
