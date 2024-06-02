import styles from "./Buttons.module.css";

export default function PrimaryButton(props) {
  return (
    <button
      className={`${styles.BtnPrimary} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
