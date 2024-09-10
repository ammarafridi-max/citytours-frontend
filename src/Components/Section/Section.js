import { useState, useEffect } from "react";

export default function Section(props) {
  const sectionStyle = {
    paddingTop: props.pt || props.py || "100px",
    paddingBottom: props.pb || props.py || "100px",
    marginTop: props.mt || props.my,
    marginBottom: props.mb || props.my,
    backgroundColor:
      props.type === "secondary" ? "white" : "rgb(247, 247, 247)",
    color: props.backgroundColor === "primary" ? "white" : "black",
  };

  return (
    <section style={sectionStyle} className={props.className} id={props.id}>
      {props.children}
    </section>
  );
}
