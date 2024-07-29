import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Spinner from "./Spinner";
import { useTranslations } from "next-intl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { INVALID_DOMAINS } from "../api/domain";

const Contact = () => {
  const t = useTranslations("Contact");
  const [referer, setReferer] = useState<string>("");

  const contactSchema = Yup.object().shape({
    fullName: Yup.string().required(`${t("NameReq")}`),
    phoneNumber: Yup.string().required(`${t("PhoneReq")}`),
    email: Yup.string()
      .email("Invalid email")
      .required(`${t("EmailReq")}`),
    caseDetails: Yup.string().required(`${t("CaseReq")}`),
    typeOfAccident: Yup.string().required(`${t("AccidentType")}`),
    date: Yup.date().required(`${t("AccidentHappened")}`),
    honeyPot: Yup.string(),
    isChecked: Yup.string().required("Please select if you were at fault"),
  });

  const initialValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    caseDetails: "",
    honeyPot: "",
    typeOfAccident: "",
    date: new Date(),
    isChecked: "No",
  };

  interface FormValues {
    fullName: string;
    phoneNumber: string;
    email: string;
    caseDetails: string;
    honeyPot: string;
    typeOfAccident: string;
    date: Date;
    isChecked: string;
  }

  interface FormErrorProps {
    name: keyof FormValues;
  }

  // Custom Error Message Component with proper typing
  const FormError: React.FC<FormErrorProps> = ({ name }) => {
    const { errors, touched } = useFormikContext<FormValues>();
    const showError = errors[name] && touched[name];
    const errorMessage: any = showError
      ? typeof errors[name] === "string"
        ? errors[name]
        : "Invalid value"
      : "";

    return (
      <div
        className={`h-6 text-primary-red text-sm font-light work-san-light ${
          showError ? "visible" : "invisible"
        }`}
      >
        {errorMessage}
      </div>
    );
  };

  useEffect(() => {
    const referer = document.referrer;
    setReferer(referer);
    console.log("Referer: ", referer);
  }, []);

  return (
    <div id="contact-us" className="w-full bg-white pt-20">
      <div className="w-full h-5 bg-primary-red"></div>
      <div className="flex flex-col w-[90%] m-auto gap-4">
        <div className="w-64 text-nowrap text-ellipsis overflow-hidden  h-12 mt-20 px-4 bg-primary-red flex gap-4 items-center justify-center">
          <span className="w-[50%] border-t-0.5 border-white"></span>
          <p className="text-white work-sans-regular">{t("Contact")}</p>
        </div>
        <h3 className="sm:text-4xl text-2xl md:text-5xl work-sans-bold font-bold text-primary-red w-full md:w-[45%]">
          {t("GetFree")}
        </h3>
      </div>

      <div className="mt-20 flex flex-col md:flex-row w-[90%] m-auto justify-center">
        <div className="bg-primary-red w-full md:w-1/2 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6 py-12 md:py-0">
            <h2 className="md:text-4xl sm:text-3xl text-2xl text-white font-bold work-sans-bold">
              {t("Request")}
            </h2>
            <p className="text-white text-center font-semibold text-xl w-[90%] md:w-[65%] work-sans-regular">
              {t("GetMinutes")}
            </p>
            <p className="text-white text-center font-light text-md w-[90%] md:w-[75%] work-sans-regular leading-relaxed">
              {t("Strive")}
            </p>
            <div className="bg-black hidden md:block px-5 py-3 rounded-md">
              <Image
                src="/Google.png"
                width={250}
                height={250}
                alt="Google Image"
                className="hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="bg-black w-full md:w-1/2 py-3">
          <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (INVALID_DOMAINS.includes(referer)) {
                console.log("Invalid domain: ", referer);
                return;
              }

              const body = {
                name: values.fullName,
                email: values.email,
                phone: values.phoneNumber,
                message: values.caseDetails,
                type: values.honeyPot.length > 0 ? "bot" : "human",
                date: values.date,
                typeOfAccident: values.typeOfAccident,
                isChecked: values.isChecked,
              };
              const res = await axios.post("/api", body);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="w-full px-5 flex m-auto flex-col">
                <div className="relative z-0 group w-[100%] honeypot">
                  <Field
                    type="text"
                    name="honeyPot"
                    className="hidden"
                    placeholder="Leave this field empty"
                  />
                </div>

                <div
                  className="relative z-0 group w-[100%] md:w-[80%] mt-5"
                  id="Full Name"
                >
                  <Field
                    type="text"
                    name="fullName"
                    className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                    aria-label="Full Name"
                  />
                  <label
                    htmlFor="fullName"
                    className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {t("FullName")}
                  </label>
                  <FormError name="fullName" />
                </div>
                <div
                  id="phone Number"
                  className="relative z-0 group w-[100%] md:w-[80%] mt-5"
                >
                  <Field
                    type="text"
                    name="phoneNumber"
                    className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                    aria-label="phone Number"
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {t("Phone")}
                  </label>
                  <FormError name="phoneNumber" />
                </div>
                <div
                  id="Email Address"
                  className="relative z-0 group w-[100%] md:w-[80%] mt-5"
                >
                  <Field
                    type="email"
                    name="email"
                    className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                    area-label="Email Address"
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {t("Email")}
                  </label>
                  <FormError name="email" />
                </div>
                <div
                  id="typeOfAccident"
                  className="relative z-0 mt-5 group md:w-[80%] w-[100%]"
                >
                  <Field
                    as="select"
                    name="typeOfAccident"
                    className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                    required
                    aria-label="type of accident"
                  >
                    <option value="">{t("SelectType")}</option>
                    <option value="Bicycle Accident">
                      {t("BicycleAccident")}
                    </option>
                    <option value="Car Crash">{t("CarCrash")}</option>
                    <option value="DUI Accident">{t("DUIAccident")}</option>
                    <option value="Hurt at Work">{t("Hurt")}</option>
                    <option value="Motorcycle Accident">
                      {t("MotorcycleAccident")}
                    </option>
                    <option value="Pedestrian Accident">
                      {t("PedestrianAccident")}
                    </option>
                    <option value="Other">{t("Other")}</option>
                  </Field>
                  <label
                    htmlFor="typeOfAccident"
                    className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {t("Type")}
                  </label>
                  <FormError name="typeOfAccident" />
                </div>
                <div
                  id="date"
                  className="relative z-50 group w-[100%] md:w-[80%] mt-5"
                >
                  <Field name="date">
                    {({ field }: any) => (
                      <div className="relative">
                        <DatePicker
                          {...field}
                          selected={field.value}
                          onChange={(date) => setFieldValue("date", date)}
                          className="block py-2.5 px-10 w-full text-sm text-[#999999] bg-black border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                          aria-label="date"
                        />
                        <FaCalendarAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#999999]" />
                      </div>
                    )}
                  </Field>
                  <label
                    htmlFor="date"
                    className="peer-focus:font-medium absolute -mt-2 text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {t("Date")}
                  </label>
                  <FormError name="date" />
                </div>
                <div
                  id="caseDetails"
                  className="relative z-0 group w-[100%] md:w-[80%] mt-5"
                >
                  <Field
                    as="textarea"
                    name="caseDetails"
                    rows={4}
                    className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                    area-label="Case Details"
                  />
                  <label
                    htmlFor="caseDetails"
                    className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {t("CaseDetails")}
                  </label>
                  <FormError name="caseDetails" />
                </div>
                <div
                  id="atFault"
                  className=" z-0 group w-[100%] md:w-[80%] mt-5"
                >
                  <label
                    htmlFor="atFaultYes"
                    className="text-sm text-[#999999] font-light cursor-pointer"
                  >
                    {t("Fault")}
                  </label>
                  <div className="flex items-center gap-4 mt-4 cursor-pointer">
                    <Field
                      type="radio"
                      id="atFaultYes"
                      name="isChecked"
                      value="Yes"
                    />
                    <label
                      htmlFor="atFaultYes"
                      className="text-sm text-[#999999] font-light cursor-pointer"
                    >
                      {t("yes")}
                    </label>
                    <Field
                      type="radio"
                      id="atFaultNo"
                      name="isChecked"
                      value="No"
                    />
                    <label
                      htmlFor="atFaultNo"
                      className="text-sm text-[#999999] font-light cursor-pointer"
                    >
                      {t("no")}
                    </label>
                  </div>
                  <FormError name="isChecked" />
                </div>
                <div
                  id="submit"
                  className="relative z-0 group w-[100%] md:w-[80%] mt-5"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 text-center text-white bg-primary-red rounded-md text-sm work-sans-regular cursor-pointer duration-200 hover:opacity-80"
                  >
                    {isSubmitting ? <Spinner /> : `${t("submit")}`}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
