import React from "react";
import { Count } from "../../molecules/Count";
import catImage from "../../../assets/cat.png";
import "./styles.css";

interface FootProps {
  total: number;
  done: number;
  undone: number;
}

export const Foot: React.FC<FootProps> = ({ total, done, undone }) => {
  return (
    <div className = "foot">
      <img src={catImage} alt="cat" />
      <Count total={total} done={done} undone={undone} />
    </div>
  );
};

export default Foot;
