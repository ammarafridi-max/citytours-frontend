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
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Container>
    </Section>
  );
}

export default HomeBlogs;
