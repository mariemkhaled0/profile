import React from "react";
import ProfileCard from "./ProfileCard";
import Form from "./Form";

async function Profile() {
  return (
    <div className="bg-[#B7B7B752] h-full  flex  flex-col lg:flex-row gap-6 pr-12 pl-12 pt-12">
      <ProfileCard />
      <Form />
    </div>
  );
}

export default Profile;
