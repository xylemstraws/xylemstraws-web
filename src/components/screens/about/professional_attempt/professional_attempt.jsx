import React from "react";
import styles from "./professional_attempt.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";

const ProfessionalAttempt = () => {
  return (
    <div className={styles.ProfessionalAttempt} data-aos="fade-up">
      <h2
        style={{
          textAlign: "center",
        }}
      >
        A Professional Attempt
      </h2>
      <br />
      <p>
        After a thorough and dedicated year-long R&D, we are excited to
        introduce our plant-based Straws. Our Straws are not only aesthetically
        pleasing and highly convenient but also exceptionally strong. The key
        advantage is that they are 100% soil and marine-friendly.
      </p>
      <br />
      <p>
        Our raw material is derived entirely from agricultural by-products and
        decomposes naturally. We firmly believe that caring for Mother Nature
        brings us health, wealth, and prosperity.
      </p>
      <br />
      <br />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <CustomButton variant={2} href='/products'>Explore Our Range of Products</CustomButton>
      </div>
    </div>
  );
};

export default ProfessionalAttempt;
