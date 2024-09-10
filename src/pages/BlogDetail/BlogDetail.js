import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
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
      {/* Blog Detail */}

      <div className="col-12 col-lg-8 mx-auto p-0">
        <div className={styles.ImgDiv}>
          <img src={blogData.image} className={styles.Img} />
        </div>

        <Author blogData={blogData} />

        <div
          className={styles.BlogText}
          dangerouslySetInnerHTML={{ __html: blogData.text }}
        />
      </div>
    </Section>
  );
}

function Author({ author, blogData }) {
  return (
    <div className={styles.AuthorCard}>
      <div className={styles.authorData}>
        <div className={styles.AuthorImgDiv}></div>
        <p className={styles.AuthorName}>City Tours LLC</p>
      </div>
      <div className={styles.dates}>
        <p>
          <span className="semi-bold">Published on:</span>{" "}
          {blogData.dateCreated}
        </p>
        {blogData.dateUpdated && (
          <p>
            <span className="semi-bold">Updated on:</span>{" "}
            {blogData.dateUpdated}
          </p>
        )}
      </div>
    </div>
  );
}
