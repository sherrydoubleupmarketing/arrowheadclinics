import React from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import axios from "axios";

const About = () => {
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
    <div
      id="aboutUs"
      className="w-[90%] m-auto flex flex-col md:flex-row py-12"
    >
      <div className="w-full md:w-[50%] flex flex-col gap-6 ">
        <div className="w-56 text-ellipsis overflow-hidden h-12 bg-primary-red flex gap-4 items-center justify-center">
          <span className="w-[50%] border-t-0.5 border-white"></span>
          <p className="text-white text-md work-sans-regular">ABOUT US</p>
        </div>
        <h1 className="font-normal text-2xl sm:text-4xl md:text-5xl w-[90%] leading-normal text-primary-red tracking-wide work-sans-regular">
          Highly Qualified & Experienced in Personal Injury Law
        </h1>
        <p className="font-light text-md w-[90%] work-sans-regular leading-relaxed">
          We have expertise in many aspects of personal injury law. We fight to
          ensure our clients and their families receive the compensation, care
          and support they deserve. We proudly act as your advocate and trusted
          advisor through the complex legal, medical and insurance issues
          related to your recovery.
        </p>
        <p className="font-light text-md work-sans-regular">
          Founder & Senior Lawyer
        </p>
      </div>
      <div className="w-full md:w-[50%] flex flex-col mt-12 md:-mt-48">
        <div className="bg-primary-red w-full md:w-[90%] flex flex-col gap-3 items-center justify-center py-6">
          <h1 className="sm:text-3xl text-2xl md:text-4xl text-white font-bold work-sans-bold">
            Request A Consultation
          </h1>
          <p className="text-white text-center font-semibold text-md md:text-xl w-[70%] work-sans-regular">
            Get A Free 30 - 60 Minute Consultation
          </p>
        </div>
        <div className="bg-black h-full w-full md:w-[90%] flex flex-col gap-7 py-12 md:cardshadow">
          <div className="flex flex-col w-full sm:w-[90%] m-auto px-10">
            <Formik
              initialValues={initialValues}
              validationSchema={contactSchema}
              onSubmit={async (values, actions) => {
                try {
                  const body = {
                    name: values.fullName,
                    email: values.email,
                    phone: values.phoneNumber,
                    message: values.caseDetails,
                  };
                  const res = await axios.post("/api", body);
                  console.log("res=>", res);
                  actions.resetForm();
                } catch (error) {}
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full px-5">
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
                      Full Name
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
                      Phone Number
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
                      Email Address
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
                      Tell Us About Your Case
                    </label>
                    <FormError name="caseDetails" />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-primary-red rounded-sm w-56 mt-6 text-white hover:bg-white hover:text-primary-red duration-300 ease-in-out disabled:bg-gray-400"
                    disabled={isSubmitting}
                  >
                    Get A Free Consultation
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
