import BlogCard from "../Components/BlogCard/BlogCard";
import Container from "../Components/Container/Container";
import Section from "../Components/Section/Section";
import SectionHeading from "../Components/Headings/SectionHeading";
import { useState } from "react";

function HomeBlogs() {
  return (
    <Section pt="75px" pb="75px">
      <Container className="row justify-content-between">
        <SectionHeading textAlign="center" mb="75px">
          Recent Blogs
        </SectionHeading>
        <div className="row">
          {/* <div className="col-12 col-lg-3 p-0">
            <BlogCard />
          </div>
          <div className="col-12 col-lg-3 p-0">
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
  );
}

export default HomeBlogs;
