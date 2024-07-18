import React from "react";
import styles from "./scroller.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const VCard = ({ data }) => {
  const { head, img, text } = data;

  return (
    <div className={styles.VCard} data-aos="fade-up">
      <Image src={`/assets/images/${img}`} alt="temp" />
      <p>{head}</p>
      <small>{text}</small>
    </div>
  );
};

const Scroller = () => {
  const vCards = [
    {
      id: "1",
      head: "Toxic Emissions",
      img: "emission.jpg",
      text: "Plastic manufacturing processes release a range of harmful chemicals and pollutants into the air, contributing to air pollution, environmental degradation, and health issues for nearby communities. These emissions include volatile organic compounds, greenhouse gases, and particulate matter.",
    },
    {
      id: "2",
      head: "Resource Depletion",
      img: "rig1.jpg",
      text: "Plastics are primarily manufactured using petroleum and natural gas, both of which are finite, non-renewable resources that are extracted from the earth. Their production and use contribute to environmental degradation and depletion of these critical resources.",
    },
    {
      id: "3",
      head: "Carbon Footprint",
      img: "climate.jpeg",
      text: "The production process generates a substantial amount of greenhouse gas emissions, significantly contributing to the worsening of climate change by increasing the concentration of harmful gases in the atmosphere and exacerbating global warming and its associated environmental impacts.",
    },
    {
      id: "4",
      head: "Environmental Impact",
      img: "plastic.webp",
      text: "Plastics can persist in the environment for centuries before breaking down, posing significant long-term pollution problems. Their slow decomposition rate contributes to environmental degradation, impacting ecosystems and wildlife, and raising concerns about sustainability and waste management.",
    },
    {
      id: "5",
      head: "Ecosystem Disruption",
      img: "plastic_in_sea.jpg",
      text: "Plastics accumulate in our oceans over time, causing significant disruptions to marine ecosystems. They can harm marine life through ingestion, entanglement, and habitat destruction, leading to severe ecological imbalances and endangering the health of oceanic environments.",
    },
    {
      id: "6",
      head: "Soil Contamination",
      img: "dry_land.jpg",
      text: "Plastics have a detrimental impact on soil health by introducing harmful chemicals, disrupting the natural balance of soil ecosystems, reducing crop yields, and adversely affecting soil organisms such as bacteria, fungi, and insects crucial for nutrient cycling and plant growth.",
    },
    {
      id: "7",
      head: " Contamination of Food",
      img: "microplastic.jpg",
      text: "Microplastics have infiltrated various aspects of our environment, contaminating salt, drinking water, and even the air we breathe. This widespread presence results in significant human exposure, raising concerns about potential health impacts and long-term effects on wellbeing.",
    },
    {
      id: "8",
      head: "Health Effects",
      img: "inflamation.jpg",
      text: "Potential health impacts from microplastics include inflammation, which can lead to chronic conditions, cellular damage that may cause long-term health issues, and disruption of endocrine systems, potentially affecting hormonal balance and leading to various health complications.",
    },
  ];

  return (
    <div className={styles.CategorySection}>
      <CustomContainer>
        <div className={styles.scroller}>
          <div className={styles.scrollHolder}>
            {vCards.map((c) => (
              <VCard key={c.id} data={c} />
            ))}
            {vCards.map((c) => (
              <VCard key={c.id} data={c} />
            ))}
            {vCards.map((c) => (
              <VCard key={c.id} data={c} />
            ))}
            {vCards.map((c) => (
              <VCard key={c.id} data={c} />
            ))}
            {vCards.map((c) => (
              <VCard key={c.id} data={c} />
            ))}
            {vCards.map((c) => (
              <VCard key={c.id} data={c} />
            ))}
            {vCards.map((c) => (
              <VCard key={c.id} data={c} />
            ))}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Scroller;
