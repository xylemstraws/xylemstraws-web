import React from "react";
import styles from "./dow_we_care.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import Scroller from "./scroller/scoller";
import Link from "next/link";
import { ChevronDown } from "react-bootstrap-icons";
import ScrollToIdArrow from "@/components/scroll_to_id_arrow/scorll_to_id_arrow";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "./infinite_scroll/infinite_scroll";
import MultiCarousal from "./multi_carousal/multi_carousal";

const DoWeCareSection = () => {
  const vCards = [
    {
      id: "1",
      head: "Toxic Emissions",
      img: "emission.jpg",
      text: "Plastic manufacturing releases harmful chemicals and pollutants into the air.",
    },
    {
      id: "2",
      head: "Resource Depletion",
      img: "rig1.jpg",
      text: "Plastics are made from non-renewable petroleum and natural gas resources.",
    },
    {
      id: "3",
      head: "Carbon Footprint",
      img: "climate.jpeg",
      text: "Production generates greenhouse gases, contributing significantly to climate change.",
    },
    {
      id: "4",
      head: "Environmental Impact",
      img: "plastic.webp",
      text: "Plastics decompose over hundreds of years, persisting in the environment.",
    },
    {
      id: "5",
      head: "Ecosystem Disruption",
      img: "plastic_in_sea.jpg",
      text: "Plastics accumulate in oceans, disrupting ecosystems and harming marine life.",
    },
    {
      id: "6",
      head: "Soil Contamination",
      img: "dry_land.jpg",
      text: "Plastics harm soil health, reduce crop yields, and damage soil organisms.",
    },
    {
      id: "7",
      head: " Contamination of Food",
      img: "microplastic.jpg",
      text: "Microplastics are found in salt, drinking water, and the air we breathe.",
    },
    {
      id: "8",
      head: "Health Effects",
      img: "inflamation.jpg",
      text: "Health impacts include inflammation, cell damage, and endocrine system disruption.",
    },
  ];

  return (
    <div id="do_we_care" className={styles.DoWeCareSection}>
      <div className={styles.bg} />

      <CustomContainer>
        <SectionHeading heading="Do We Really Care?" />
        {/* <Scroller /> */}

        {/* <InfiniteScroll cards={vCards} /> */}

        <MultiCarousal cards={vCards} />

        <ScrollToIdArrow id={"we_do_care"} text={"We Do Really Care!"} />
      </CustomContainer>
    </div>
  );
};

export default DoWeCareSection;
