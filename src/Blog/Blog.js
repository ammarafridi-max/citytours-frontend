import { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import Section from "../Components/Section/Section";
import Container from "../Components/Container/Container";
import PageHeading from "../Components/Headings/PageHeading";
import BlogCard from "../Components/BlogCard/BlogCard";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/blogs`
        );
        if (!response.ok) console.log("Error fetching data");
        const data = await response.json();
        await setBlogs(data);
        console.log(blogs);
      } catch (error) {
        console.log(error);
      }
    }

    getBlogs();
  }, []);

  return (
    <>
      <Breadcrumb pageName="Blog" />
      <Section className={styles.Section}>
        <Container>
          <PageHeading textAlign="center" className={styles.Title}>
            Blog
          </PageHeading>
          <div className={`row justify-content-center ${styles.TagList}`}>
            <button className={styles.Tag}>Travel</button>
            <button className={styles.Tag}>Dubai</button>
            <button className={styles.Tag}>Umrah</button>
          </div>
          <div className="row p-0 m-0">
            {/* {blogs.map((blog) => {
              return (
                <div className="col-12 col-lg-3 p-0">
                  <BlogCard
                    url={blog.url}
                    date={blog.dateCreated}
                    heading={blog.title}
                    tag={blog.tag}
                    img={blog.image}
                    description={blog.text}
                  />
                </div>
              );
            })} */}

            <div className="col-12 col-lg-3 p-0">
              <BlogCard />
            </div>
            <div className="col-12 col-lg-3 p-0">
              <BlogCard />
            </div>
            <div className="col-12 col-lg-3 p-0">
              <BlogCard />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
