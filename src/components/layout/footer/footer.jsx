import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import PAGES from "@/constants/pages";
import SocialMedia from "@/components/social_media/social_media";

export const DownloadSection = ({ isAbout }) => {
  return (
    <Col xs={12} md={6} lg={3}>
      <div className={`${styles.sec} ${styles.sec1}`}>
        {/* <h4>Download Raido</h4> */}
        {/* <DownloadButtons isHeader /> */}
        {isAbout && <br />}
        <h4>Follow Us On</h4>
        <SocialMedia variant={isAbout && 2} />
      </div>
    </Col>
  );
};

const Footer = () => {
  const PRODUCTS = [
    {
      id: "MANGO",
      name: "Service 1",
      mascot: "cheetah",
    },
    {
      id: "LYCHEE",
      name: "Service 2",
      mascot: "wolf",
    },
    {
      id: "STRAWBERRY",
      name: "Service 3",
      mascot: "tiger",
    },
  ];

  return (
    <footer className={styles.footer}>
      <CustomContainer>
        <Row>
          <Col xs={12} md={6} lg={5}>
            <div className={`${styles.sec} ${styles.sec1}`}>
              {/* <Image src="/logo.png" alt="logo" width={50} /> */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                ad quos ratione asperiores qui molestiae itaque amet et
                reiciendis magni vel incidunt dolor libero, inventore,
                voluptatibus deserunt doloribus optio sit?
              </p>
            </div>
          </Col>
          <Col xs={6} md={6} lg={2}>
            <div className={`${styles.sec} ${styles.sec2}`}>
              <h4>Links</h4>
              {PAGES.map((p) => (
                <p key={p.name} className={styles.links}>
                  <Link href={p.href}>{p.name}</Link>
                </p>
              ))}
              {/* <p className={styles.links}>
                <Link href="/admin">Admin</Link>
              </p> */}
            </div>
          </Col>
          <Col xs={6} md={6} lg={2}>
            <div className={`${styles.sec} ${styles.sec2}`}>
              <h4>Services</h4>
              {PRODUCTS.map((p, i) => (
                <p key={p.name} className={styles.links}>
                  <Link href={`/products?f=${i}`}>{p.name}</Link>
                </p>
              ))}
            </div>
          </Col>

          <DownloadSection />
        </Row>
        <hr />
      </CustomContainer>
    </footer>
  );
};

export default Footer;
