import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import PAGES from "@/constants/pages";
import Link from "next/link";
import { Dot, EnvelopeAt, Phone } from "react-bootstrap-icons";
import SocialMedia from "@/components/social_media/social_media";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Image src="/logo/logo_h.png" alt="logo" fluid />
            <br />
            <br />
          </div>
          <div className={styles.pages}>
            {PAGES.map((p, i) => (
              <p key={p.name} className={styles.links}>
                <Link href={p.href}>
                  {p.name}
                  {i !== PAGES.length - 1 && <span>|</span>}
                </Link>
              </p>
            ))}
          </div>
          <div className={styles.text}>
            <p>
              Choose Xylem Straws for a greener future. Our eco-friendly,
              compostable straws are crafted from 100% plant-based materials,
              ensuring a sustainable choice for both you and the planet.
              Together, let&apos;s make our Mother Nature Happy.
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div>
                <EnvelopeAt /> <p>connect@xylemstraws.com</p>
              </div>
              <div>
                <Phone /> <p>+91 99944 50006</p>
              </div>
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.tc}>
          <Link href="/terms-conditions">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
