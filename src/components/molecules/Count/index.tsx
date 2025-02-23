import React from "react";
import { Text } from "../../atoms/Text";
import styles from "./styles.module.css";

interface CountProps {
  total: number;
  done: number;
  undone: number;
}

export const Count: React.FC<CountProps> = ({ total, done, undone }) => {
  return (
    <div className={styles.countContainer}>
        <Text className="countText" variant="count">전체: {total}</Text>
        <Text className="countText" variant="count">완료: {done}</Text>
        <Text className="countText" variant="count">미완료: {undone}</Text>
    </div>
  );
};

export default Count;
