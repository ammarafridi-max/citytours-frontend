import styles from "./FAQCard.module.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function FAQCard() {
  const [answerClass, setAnswerClass] = useState(styles.Hidden);

  function toggleHidden() {
    if (answerClass === styles.Hidden) {
      setAnswerClass(styles.Show);
    } else {
      setAnswerClass(styles.Hidden);
    }
  }

  return (
    <div className={styles.FAQCard}>
      <div className={styles.QuestionBox} onClick={toggleHidden}>
        <p className={styles.Question}>What is a tour?</p>
        {answerClass == styles.Hidden ? (
          <AddIcon className={styles.FAQIcon} />
        ) : (
          <RemoveIcon className={styles.FAQIcon} />
        )}
      </div>
      <p className={`${styles.Answer} ${answerClass}`}>This is an answer.</p>
    </div>
  );
}
