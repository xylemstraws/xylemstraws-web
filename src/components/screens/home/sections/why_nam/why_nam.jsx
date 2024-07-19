import React from "react";
import styles from "./why_nam.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const Card = ({ data }) => {
  const { title, text, img } = data;

  return (
    <Col xs={12} md={6} lg={4}>
      <div className={styles.card} data-aos="fade-left">
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(/assets/images/${img})`,
          }}
        >
          {/* <Image src={`/assets/images/${img}`} alt="img" fluid /> */}
        </div>
        <br />
        <div>
          <h3>{title}</h3>
          <hr />
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
};

const WhyNamSection = () => {
  const cards = [
    {
      id: "c1",
      title: "Non-Toxic Emissions",
      text: "The manufacturing processes release no harmful chemicals or pollutants into the air.",
      img: "zero-emission.jpg",
    },
    {
      id: "c2",
      title: "Sustainable Resources",
      text: "Our ecological straws are made from agricultural produce and by-products.",
      img: "mount.jpg",
    },
    {
      id: "c3",
      title: "Low Carbon Footprint",
      text: "Production generates lower greenhouse gas emissions, reducing the impact on climate change.   ",
      img: "windmill.jpg",
    },
    {
      id: "c4",
      title: "Biodegradability",
      text: "Our straws decompose naturally within months, leaving no lasting environmental impact.",
      img: "compost.jpg",
    },
    {
      id: "c5",
      title: "Ecosystem Preservation",
      text: "Our Straws do not accumulate in oceans and are non-toxic to marine life, preserving ecosystems.",
      img: "coral.jpg",
    },
    {
      id: "c6",
      title: "Soil Health Improvement",
      text: "Our straws do not contribute to microplastic contamination in food, water, or air.",
      img: "crop.jpg",
    },
    // {
    //   id: "c7",
    //   title: "Food Safety",
    //   text: "PHAs do not contribute to microplastic contamination in food, water, or air, ensuring safer consumption.",
    //   img: "water.jpg",
    // },
    // {
    //   id: "c8",
    //   title: "Health Benefits",
    //   text: "PHAs do not release harmful chemicals and are safe for human contact, avoiding health issues such as inflammation and endocrine disruption.",
    //   img: "family.jpg",
    // },
  ];

  return (
    <div className={styles.WhyNamSection} id="why_nam">
      <SectionHeading heading='Advantages of Bio Plastic' variant={3}/>
      <CustomContainer>
        <div className={styles.wrap}>
          <Row>
            {cards.map((c) => (
              <Card key={c.id} data={c} />
            ))}
          </Row>
        </div>
      </CustomContainer>
    </div>
  );
};

export default WhyNamSection;
