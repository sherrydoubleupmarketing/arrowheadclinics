"use client";
import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Spinner from "./Spinner";
import { useTranslations } from "next-intl";
import ReCAPTCHA from "react-google-recaptcha";

const About = () => {
  const t = useTranslations("About");
  const recaptchaRef = useRef<any>(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const contactSchema = Yup.object().shape({
    fullName: Yup.string().required(`${t("NameReq")}`),
    phoneNumber: Yup.string().required(`${t("PhoneReq")}`),
    email: Yup.string()
      .email("Invalid email")
      .required(`${t("EmailReq")}`),
    caseDetails: Yup.string().required(`${t("CaseReq")}`),
    honeyPot: Yup.string(),
    recaptcha: Yup.string(),
  });

  const initialValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    caseDetails: "",
    honeyPot: "",
    recaptcha: "",
  };

  interface FormValues {
    fullName: string;
    phoneNumber: string;
    email: string;
    caseDetails: string;
    honeyPot: string;
    recaptcha: string;
  }

  interface FormErrorProps {
    name: keyof FormValues;
  }

  const FormError: React.FC<FormErrorProps> = ({ name }) => {
    const { errors, touched } = useFormikContext<FormValues>();
    const showError = errors[name] && touched[name];
    return (
      <div
        className={`h-6 text-primary-red text-sm font-light work-san-light ${
          showError ? "visible" : "invisible"
        }`}
      >
        {showError ? errors[name] : ""}
      </div>
    );
  };

  return (
    <div
      id="about-us"
      className="w-[90%] m-auto flex flex-col md:flex-row py-12"
    >
      <div className="w-full md:w-[50%] flex flex-col gap-6">
        <div className="w-56 text-ellipsis overflow-hidden h-12 bg-primary-red flex gap-4 items-center justify-center">
          <span className="w-[50%] border-t-0.5 border-white"></span>
          <p className="text-white text-md work-sans-regular">{t("AboutUs")}</p>
        </div>
        <h2 className="font-normal text-2xl sm:text-4xl md:text-5xl w-[90%] leading-normal text-primary-red tracking-wide work-sans-regular">
          {t("HighlyQualified")}
        </h2>
        <p className="font-light text-md w-[90%] work-sans-regular leading-relaxed">
          {t("Expertise")}
        </p>

        <p className="font-light text-md work-sans-bold">{t("WilsonPC")}</p>
      </div>
      <div className="w-full md:w-[50%] flex flex-col mt-12 md:-mt-48">
        <div className="bg-primary-red w-full md:w-[90%] flex flex-col gap-3 items-center justify-center py-6">
          <h2 className="sm:text-3xl text-2xl md:text-4xl text-white font-bold work-sans-bold">
            {t("Request")}
          </h2>
          <p className="text-white text-center font-semibold text-md md:text-xl w-[70%] work-sans-regular">
            {t("GetFree")}
          </p>
        </div>
        <div className="bg-black h-full w-full md:w-[90%] flex flex-col gap-7 py-12 md:cardshadow">
          <div className="flex flex-col w-full sm:w-[90%] m-auto px-10">
            <Formik
              initialValues={initialValues}
              validationSchema={contactSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={async (values: any, actions: any) => {
                try {
                  const body = {
                    name: values.fullName,
                    email: values.email,
                    phone: values.phoneNumber,
                    message: values.caseDetails,
                    type: values.honeyPot.length > 0 ? "bot" : "human",
                  };
                  const res = await axios.post("/api", body);
                  actions.resetForm();
                  recaptchaRef.current.reset();
                  setRecaptchaValue(null);
                } catch (error) {}
              }}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <Form className="w-full px-5">
                  <div className="relative z-0 group w-[100%] honeypot">
                    <Field
                      type="text"
                      name="honeyPot"
                      className="hidden"
                      placeholder="Leave this field empty"
                    />
                  </div>
                  {/* Full Name Field */}
                  <div className="relative z-0 group w-[100%]">
                    <Field
                      type="text"
                      name="fullName"
                      className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none text-[#999999] focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="fullName"
                      className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("FullName")}
                    </label>
                    <FormError name="fullName" />
                  </div>
                  {/* Phone Number Field */}
                  <div className="relative z-0 group w-[100%]">
                    <Field
                      type="text"
                      name="phoneNumber"
                      className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="phoneNumber"
                      className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("Phone")}
                    </label>
                    <FormError name="phoneNumber" />
                  </div>
                  {/* Email Address Field */}
                  <div className="relative z-0 group w-[100%]">
                    <Field
                      type="email"
                      name="email"
                      className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("Email")}
                    </label>
                    <FormError name="email" />
                  </div>
                  {/* Case Details Field */}
                  <div className="relative z-0 group w-[100%]">
                    <Field
                      component="textarea"
                      name="caseDetails"
                      className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                      rows={4}
                    />
                    <label
                      htmlFor="caseDetails"
                      className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("Tell")}
                    </label>
                    <FormError name="caseDetails" />
                  </div>
                  <div className="mt-10">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LfZ8xoqAAAAAFUCAGRN52Bz0OewBK85KILKIsti"
                      size="normal"
                      theme="dark"
                      hl="en"
                      onChange={(value) => {
                        setRecaptchaValue(value);
                        isSubmitting = false;
                      }}
                    />
                    <FormError name="recaptcha" />
                  </div>
                  <button
                    type="submit"
                    className={`px-5 py-2 bg-primary-red rounded-sm w-64 mt-6  hover:bg-white  ${
                      recaptchaValue && "hover:!text-primary-red "
                    }  !text-white duration-300 ease-in-out disabled:!text-gray-600 disabled:bg-gray-400 flex items-center justify-center`}
                    disabled={!recaptchaValue || !(isValid && dirty)}
                  >
                    {isSubmitting ? <Spinner /> : `${t("CaseEvaluation")}`}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
