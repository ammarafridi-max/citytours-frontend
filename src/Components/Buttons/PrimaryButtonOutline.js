import styles from "./Buttons.module.css";

export default function PrimaryButtonOutline(props) {
  return <button className={styles.BtnPrimaryOutline}>{props.children}</button>;
}
