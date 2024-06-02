import styles from "./Blog.module.css";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import Section from "../Components/Section/Section";
import Container from "../Components/Container/Container";
import PageHeading from "../Components/Headings/PageHeading";
import BlogCard from "../Components/BlogCard/BlogCard";

export default function BlogPage() {
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
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </Container>
      </Section>
    </>
  );
}
