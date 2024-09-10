import styles from "./Container.module.css";

export default function Container({
  className,
  children,
  pt,
  pb,
  py,
  mt,
  mb,
  my,
  bgColor,
}) {
  return (
    <div
      className={`${styles.Container} ${className}`}
      style={{
        paddingTop: pt || py,
        paddingBottom: pb || py,
        marginTop: mt || my,
        marginBottom: mb || my,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  );
}
