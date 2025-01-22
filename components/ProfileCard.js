"use client";
import React, { useState } from "react";
import Image from "next/image";
import InfoCard from "./InfoCard";
import { useTranslation } from "react-i18next";
const i18nNamespaces = ["profileCard"];
function ProfileCard({ userDetails }) {
  const { t } = useTranslation(i18nNamespaces);
  // State to store the uploaded image
  const [image, setImage] = useState("/images/profilePc.svg");

  // Function to handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Update the image state with the uploaded file
      };
      reader.readAsDataURL(file); // Convert the file to a base64 string
    }
  };

  return (
    <div className="  flex flex-col gap-7">
      <div className="dark:bg-[#b7b7b752] flex flex-col justify-center items-center bg-white px-[60px] pt-7 pb-8 rounded-2xl">
        <label htmlFor="profile-image-upload" className="cursor-pointer">
          <div className="rounded-full">
            {/* Profile image with an onClick handler */}
            <Image
              width={200}
              height={160}
              src={image}
              alt="profile-picture"
              className="rounded-[100%] w-[200px] h-[170px]"
            />
            <p className="text-center text-white  text-[10px] pt-1 hover:text-[#888888]">
              upload image
            </p>
          </div>
        </label>
        {/* Hidden file input */}
        <input
          id="profile-image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <h5 className="dark:text-white text-[#5900CA] pt-2 font-bold">
          {userDetails.name || "user Name"}
        </h5>
        <h6 className="text-[#888888] font-bold text-[14px]">
          {userDetails.email || "user@email.com"}
        </h6>
      </div>
      <div className="w-full">
        <InfoCard userDetails={userDetails} />
      </div>
    </div>
  );
}

export default ProfileCard;
