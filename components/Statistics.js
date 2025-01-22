"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import map from "../public/images/map.svg";
import Image from "next/image";
import Map from "./Map";

function Statistics() {
  const i18nNamespaces = ["Statistics"];
  const { t } = useTranslation(i18nNamespaces);
  return (
    <div className=" lg:w-[287px] space-y-5 mb-8">
      <div className="dark:bg-[#b7b7b752] w-full flex flex-col justify-center pt-6 py-4 px-11 text-center bg-[#B7B7B752] rounded-xl shadow-lg">
        <h2 className="font-bold">{t("Devices turned off")}</h2>
        <h3 className="text-[#D50000] text-4xl">1</h3>
      </div>
      <div className="dark:bg-[#b7b7b752] w-full flex flex-col justify-center pt-6 py-4 px-11 text-center bg-white rounded-xl shadow-lg">
        <h2 className="font-bold">{t("Routes started")}</h2>
        <h3 className="text-[#00318F] text-4xl">17</h3>
      </div>
      <div className="dark:bg-[#b7b7b752] w-full flex flex-col justify-center pt-6 py-4 px-11 text-center  bg-white rounded-xl shadow-lg">
        <h2 className="font-bold">{t("Devices in operation")}</h2>
        <h3 className="text-[#00D53C] text-4xl">17</h3>
      </div>
      <div className="dark:bg-[#b7b7b752] w-full flex flex-col justify-center pt-6 py-4 px-11 text-center  bg-white rounded-xl shadow-lg">
        <h2 className="font-bold">{t("Total Vehicles")}</h2>
        <h3 className="text-[#000000] text-4xl">18</h3>
      </div>
      <Map />
    </div>
  );
}

export default Statistics;
