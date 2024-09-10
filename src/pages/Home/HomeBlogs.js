import BlogCard from "../../components/BlogCard/BlogCard";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import SectionHeading from "../../components/Headings/SectionHeading";
import { useEffect, useState } from "react";
import { fetchAllBlogs } from "../../services/blogServices";

function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await fetchAllBlogs();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <Section pt="75px" pb="75px">
      <Container className="row justify-content-between">
        <SectionHeading textAlign="center" mb="75px">
          Recent Blogs
        </SectionHeading>
        <div className="row">
          {blogs.map((blog, i) => {
            if (i < 3) {
              return (
                <div className="col-12 col-lg-4 px-2">
                  <BlogCard
                    url={blog.url}
                    dateCreated={blog.dateCreated}
                    title={blog.title}
                    tag={blog.tag}
                    img={blog.image}
                  />
                </div>
              );
            }
          })}
        </div>
      </Container>
    </Section>
  );
}

export default HomeBlogs;
