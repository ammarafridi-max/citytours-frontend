import { useState } from "react";
import styles from "./BlogCard.module.css";
import img from "./travel.png";
import { Link } from "react-router-dom";

function BlogCard({ heading, description, pill }) {
  const blog = {
    title: "How to build your dream holiday package?",
    description:
      "It doesn't have to be hard. Just stick to basics and you'll create your dream package. In this guide, you'll learn how to create your dream package.",
    category: "Travel",
    dateWritten: "March 13, 2023",
  };

  return (
    <div className={styles.blogCardDiv}>
      <Link to="/blog/detail">
        <div className={styles.blogCardImgDiv}>
          <img src={img} className={styles.blogCardImg} />
        </div>
        <div className={styles.blogCardContent}>
          <div className={styles.blogCardDate}>March 13, 2023</div>
          <div className={styles.blogCardPill}>Travel</div>
          <h4 className={styles.blogCardHeading}>{blog.title}</h4>
          <div className={styles.blogCardDescriptionDiv}>
            <p className={styles.blogCardDescription}>
              {blog.description.substring(0, 80)}...
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
