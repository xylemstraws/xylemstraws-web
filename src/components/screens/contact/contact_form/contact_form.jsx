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

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    message: "",
  };

  const [values, setValues] = useState(initialValues);

  return (
    <>
      <div className={`${styles.toast} ${showToast ? styles.show : ""}`}>
        <Toast show={showToast} animation={false}>
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
          setValues(initialValues);
          setTimeout(() => {
            setShowToast(null);
          }, 5990);
        }}
      >
        <div className={styles.tri} />

        <h1>Say Us a Hello!</h1>
        <p>Let&apos;s discuss something Great.</p>
        <div className={styles.inps}>
          <CustomInput
            placeHolder="Full Name*"
            required
            value={values.name}
            onChange={(e, v) => {
              console.log(v);
              setValues((prev) => ({ ...prev, name: v }));
            }}
          />
          <CustomInput
            placeHolder="Email*"
            required
            type="email"
            value={values.email}
            onChange={(e, v) => {
              setValues((prev) => ({ ...prev, email: v }));
            }}
          />
          <CustomInput
            placeHolder="Mobile Number*"
            required
            type="tel"
            value={values.mobile}
            onChange={(e, v) => {
              setValues((prev) => ({ ...prev, mobile: v }));
            }}
          />
          <CustomTextArea
            placeholder="Message*"
            rows={3}
            required
            value={values.message}
            onChange={(e, v) => {
              setValues((prev) => ({ ...prev, message: v }));
            }}
          />
          <CustomButton type="submit">Submit</CustomButton>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
