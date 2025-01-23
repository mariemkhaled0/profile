"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Toggle from "../public/images/Toggle.svg";
import ToggleClosed from "../public/images/ToggleClosed.svg";

function InfoCard({ userDetails }) {
  const i18nNamespaces = ["profileCard"];
  const { t } = useTranslation(i18nNamespaces);

  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Check if window is available before using browser-specific features
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Apply dark mode on page load based on saved preference
      const savedDarkMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(savedDarkMode);
      if (savedDarkMode) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Toggle dark mode and apply/remove the 'dark' class from the <html> element
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (typeof window !== "undefined") {
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      // Save the preference in localStorage
      localStorage.setItem("darkMode", newDarkMode);
    }
  };

  return (
    <div className="dark:bg-[#b7b7b752] text-black dark:text-white flex flex-col text-[14px] space-y-4 px-[30px] bg-white pb-20 pt-7 rounded-2xl">
      <strong className="pb-4">{t("Information")}</strong>
      <div className="flex gap-3 w-full">
        <strong>{t("Name")}:</strong>
        <p>{`${userDetails.name} ${userDetails.lastName}`}</p>
      </div>
      <div className="flex flex-nowrap gap-4">
        <strong>{t("Email")}</strong>
        <p>{userDetails.email}</p>
      </div>
      <div className="flex flex-nowrap gap-4">
        <strong>{t("Tel")}:</strong>
        <p>{userDetails.tel}</p>
      </div>
      <div className="flex flex-nowrap gap-4">
        <strong>{t("Plan")}:</strong>
        <p>{t("Hardcoded")}</p>
      </div>
      <h2 className="font-bold">{t("Preferences")}</h2>
      <div className="flex flex-nowrap gap-4">
        <strong>{t("Light/dark")}:</strong>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <Image src={ToggleClosed} alt="Toggle Closed Icon" />
          ) : (
            <Image src={Toggle} alt="Toggle Icon" />
          )}
        </button>
      </div>
    </div>
  );
}

export default InfoCard;
