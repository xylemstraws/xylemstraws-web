import React from "react";
import styles from "./contact.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import ContactForm from "./contact_form/contact_form";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import SocialMedia from "@/components/social_media/social_media";
import {
  Envelope,
  EnvelopeAtFill,
  PhoneFill,
  PinMap,
  PinMapFill,
} from "react-bootstrap-icons";

const ContactScreen = () => {
  return (
    <main className={styles.contactScreen}>
      <CustomContainer>
        <SectionHeading heading="Let's Connect to Nature" variant={3}/>
        {/* <SectionHeading head="Contact Us" /> */}
        <div className={styles.box}>
          <div className={styles.info}>
            <h1>
            We are here to help you care for Mother Earth
            </h1>
            <div className={styles.details}>
              <div className={styles.det}>
                <EnvelopeAtFill />
                <p>connect@xylemstraws.com</p>
              </div>
              <div className={styles.det}>
                <PhoneFill />
                <p>+91 99944 50006</p>
              </div>
              <div className={styles.det}>
                <PinMapFill />
                <p>Coimbatore</p>
              </div>
              {/* <Image src="/assets/png/yaja-animals.png" fluid width={300} alt='img' /> */}
            </div>
            <div>
              <h4>Follow Us on</h4>
              <SocialMedia />
            </div>
          </div>
          <ContactForm />
        </div>
      </CustomContainer>
    </main>
  );
};

export default ContactScreen;
