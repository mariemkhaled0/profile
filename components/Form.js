"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Validation Schema for User Details
const userDetailsSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2")
    .max(50, "Name is too long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Last name is too short")
    .max(50, "Last name is too long")
    .required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  tel: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Required"),
});

// Validation Schema for Password Change
const passwordSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Required"),
});

const MyForm = ({ handleSaveUserDetails }) => {
  const i18nNamespaces = ["Form", "navbar"];
  const { t } = useTranslation(i18nNamespaces);

  return (
    <div className="dark:bg-[#b7b7b752] z-[1] w-full lg:w-[700px] p-9 mb-7 border rounded-xl bg-white">
      <h2 className="mb-9 text-black font-bold">{t("User_Settings")}</h2>
      <h2 className="pb-7 text-black font-bold">{t("Details")}</h2>

      {/* Form for User Details */}
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          tel: "",
        }}
        validationSchema={userDetailsSchema}
        // validateOnChange={true}
        // validateOnBlur={true}
        onSubmit={(values, { resetForm }) => {
          handleSaveUserDetails(values);
          toast.success(t("Changes saved"));
          resetForm();
        }}
      >
        {({
          touched,
          errors,
          handleSubmit,
          // setFieldValue,
          setFieldTouched,
          handleChange,
          // validateForm,
          handleBlur,
          isValid,
          values,
        }) => (
          <Form className="space-y-8">
            {/* Name & Last Name */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-7">
              {/* Name Field */}
              <div className="w-full relative">
                <label
                  htmlFor="name"
                  className="dark:text-white block text-sm font-medium text-gray-700"
                >
                  {t("name")}
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("Enter_your_name")}
                  className={`mt-1 p-2 w-full border rounded-md focus:outline-none  focus:ring-2 bg-[#B7B7B752] text-black dark:bg-white ${
                    touched.name && errors.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500`}
                  onChange={(e) => {
                    handleChange(e); // Formik's default change handler
                    setFieldTouched("name", true, false); // Mark the field as touched
                  }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 dark:text-red-300 text-xs absolute mt-2 top-[60px]"
                />

                {touched.name && !errors.name && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" absolute right-3 p-[2px] text-xs rounded-full top-8 bg-green-500 text-white"
                  />
                )}
              </div>
              {/* Last Name Field */}
              <div className="w-full relative">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  {t("last-name")}
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder={t("Enter_your_last name")}
                  className={`mt-1 p-2 w-full border rounded-md focus:outline-none  focus:ring-2 bg-[#B7B7B752] text-black dark:bg-white ${
                    touched.lastName && errors.lastName
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500`}
                  onChange={(e) => {
                    handleChange(e); // Formik's default change handler
                    setFieldTouched("lastName", true, false); // Mark the field as touched
                  }}
                />

                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 dark:text-red-300 text-xs absolute mt-2 top-[60px]"
                />
                {touched.lastName && !errors.lastName && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" absolute right-3 p-[2px] text-xs rounded-full top-8 bg-green-500 text-white"
                  />
                )}
              </div>
            </div>

            {/* Email & Tel */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-7">
              {/* Email Field */}
              <div className="w-full relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  {t("Email")}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("Enter_your_email")}
                  className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 text-black bg-[#B7B7B752] dark:bg-white ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500`}
                  onChange={(e) => {
                    handleChange(e); // Formik's default change handler
                    setFieldTouched("email", true, false); // Mark the field as touched
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 dark:text-red-300 text-xs absolute mt-2 top-[60px]"
                />
                {touched.email && !errors.email && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" absolute right-3 p-[2px] text-xs rounded-full top-8 bg-green-500 text-white"
                  />
                )}
              </div>
              {/* Tel Field */}
              <div className="w-full relative">
                <label
                  htmlFor="tel"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  {t("Tel-Number")}
                </label>
                <Field
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder={t("Enter_your_phone_number")}
                  className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 bg-[#B7B7B752] text-black dark:bg-white ${
                    touched.tel && errors.tel
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500`}
                  onChange={(e) => {
                    handleChange(e); // Formik's default change handler
                    setFieldTouched("tel", true, false); // Mark the field as touched
                  }}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="tel"
                  component="div"
                  className="text-red-500 dark:text-red-300 text-xs absolute mt-2 top-[60px]"
                />
                {touched.tel && !errors.tel && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" absolute right-3 p-[2px] text-xs rounded-full top-8 bg-green-500 text-white"
                  />
                )}
              </div>
            </div>

            {/* Save Changes Button */}
            <button
              type="button"
              onClick={() => handleSubmit()}
              disabled={!isValid}
              className="w-full lg:w-[45%] h-[45px] dark:bg-[#4c1f65] bg-[#BF50FF] text-white p-2 rounded-md"
            >
              {t("Save_changes")}
            </button>
          </Form>
        )}
      </Formik>

      {/* Password Change Section */}
      <h2 className="text-xl font-semibold mt-9 mb-3 dark:text-white text-gray-700">
        {t("Password")}
      </h2>

      <Formik
        initialValues={{
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={passwordSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success(t("Password changed"));
          resetForm();
        }}
      >
        {({ touched, errors, handleSubmit }) => (
          <Form className="space-y-10">
            {/* New Password */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-7">
              <div className="w-full relative ">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium  text-gray-700 dark:text-white"
                >
                  {t("Password")}
                </label>
                <Field
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder={t("Enter_new_password")}
                  className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 text-black bg-[#B7B7B752] dark:bg-white ${
                    touched.newPassword && errors.newPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500`}
                />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 dark:text-red-300 text-xs absolute mt-2 top-[60px]"
                />
              </div>
              {/* Confirm Password */}
              <div className="w-full relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  {t("Confirm_password")}
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder={t("Confirm_new_password")}
                  className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 text-black bg-[#B7B7B752] dark:bg-white ${
                    touched.confirmPassword && errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500`}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 dark:text-red-300 text-xs absolute mt-2 top-[60px]"
                />
              </div>
            </div>
            {/* Save Password Changes Button */}
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="w-full lg:w-[45%] h-[45px] dark:bg-gray-800 bg-[#5900CA] text-white p-2 rounded-md"
              >
                {t("Save_changes")}
              </button>

              {/* Forgot Password Link */}
              <div className="mt-2 text-center">
                <a href="/#" className="text-[#8A8A8A] hover:text-blue-700">
                  {t("Forgot_your_password")}
                </a>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
