"use client";
import { useState } from "react"; // import useState
import initTranslations from "@/app/i18n";
import MyForm from "@/components/Form";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Statistics from "@/components/Statistics";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the styles for react-toastify

function Page() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    lastName: "",
    email: "",
    tel: "",
  });

  const handleSaveUserDetails = (values) => {
    setUserDetails(values); // Update the user details in the parent state
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#B7B7B752] h-full dark:bg-gray-800 dark:text-white flex  flex-col lg:flex-row gap-6 pr-12 pl-12 pt-12 overflow-x-auto">
        <ProfileCard userDetails={userDetails} />
        <MyForm handleSaveUserDetails={handleSaveUserDetails} />
        <Statistics />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Page;
