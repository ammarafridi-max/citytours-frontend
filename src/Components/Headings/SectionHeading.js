function SectionHeading(props) {
  return (
    <h2
      className={props.className}
      style={{
        fontSize: "40px",
        fontWeight: "700",
        textTransform: "capitalize",
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
