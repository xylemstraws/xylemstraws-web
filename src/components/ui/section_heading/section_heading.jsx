import React from "react";
import styles from "./section_heading.module.scss";
import fonts from "@/styles/fonts";

const SectionHeading = ({ heading, variant = 1 }) => {
  return (
    <div className={`${styles.sectionHeading} ${styles[`v${variant}`]}`}>
      <h1 data-aos="fade-in" className={fonts.TitleFont}>{heading}</h1>
    </div>
  );
};

export default SectionHeading;
