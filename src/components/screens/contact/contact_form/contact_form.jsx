import CustomInput from "@/components/ui/custom_input/custom_input";
import React, { useState } from "react";
import styles from "./contact_form.module.scss";
import CustomTextArea from "@/components/ui/custome_textarea/custome_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Toast } from "react-bootstrap";
import { Check2Circle, CheckCircle } from "react-bootstrap-icons";
// import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";

const ContactForm = () => {
  const [showToast, setShowToast] = useState(null);

  return (
    <>
      <div className={styles.toast}>
        <Toast
          show={showToast}
          onClose={() => {
            setShowToast(null);
          }}
          autohide
          delay={5000}
        >
          <Toast.Body>{showToast}</Toast.Body>
        </Toast>
      </div>
      <form
        className={styles.contactForm}
        onSubmit={(e) => {
          e.preventDefault();
          setShowToast(
            <p>
              <CheckCircle /> &nbsp;Thank you for reaching out! Together,
              let&apos;s make a Greener Future
            </p>
          );
        }}
      >
        <div className={styles.tri} />

        <h1>Say Us a Hello!</h1>
        <p>Let&apos;s discuss something Great.</p>
        <div className={styles.inps}>
          <CustomInput placeHolder="Full Name*" required />
          <CustomInput placeHolder="Email*" required type="email" />
          <CustomInput placeHolder="Mobile Number*" required type="tel" />
          <CustomTextArea placeholder="Message*" rows={3} required />
          <CustomButton type="submit">Submit</CustomButton>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
