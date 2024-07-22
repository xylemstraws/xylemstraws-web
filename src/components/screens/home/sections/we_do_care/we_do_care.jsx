import React from "react";
import styles from "./we_do_care.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import fonts from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";
import ScrollToIdArrow from "@/components/scroll_to_id_arrow/scorll_to_id_arrow";

const WeDoCareSection = () => {
  return (
    <div className={styles.WeDoCareSection} id="we_do_care">
      <div className={styles.overlay} />
      <div className={styles.cont}>
        <CustomContainer>
          <SectionHeading
            heading={
              <span>
                A <span className={styles.sp}>Vision</span> for a Cleaner,{" "}
                <span className={styles.sp2}>Greener</span> Planet
              </span>
            }
            variant={2}
          />
          <hr />
          <div className={styles.top}>
            <Row>
              <Col xs={12} lg={5}>
                <div className={styles.topImg} data-aos="fade-right">
                  <Image
                    src="/assets/images/granules2.jpg"
                    fluid
                    alt="eco-friendly-plastic"
                  />
                </div>
              </Col>
              <Col xs={12} lg={7}>
                <div className={styles.topText}>
                  <div data-aos="fade-left">
                    <h1 className={fonts.HeadFont}>
                      <span>Nature Made Plastics</span>
                      {/* <span> (PHA)</span> */}
                    </h1>
                    <p>
                      We, a group of young environmental enthusiasts, have put
                      in hard efforts over months to create sustainable
                      alternatives to traditional plastics. We believe in
                      harnessing the power of nature to develop products that
                      meet high-performance standards while reducing our
                      environmental footprint.
                    </p>
                    <br />
                    <p>
                      Our extensive R&D efforts utilize agricultural by-products
                      such as palm seed, soybean, sugarcane, and other renewable
                      resources. This ensures our straws are strong, flexible,
                      biodegradable, and compostable. Our approach significantly
                      mitigates the harmful effects of plastic pollution and
                      supports a circular economy.
                    </p>
                    {/* <CustomButton>Know More</CustomButton>  */}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </CustomContainer>
      </div>
      <ScrollToIdArrow text="Why Bio-Plastic?" id="why_nam" />
    </div>
  );
};

export default WeDoCareSection;
