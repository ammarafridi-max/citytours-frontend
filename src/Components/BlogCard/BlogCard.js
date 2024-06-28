import { useState } from "react";
import img from "./travel.png";
import styles from "./BlogCard.module.css";
import { Link } from "react-router-dom";

function BlogCard({ heading, description, tag, date, url }) {
  const blog = {
    title: "How to build your dream holiday package?",
    description:
      "It doesn't have to be hard. Just stick to basics and you'll create your dream package. In this guide, you'll learn how to create your dream package.",
    category: "Travel",
    dateWritten: "March 13, 2023",
  };

  return (
    <div className={styles.blogCardDiv}>
      <Link to={`/blog/${url}`}>
        <div className={styles.blogCardImgDiv}>
          <img src={img} className={styles.blogCardImg} />
        </div>
        <div className={styles.blogCardContent}>
          <div className={styles.blogCardDate}>March 20, 2024</div>
          <div className={styles.blogCardPill}>Travel</div>
          <h4 className={styles.blogCardHeading}>
            How to book your holiday with City Tours?
          </h4>
          <div className={styles.blogCardDescriptionDiv}>
            <p
              className={styles.blogCardDescription}
              dangerouslySetInnerHTML={{ __html: description }}
            >
              {/* {description.slice(0, 75)}... */}
            </p>
          </div>
          {/* <img className={styles.blogAuthorImage} />
                <h6 className={styles.blogAuthorName}>Ammar Afridi</h6> */}
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
