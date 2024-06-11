import Image from "next/image";
import React from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const contactSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    caseDetails: Yup.string().required("Please tell us about your case"),
  });

  const initialValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    caseDetails: "",
  };

  interface FormValues {
    fullName: string;
    phoneNumber: string;
    email: string;
    caseDetails: string;
  }

  interface FormErrorProps {
    name: keyof FormValues; // Use keyof to restrict to keys of FormValues
  }

  // Custom Error Message Component with proper typing
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
    <div id="contactus" className="w-full bg-white pt-20">
      <div className="w-full h-5 bg-primary-red"></div>
      <div className="flex flex-col w-[90%] m-auto gap-4">
        <div className="w-80 h-12 mt-20 px-4 bg-primary-red flex gap-4 items-center justify-center">
          <span className="w-[50%] border-t-0.5 border-white"></span>
          <p className="text-white work-sans-regular">CONTACT US</p>
        </div>
        <h3 className="sm:text-4xl text-2xl md:text-5xl work-sans-bold font-bold text-primary-red w-full md:w-[45%]">
          We are here to help you with law questions
        </h3>
      </div>
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center m-auto w-[90%]">
        <div className="w-full md:w-[50%] bg-primary-red flex flex-col gap-6 items-center py-12">
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-white font-bold work-sans-bold">
            Request Consultation
          </h1>
          <p className="text-white text-center font-light text-md w-[90%] md:w-[65%] work-sans-regular">
            Get a free quote 30 - 60 minute consultation, please complete the
            online form below.
          </p>
          <p className="text-white text-center font-light text-md w-[90%] md:w-[75%] work-sans-regular leading-relaxed">
            We strive to provide all of our clients with the best possible
            results and value how each feels about us and the services we have
            provided. We are honored by the reviews we have received from both
            past and present clients
          </p>
          <Image
            src="/Google.png"
            width={250}
            height={250}
            alt="Google Image"
            className="hidden md:block"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center m-auto bg-[#111111] py-3">
          <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // console.log(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full px-5 flex m-auto flex-col">
                {/* Full Name Field */}
                <div className="relative z-0 group w-[100%] md:w-[80%] mt-5">
                  <Field
                    type="text"
                    name="fullName"
                    className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="fullName"
                    className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name
                  </label>
                  <FormError name="fullName" />
                </div>
                {/* Phone Number Field */}
                <div className="relative z-0 group w-[100%] md:w-[80%] mt-5">
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
                    Phone Number
                  </label>
                  <FormError name="phoneNumber" />
                </div>
                {/* Email Address Field */}
                <div className="relative z-0 group w-[100%] md:w-[80%] mt-5">
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
                    Email Address
                  </label>
                  <FormError name="email" />
                </div>
                {/* Case Details Field */}
                <div className="relative z-0 group md:w-[80%] w-[100%]">
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
                    Tell Us About Your Case
                  </label>
                  <FormError name="caseDetails" />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary-red rounded-sm w-56 mt-6 text-white hover:bg-white hover:text-primary-red duration-300 ease-in-out disabled:bg-gray-400"
                  disabled={isSubmitting}
                >
                  Request a consultation
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="w-[90%] md:w-[68%] flex items-center justify-center m-auto mt-20 sm:mt-24">
        <Image
          src="/Bannertwo.png"
          alt="Banner image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Contact;
