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
      className={`mx-auto ${className}`}
      style={{
        paddingTop: pt || py,
        paddingBottom: pb || py,
        marginTop: mt || my,
        marginBottom: mb || my,
        backgroundColor: bgColor,
        width: "85%",
      }}
    >
      {children}
    </div>
  );
}
