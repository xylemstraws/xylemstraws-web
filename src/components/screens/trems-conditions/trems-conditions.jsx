import React from "react";
import styles from "./trems-conditions.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";

const TermsScreen = () => {
  return (
    <div className={styles.TermsScreen}>
      <SectionHeading heading="Terms & Conditions" variant={3} />
      <br />
      <CustomContainer>
        <div className={styles.cont}>
          <h2>Introduction</h2>
          <p>
            Welcome to Xylem Straws! By using our website, XylemStraws.com, you
            agree to these Terms and Conditions.
          </p>
          <h2>Use of Our Website</h2>
          <p>
            You agree to use our website for lawful purposes and in accordance
            with these Terms and Conditions. You must not:
          </p>
          <ul>
            <li>
              Use our website in any way that violates any applicable laws or
              regulations.
            </li>

            <li>
              Engage in any conduct that restricts or inhibits anyone’s use or
              enjoyment of the website.
            </li>
          </ul>
          <h2>Intellectual Property</h2>
          <p>
            All content on our website, including text, images, and logos, is
            the property of Xylem Straws and is protected by copyright laws. You
            may not reproduce, distribute, or use any content without our
            permission.
          </p>
          <h2>Products and Services</h2>
          <p>
            We strive to ensure the accuracy of information on our website but
            do not warrant that any product descriptions or other content are
            error-free. We reserve the right to modify or discontinue products
            and services without notice.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            Xylem Straws is not liable for any damages arising from the use or
            inability to use our website or products, including but not limited
            to direct, indirect, incidental, punitive, and consequential
            damages.
          </p>
          <h2>Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of Tamilnadu,
            India. Any disputes arising from these terms will be resolved in the
            courts of Tamilnadu, India.
          </p>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms and Conditions from time to time. Any
            changes will be posted on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at connect@xylemstraws.com.
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

export default TermsScreen;
