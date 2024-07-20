import BlogsScreen from "@/components/screens/blogs/blogs";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: "123",
      title:
        "The Ultimate Guide to Bioplastic Straws: A Sustainable Solution with Xylem Straws",
      description:
        "As we become increasingly aware of the environmental impacts of plastic pollution, finding sustainable alternatives has never been more crucial. One of the most...",
      href: "/blogs/The_Ultimate_Guide_to_Bioplastic_Straws_A_Sustainable_Solution_with_Xylem_Straws",
      img: "/assets/images/straw-bent.jpg",
      author: "xylemstraws.com",
    },
    {
      id: "dvfes",
      title: "Plastic or paper? The truth about drinking straws",
      description:
        "The backlash against single-use plastics has seen a growing market for paper, metal, glass and plant-based straws. But is the choice between them really a simple one?...",
      href: "https://www.bbc.com/future/article/20231103-plastic-or-paper-the-truth-about-drinking-straws",
      img: "https://ichef.bbci.co.uk/images/ic/1024xn/p0gqm0pb.jpg.webp",
      author: "bbc.com",
    },
    {
      id: "aockoadk",
      title: "A brief history of how plastic straws took over the world",
      description:
        "At the beginning of July 2018, Seattle became the largest U.S. city to ban plastic straws. Starbucks plans to phase out plastic straws by 2020. McDonald’s recently announced it will ban plastic...",
      href: "https://www.nationalgeographic.com/environment/article/news-plastic-drinking-straw-history-ban",
      img: "https://i.natgeofe.com/n/e96dfbe8-d136-4929-a49d-9559e4c09e74/01-history-of-straws-gettyimages-961156978.jpg?w=1436&h=958",
      author: "nationalgeographic.com",
    },

    {
      id: "akamekf",
      title: "More than 170 trillion plastic particles found in the ocean",
      description:
        "The world's oceans are polluted by a “plastic smog” made up of an estimated 171 trillion plastic particles that if gathered would weigh around 2.3 million tons, according to a new study. A team of international...",
      href: "https://edition.cnn.com/2023/03/08/world/ocean-plastic-pollution-climate-intl/index.html",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/230306124229-03-pacific-garbage-plastic.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
      author: "edition.cnn.com",
    },

    {
      id: "qowdomw",
      title: "A small straw's big environmental impact - By worldwildlife.org",
      description:
        "Single-use plastic items such as straws—as well as stirrers, bags, and cups—are convenient, but convenience can come at an environmental cost if they aren’t disposed of properly or recycled. Many marine...",
      href: "https://www.worldwildlife.org/magazine/issues/summer-2018/articles/a-small-straw-s-big-environmental-impact",
      img: "https://files.worldwildlife.org/wwfcmsprod/images/takeaway_straws_summer2018.jpg/story_full_width/4cauhi21n9_takeaway_straws_summer2018.jpg",
      author: "worldwildlife.org",
    },
    {
      id: "aocmal",
      title:
        "stronger-policies-to-end-plastic-pollution-on-national-drinking-straw-day",
      description:
        "On National Drinking Straw Day, I’m calling for stronger policies to end plastic pollution in National Parks—and beyond. Near the close of last year’s legislative session, a late night amendment in...",
      href: "https://www.plasticpollutioncoalition.org/blog/2024/1/3/stronger-policies-to-end-plastic-pollution-on-national-drinking-straw-day",
      img: "https://www.plasticpollutioncoalition.org/wp-content/uploads//plastic-lid-and-straw-on-forest-floor-licensed-adobe-stock.jpeg",
      author: "plasticpollutioncoalition.org",
    },
  ];

  return <BlogsScreen blogs={blogs} />;
};

export default BlogsPage;
