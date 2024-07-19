import React from "react";
import styles from "./blogs.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const BlogCard = ({ data }) => {
  const { title, description, href, img, author } = data;
  return (
    <Col xs={12} md={6} lg={4}>
      <Link href={href} target="_blank">
        <div className={styles.BlogCard}>
          <div className={styles.img}>
            <Image src={img} alt="straw" fluid />
          </div>

          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <small>
              Source:{" "}
              <span>
                <cite>{author}</cite>
              </span>
            </small>
          </div>

          <CustomButton>Read More</CustomButton>
        </div>
      </Link>
    </Col>
  );
};

const BlogsScreen = ({ blogs }) => {
  return (
    <div className={styles.BlogsScreen}>
      <SectionHeading heading="Blogs" variant={3} />
      <br />
      <CustomContainer>
        <Row>
          {blogs.map((b) => (
            <BlogCard key={b.id} data={b} />
          ))}
        </Row>
      </CustomContainer>
    </div>
  );
};

export default BlogsScreen;
