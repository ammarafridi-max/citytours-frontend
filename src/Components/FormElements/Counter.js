import styles from "./Counter.module.css";
import { Remove, Add } from "@mui/icons-material";

function Counter({ count, setCount }) {
  const handleAdd = () => {
    if (count < 9) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className={styles.Counter}>
      <button type="button" className={styles.Button} onClick={handleSubtract}>
        <Remove />
      </button>
      <p className={styles.Number}>{count}</p>
      <button type="button" className={styles.Button} onClick={handleAdd}>
        <Add />
      </button>
    </div>
  );
}

export default Counter;
