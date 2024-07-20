import React from "react";
import styles from "./about.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import OurStorySection from "../home/sections/story/story";
// import AboutHead from "../products/head/head";
// import { Col, Image, Row } from "react-bootstrap";
import VashiniCustomers from "./customers/customers";
import Certificates from "./certificates/cetififcates";
import MatureAttempt from "./mature_attempt/mature_attempt";
import ProfessionalAttempt from "./professional_attempt/professional_attempt";

const AboutScreen = () => {
  return (
    <div
      className={styles.AboutScreen}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <SectionHeading heading="Who We Are?" variant={3} />
      <CustomContainer>
        {/* <br />
        <br />
        <AboutHead /> */}

        <OurStorySection />
        <br />
        <br />
        <VashiniCustomers />
        <br />
        <hr />
        <br />
        <Certificates />
        <br />
        <MatureAttempt />
        <br />
        <ProfessionalAttempt />
        <br />
        <br />
      </CustomContainer>
    </div>
  );
};

export default AboutScreen;
