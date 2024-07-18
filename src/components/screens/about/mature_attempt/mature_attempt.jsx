import React from "react";
import styles from "./mature_attempt.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const MatureAttempt = () => {
  return (
    <div className={styles.MatureAttempt}>
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
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.img1}>
              <Image src="/assets/images/charcoal.jpg" alt="charcoal" fluid />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.img2}>
              <Image src="/assets/images/charcoal2.jpg" alt="charcoal" fluid />
            </div>
          </Col>
        </Row>
      </div>

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
