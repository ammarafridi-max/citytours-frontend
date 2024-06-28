import Container from "../Components/Container/Container";
import Section from "../Components/Section/Section";
import styles from "./BlogDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { url } = useParams();
  const [blogData, setBlogData] = useState({
    title: "",
    image: "",
    author: "",
    dateCreated: "",
    dateUpdated: "",
    text: "",
  });

  useEffect(() => {
    async function getBlog() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/blogs/get/${url}`
        );
        if (!response.ok) console.log("Error fetching blog");
        const data = await response.json();
        await setBlogData({
          title: data.title,
          image: data.image,
          author: data.author,
          dateCreated: data.dateCreated,
          dateUpdated: data.dateUpdated,
          text: data.text,
        });
        console.log(blogData);
      } catch (error) {
        console.log(error);
      }
    }

    getBlog();
  }, []);

  return (
    <Section className={styles.Section}>
      <Container>
        <div className="col-12 col-lg-10 mx-auto p-0"></div>

        {/* Blog Detail */}

        <div className="col-12 col-lg-10 mx-auto p-0">
          <h1 className={styles.Title}>{blogData.title}</h1>

          <div className={`row px-0 ${styles.AuthorAndDateSection}`}>
            <Author author={blogData.author} />
            <div className={styles.Dates}>
              <p>
                <strong>Published on:</strong> {blogData.dateCreated}
              </p>
              {blogData.dateUpdated && (
                <p>
                  <strong>Updated on:</strong> {blogData.dateUpdated}
                </p>
              )}
            </div>
          </div>
          <div className={styles.ImgDiv}>
            <img src={blogData.image} className={styles.Img} />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: blogData.text }}
            className={styles.BlogText}
          />
        </div>
      </Container>
    </Section>
  );
}

function Author({ author }) {
  return (
    <div className={`row align-items-center p-0 ${styles.AuthorCard}`}>
      <div className={styles.AuthorImgDiv}></div>
      <p className={styles.AuthorName}>{author}</p>
    </div>
  );
}
