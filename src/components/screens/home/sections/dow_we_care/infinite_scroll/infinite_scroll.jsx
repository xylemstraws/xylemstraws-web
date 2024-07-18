import React, { useEffect, useRef, useState } from "react";
import styles from "./infinite_scroll.module.scss";
import { Image } from "react-bootstrap";
// import Image from "next/image";

export const VCard = ({ data }) => {
  const { head, img, text } = data;

  return (
    <div className={styles.VCard} data-aos="fade-left">
      <div className={styles.img}>
        <Image src={`/assets/images/${img}`} alt="temp" />
      </div>
      <p>{head}</p>
      <small>{text}</small>
    </div>
  );
};

const InfiniteScroll = ({ cards }) => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 20;

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft =
          scrollContainer.scrollLeft - scrollContainer.scrollWidth / 2;
      }
    };

    const autoScroll = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += scrollSpeed;
      }
    };

    const intervalId = setInterval(autoScroll, 40); // Adjust the interval for desired speed

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [isHovered, scrollSpeed]);
  return (
    <div
      className={styles["scroll-container"]}
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      //   onScroll={handleScroll}
    >
      <div className={styles["scroll-content"]}>
        {cards.map((card, index) => (
          <VCard key={index} data={card} />
        ))}
        {cards.map((card, index) => (
          <VCard key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
