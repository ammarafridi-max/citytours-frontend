import styles from "./Headings.module.css";

function SectionHeading(props) {
  return (
    <h2
      className={`${styles.SectionHeading} ${props.className} `}
      style={{
        textAlign: `${props.textAlign}`,
        paddingTop: `${props.pt}`,
        paddingBottom: `${props.pb}`,
        marginTop: `${props.mt}`,
        marginBottom: `${props.mb}`,
      }}
    >
      {props.children}
    </h2>
  );
}

export default SectionHeading;
