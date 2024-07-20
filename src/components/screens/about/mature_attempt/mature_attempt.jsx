import React from "react";
import styles from "./mature_attempt.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const MatureAttempt = () => {
  return (
    <div
      className={styles.MatureAttempt}
      
    >
      <h2
        style={{
          textAlign: "center",
        }}
        data-aos="fade-up"
      >
        The Mature Attempt
      </h2>
      <br />
      <Row data-aos="fade-up">
        <Col xs={12} lg={4}>
          <div className={styles.logo}>
            <Image src="/gviro_logo.png" alt="farm" fluid />
            {/* <div>Since 1970</div> */}
          </div>
          <br />
        </Col>
        <Col xs={12} lg={8}>
          <div className={styles.left}>
            <h2>The GreenViro</h2>
            <p>
              GreenViro began with a mission to give back to Mother Earth by
              recycling farm waste into efficient charcoal. Our innovative
              process produces charcoal that&apos;s three times more
              energy-efficient and emits less CO2. This approach helps farmers
              manage waste and offers the public a superior, eco-friendly
              barbecue experience.
            </p>
          </div>
        </Col>
      </Row>

      <div className={styles.char}>
        <div className={styles.img1}>
          <Image src="/assets/images/charcoal1.jpeg" alt="charcoal" fluid />
        </div>
        <div className={styles.img1}>
          <Image src="/assets/images/charcoal2.jpeg" alt="charcoal" fluid />
        </div>
        <div className={styles.img1}>
          <Image src="/assets/images/charcoal3.jpeg" alt="charcoal" fluid />
        </div>
      </div>

      <br />

      <h2
        style={{
          textAlign: "center",
        }}
        data-aos="fade-up"
      >
        Gviro&apos;s Certifications
      </h2>

      <br />

      <div className={styles.char}>
        <div className={styles.img2}  data-aos="fade-left">
          <Image
            src="/assets/certificates/certificate1.jpeg"
            alt="charcoal"
            fluid
          />
          <p>
            <br />
            <strong>Tamilnadu State Startup Winner</strong>
            <br />
            <span>2022 in the Wealth out of Waste category</span>
          </p>
        </div>
        <div className={styles.img2}  data-aos="fade-right">
          <Image
            src="/assets/certificates/certificate2.jpeg"
            alt="charcoal"
            fluid
          />
          <p>
            <br />
            <strong>National Startup Champion</strong>
            <br />
            <span>2023 in the Sustainability category</span>
          </p>
        </div>
      </div>

      <br />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <CustomButton href={"https://www.gviro.com/"} target="_blank">
          Know More About GreenViro
        </CustomButton>
      </div>
      <br />
    </div>
  );
};

export default MatureAttempt;
