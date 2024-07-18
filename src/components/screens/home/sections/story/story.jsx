import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";

import React from "react";
import styles from "./story.module.scss";
import { Col, Image, Row } from "react-bootstrap";

const OurStorySection = () => {
  const allStories = [
    {
      year: 2010,
      stories: [
        {
          story: [
            " Vashini goes global with its first coconut shipment to the UK.",
          ],
        },
      ],
    },
    {
      year: 2012,
      stories: [
        {},
        {
          story: [
            "Becomes India's only exporter of mature coconuts to the EU, including the UK and Spain.",
          ],
        },
      ],
    },
    {
      year: 2013,
      stories: [
        {
          story: [
            "Receives Global GAP Certification for safe and sustainable farming practices.",
          ],
        },
      ],
    },
    {
      year: 2016,
      stories: [
        {},
        {
          story: [
            "First coconut farm globally to earn Fair for Life certification for responsible supply chains.",
          ],
        },
      ],
    },
    {
      year: 2020,
      stories: [
        {
          story: [
            "Introduces IQF coconuts to the global market, creating new SKUs with frozen coconuts.",
          ],
        },
      ],
    },
  ];

  return (
    <section className={styles.storySection}>
      <CustomContainer>
        {/* <SectionHeading heading="Who We Are?"  variant={3}/> */}
        <br />
        <h2 data-aos="fade-up" data-aos-delay="100">
          The Virgin Attempt
        </h2>
        <div className={styles.logo} data-aos="fade-down">
          <Image src="vashini_logo.svg" fluid alt="vashini_logo" />
        </div>
        <div className={styles.as}>
          <div className={styles.year2} >
            <p data-aos="fade-up">1996</p>
            <div className={styles.strip} data-aos="fade-up"/>
          </div>
          <br />
        </div>
        <div
          className={`${styles.top}`}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>
            Vashini Agro began as a small group of expert coconut farmers in
            India.
          </p>
        </div>
        <br />
        <div className={styles.stories}>
          <div className={styles.strip} data-aos="fade-up" data-aos-delay="200">
            <div>
              <div>
                <div />
              </div>
            </div>
          </div>
          {allStories.map((as, asi) => {
            return (
              <div key={`as_${asi}`} className={styles.as}>
                <div className={styles.year} data-aos="fade-up">
                  <p>{as.year}</p>
                </div>
                <Row>
                  {as.stories.map((story, si) => {
                    return (
                      <Col key={`st_${si}`} sm={12} md={6}>
                        <div
                          className={`${styles.story} ${
                            si % 2 !== 0 ? styles.right : styles.left
                          } ${!story?.story ? styles.hidden : ""}`}
                          data-aos={si % 2 !== 0 ? "fade-left" : "fade-right"}
                        >
                          {si % 2 !== 0 ? (
                            <div className={styles.node}>
                              <div>
                                <div />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className={styles.cont}>
                            {story.story &&
                              story.story.map((p, pi) => {
                                return (
                                  <div key={`pi_${pi}`}>
                                    <p>{p}</p>
                                  </div>
                                );
                              })}
                            {story.img && (
                              <Image
                                src={`/images/stories/${story.img}`}
                                alt={story.img}
                                fluid
                              />
                            )}
                          </div>
                          {si % 2 === 0 ? (
                            <div className={styles.node}>
                              <div>
                                <div />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            );
          })}
        </div>
      </CustomContainer>
    </section>
  );
};

export default OurStorySection;
