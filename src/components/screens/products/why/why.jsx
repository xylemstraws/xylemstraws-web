import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import styles from "./why.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";

const Card = ({ data,idx }) => {
  const { head, text, img, hasPadding } = data;

  return (
    <Col xs={12} md={6} lg={3}>
      <div className={`${styles.box} ${styles.left}`} data-aos={!(idx % 2) ? 'fade-left' : 'fade-right'}>
        <div>
          <Image
            src={`/assets/svg/${img}`}
            alt="bio"
            fluid
            width={200}
            style={{
              padding: hasPadding ? "20px" : "0",
            }}
          />
        </div>
        <div className={styles.text}>
          <h3>{head}</h3>
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
};

const WhyXylem = () => {
  const cards = [
    {
      head: "Biodegradability",
      text: "Our Straws are 100% biodegradable in natural soil and marine environments, decomposing within 30 to 45 days in marine settings. Upon degradation, they break down into water, carbon dioxide, and biomass.",
      img: "bio.svg",
    },
    {
      head: "Food Safety",
      text: "Our Straws are non-toxic and safe for use in food-contact applications, meeting stringent regulatory standards for health and safety.",
      img: "food-safety.svg",
      hasPadding: true,
    },
    {
      head: "Renewable Resources",
      text: "Our Straws are produced from renewable resources, reducing dependency on fossil fuels.",
      img: "renewable.svg",
    },
    {
      head: "Low Carbon Footprint",
      text: "The production of plant based raw material for the straw typically has a lower carbon footprint compared to traditional petroleum-based plastics.",
      img: "carbon.svg",
      hasPadding: true,
    },
  ];

  const cards2 = [
    {
      head:''
    }
  ]

  return (
    <div className={styles.WhyXylem}>
      <SectionHeading heading="Why Xylem Straws?" variant={1} />
      <CustomContainer>
        <br />
        <h2 data-aos='fade-up'>Sustainability</h2>
        <br />
        <Row>
          {cards.map((c,i) => {
            return <Card key={c.text} data={c} idx={i}/>;
          })}
        </Row>
        {/* <br />
        <h2>Structure and Quality</h2>
        <br />
        <Row>
          {cards.map((c) => {
            return <Card key={c.text} data={c} />;
          })}
        </Row> */}
      </CustomContainer>
    </div>
  );
};

export default WhyXylem;
