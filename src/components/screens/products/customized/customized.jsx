import React from "react";
import styles from "./customized.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const Customized = () => {
  return (
    <div className={styles.Customized}>
      <CustomContainer>
        <SectionHeading heading="Customized For You" variant={3} />
        <br />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2>Versatile Shapes</h2>
          <p>
            Organic straws can be manufactured in any shape, including straight
            and bendable designs.
          </p>
        </div>
        <br />
        <br />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2>Customizable Dimensions</h2>
          <p>
            Length, diameter, and wall thickness can be customized to meet
            client specifications.
          </p>
        </div>
        <br />
        <br />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2>Colour Options</h2>
          <p>Additional color options are available.</p>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Customized;
