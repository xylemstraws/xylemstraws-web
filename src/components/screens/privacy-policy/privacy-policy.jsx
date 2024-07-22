import React from "react";
import styles from "./privacy-policy.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";

const PrivacyPolicyScreen = () => {
  return (
    <div className={styles.TermsScreen}>
      <SectionHeading heading="Privacy Policy" variant={3} />
      <br />
      <CustomContainer>
        <div className={styles.cont}>
          <h2>Introduction</h2>
          <p>
            Welcome to Xylem Straws! Your privacy is important to us. This
            Privacy Policy explains how we collect, use, and protect your
            information when you visit our website, XylemStraws.com.
          </p>
          <h2>Information We Collect</h2>
          <p>We collect various types of information, including:</p>
          <ul>
            <li>
              Personal Information: Name, email address, phone number, and other
              contact details you provide when you contact us or subscribe to
              our newsletter.
            </li>
            <li>
              Non-Personal Information: Browser type, IP address, and other
              technical details collected through cookies and similar
              technologies.
            </li>
          </ul>
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Improve our website, products, and services.</li>
            <li>
              Send you updates, promotional materials, and other information you
              may find useful.
            </li>
          </ul>
          <h2>Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal information. We may share your
            information with:
          </p>
          <ul>
            <li>
              Service Providers: Third parties that help us operate our website
              and provide services to you.
            </li>
            <li>
              Legal Requirements: When required by law or to protect our rights.
            </li>
          </ul>
          <h2>Cookies</h2>
          <p>
            Our website uses cookies to enhance your experience. You can control
            cookies through your browser settings.
          </p>
          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, use, or disclosure.
          </p>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at connect@xylemstraws.com.
          </p>
        </div>
        <br />
        <div className={styles.btn}>
          <CustomButton href='/contact'>Contact Xylem Straws</CustomButton>
        </div>
      </CustomContainer>
    </div>
  );
};

export default PrivacyPolicyScreen;
