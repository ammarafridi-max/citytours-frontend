export default function PageHeading(props) {
  return (
    <h1
      style={{
        fontSize: "40",
        textTransform: "capitalize",
        fontWeight: "bold",
        textAlign: `${props.textAlign}`,
        paddingTop: `${props.pt}`,
        paddingBottom: `${props.pb}`,
        marginTop: `${props.mt}`,
        marginBottom: `${props.mb}`,
      }}
      className={props.className}
    >
      {props.children}
    </h1>
  );
}
