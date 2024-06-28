export default function PageHeading(props) {
  return (
    <h1
      style={{
        fontSize: "34px",
        textTransform: "capitalize",
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
