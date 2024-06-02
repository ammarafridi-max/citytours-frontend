function Section(props) {
  return (
    <section
      className={`container-fluid mx-auto px-0 ${props.className}`}
      style={{
        paddingTop: props.pt || props.py,
        paddingBottom: props.pb || props.py,
        marginTop: props.mt || props.my,
        marginBottom: props.mb || props.my,
        backgroundColor: `${props.bgColor}`,
      }}
    >
      {props.children}
    </section>
  );
}

export default Section;
