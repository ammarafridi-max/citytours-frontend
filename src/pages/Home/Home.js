import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Home.module.css";
import Hero from "./Hero/Hero";
import HomeTours from "./HomeTours";
import HomeBlogs from "./HomeBlogs";
import HomeTestimonials from "./HomeTestimonials/HomeTestimonials";
import DocumentMeta from "react-document-meta";
import Benefits from "./Benefits/Benefits";
import Contact from "./Contact/Contact";

export default function Home() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true); // Trigger the enter transition when component mounts
  }, []);

  const meta = {
    title: "Dubai's Leading Online Travel Agency | City Tours UAE",
    description: "I am a description, and I can create multiple tags",
    canonical: "http://example.com/path/to/page",
  };

  return (
    <DocumentMeta {...meta}>
      <CSSTransition in={inProp} timeout={500} classNames="fade" unmountOnExit>
        <div>
          <Hero />
          <HomeTours />
          <Benefits />
          <HomeTestimonials />
          <HomeBlogs />
          <Contact />
        </div>
      </CSSTransition>
    </DocumentMeta>
  );
}
