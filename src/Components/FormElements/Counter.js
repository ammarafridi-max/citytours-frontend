import styles from "./Counter.module.css";
import { useState } from "react";
import { Remove, Add } from "@mui/icons-material";

export default function Counter({ children, onAdd, onSubtract }) {
  return (
    <div className={styles.Counter}>
      <span type="none" className={styles.Button} onClick={onSubtract}>
        <Remove />
      </span>
      <p className={styles.Number}>{children}</p>
      <span type="none" className={styles.Button} onClick={onAdd}>
        <Add />
      </span>
    </div>
  );
}
