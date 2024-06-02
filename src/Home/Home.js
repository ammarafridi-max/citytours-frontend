import styles from "./Home.module.css";
import Hero from "./Hero/Hero";
import HomeDestinations from "./HomeDestinations/HomeDestinations";
import HomeTours from "./HomeTours";
import HomeBlogs from "./HomeBlogs";
import HomeTestimonials from "./HomeTestimonials";
import DocumentMeta from "react-document-meta";

export default function Home() {
  const meta = {
    title: "Dubai's Leading Online Travel Agency | City Tours UAE",
    description: "I am a description, and I can create multiple tags",
    canonical: "http://example.com/path/to/page",
  };

  return (
    <>
      <DocumentMeta {...meta} />
      <Hero />
      <HomeDestinations />
      <HomeTours />
      <HomeBlogs />
      <HomeTestimonials />
    </>
  );
}
