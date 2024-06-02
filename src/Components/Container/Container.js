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
      className={`col-lg-11 col-10 mx-auto ${className}`}
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
