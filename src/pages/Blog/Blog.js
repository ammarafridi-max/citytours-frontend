import { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import PageHeading from "../../components/Headings/PageHeading";
import BlogCard from "../../components/BlogCard/BlogCard";
import { fetchAllBlogs } from "../../services/blogServices";
import { Helmet } from "react-helmet";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  const tags = ["Travel", "Dubai"];

  useEffect(() => {
    async function getBlogs() {
      try {
        const data = await fetchAllBlogs();
        setBlogs(data);
        console.log(blogs);
      } catch (error) {
        console.log(error);
      }
    }

    getBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Breadcrumb pageName="Blog" />
      <Section className={styles.Section}>
        <Container>
          <PageHeading textAlign="center" className={styles.Title}>
            Blog
          </PageHeading>
          <div className={`row justify-content-center ${styles.TagList}`}>
            {tags.map((tag) => (
              <button className={styles.Tag}>{tag}</button>
            ))}
          </div>
          <div className="row p-0 m-0">
            {blogs.map((blog) => {
              return (
                <div className="col-12 col-lg-4">
                  <BlogCard
                    url={blog.url}
                    dateCreated={blog.dateCreated}
                    title={blog.title}
                    tag={blog.tag}
                    img={blog.image}
                  />
                </div>
              );
            })}

            {/* <div className="col-12 col-lg-3 p-0">
              <BlogCard />
            </div>
            <div className="col-12 col-lg-3 p-0">
              <BlogCard />
            </div>
            <div className="col-12 col-lg-3 p-0">
              <BlogCard />
            </div> */}
          </div>
        </Container>
      </Section>
    </>
  );
}
