import React from "react";
import { Head } from "../organisms/Head";
import { Body } from "../organisms/Body";
import { Foot } from "../organisms/Foot";
import styles from "./styles.module.css";

interface TemplateProps {
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <Head />
      <Body>{children}</Body>
      <Foot />
    </div>
  );
};