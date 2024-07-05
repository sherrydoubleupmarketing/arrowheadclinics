import Image from "next/image";
import React from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Spinner from "./Spinner";

const Contact = () => {
  const contactSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    caseDetails: Yup.string().required("Please tell us about your case"),
    typeOfAccident: Yup.string().required("Please tell us your accident type"),
    date: Yup.date().required("Please tell us when the accident happened"),
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
    date: "",
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

  return (
    <div id="contactus" className="w-full bg-white pt-20">
      <div className="w-full h-5 bg-primary-red"></div>
      <div className="flex flex-col w-[90%] m-auto gap-4">
        <div className="w-64 text-nowrap text-ellipsis overflow-hidden  h-12 mt-20 px-4 bg-primary-red flex gap-4 items-center justify-center">
          <span className="w-[50%] border-t-0.5 border-white"></span>
          <p className="text-white work-sans-regular">CONTACT US</p>
        </div>
        <h3 className="sm:text-4xl text-2xl md:text-5xl work-sans-bold font-bold text-primary-red w-full md:w-[45%]">
          Get A Free Case Review
        </h3>
      </div>

      <div className="mt-20 flex flex-col md:flex-row w-[90%] m-auto justify-center">
        <div className="bg-primary-red w-full md:w-1/2 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6 py-12 md:py-0">
            <h1 className="md:text-4xl sm:text-3xl text-2xl text-white font-bold work-sans-bold">
              Request A Consultation
            </h1>
            <p className="text-white text-center font-semibold text-xl w-[90%] md:w-[65%] work-sans-regular">
              Get A Free 30 - 60 Minute Consultation
            </p>
            <p className="text-white text-center font-light text-md w-[90%] md:w-[75%] work-sans-regular leading-relaxed">
              We strive to provide all of our clients with the best possible
              results and value how each feels about us and the services we have
              provided. We are honored by the reviews we have received from both
              past and present clients
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
            {({ isSubmitting }) => (
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
                    Full Name
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
                    Phone Number
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
                    Email Address
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
                    <option value="">Select your accident type</option>
                    <option value="Bicycle Accident">Bicycle Accident</option>
                    <option value="Car Crash">Car Crash</option>
                    <option value="DUI Accident">DUI Accident</option>
                    <option value="Hurt at Work">Hurt at Work</option>
                    <option value="Motorcycle Accident">
                      Motorcycle Accident
                    </option>
                    <option value="Pedestrian Accident">
                      Pedestrian Accident
                    </option>
                    <option value="Other">Other</option>
                  </Field>
                  <label
                    htmlFor="typeOfAccident"
                    className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Type of Accident
                  </label>
                  <FormError name="typeOfAccident" />
                </div>
                <div
                  id="date"
                  className="relative z-0 group w-[100%] md:w-[80%] mt-5"
                >
                  <Field
                    type="date"
                    name="date"
                    className="block py-2.5 px-0 w-full text-sm text-[#999999] bg-transparent border-0 border-b-0.5 border-[#999999] appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                    aria-label="date"
                  />
                  <label
                    htmlFor="date"
                    className="peer-focus:font-medium absolute text-sm text-[#999999] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ccc] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Date of Accident
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
                    Case Details
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
                    Were You At Fault?
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
                      Yes
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
                      No
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
                    {isSubmitting ? <Spinner /> : "Submit"}
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
