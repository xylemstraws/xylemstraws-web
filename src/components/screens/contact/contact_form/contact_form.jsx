import CustomInput from "@/components/ui/custom_input/custom_input";
import React, { useState } from "react";
import styles from "./contact_form.module.scss";
import CustomTextArea from "@/components/ui/custome_textarea/custome_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Toast } from "react-bootstrap";
import { Check2Circle, CheckCircle, XCircle } from "react-bootstrap-icons";
import axios from "axios";
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
  const [isLoading,setIsLoading] = useState(false)

  return (
    <>
      <div className={`${styles.toast} ${showToast ? styles.show : ""}`}>
        <Toast show={showToast} animation={false}>
          <Toast.Body>{showToast}</Toast.Body>
        </Toast>
      </div>
      <form
        className={styles.contactForm}
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true)
          try {
            // throw new Error();
            await axios.post("https://formspree.io/f/meojeaee", {
              email: values.email,
              message: JSON.stringify(values),
            });
            //  await axios.post("https://formspree.io/f/xyzgkenr", {
            //   email: values.email,
            //   message: JSON.stringify(values),
            // });

            setShowToast(
              <p>
                <CheckCircle /> &nbsp;Thank you for reaching out! Together,
                let&apos;s make a Greener Future
              </p>
            );
            // setValues(initialValues);
            setTimeout(() => {
              setShowToast(null);
            }, 5990);
          } catch (err) {
            console.log(err);

            setShowToast(
              <p>
                <XCircle /> &nbsp;Something went wrong
              </p>
            );
            setTimeout(() => {
              setShowToast(null);
            }, 5990);
          }
          setIsLoading(false)

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
          <CustomButton type="submit" isLoading={isLoading}>Submit</CustomButton>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
