import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import { VCard } from "../infinite_scroll/infinite_scroll";
import styles from './multi_caorsal.module.scss'

const MultiCarousal = ({ cards }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div
      style={{
        position: "relative",
      }}
      className={styles.Carousel}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        // autoPlay
        // autoPlaySpeed={4000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass="dots"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={50}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside
        responsive={responsive}
        rewind={false}
        // rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        
      >
        {cards.map((c) => {
          return <VCard key={c.id} data={c} />;
        })}
      </Carousel>
    </div>
  );
};

export default MultiCarousal;
