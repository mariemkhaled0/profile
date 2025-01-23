"use client";
import Link from "next/link";
import Image from "next/image";
import dashboard from "../public/images/Dashboard.svg";
import ReportDeConductores from "../public/images/ReporteDeConductores.svg";
import ReporteDePasajeros from "../public/images/ReporteDePasajeros.svg";
import Usuario from "../public/images/Usuario.svg";
import ControlDeRutas from "../public/images/ControlDeRutas.svg";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { useSidebar } from "./sidebarContext";
import { IoClose } from "react-icons/io5";

export default function Sidebar({ direction }) {
  const { t } = useTranslation();

  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        className={`fixed top-0 sidebar  z-50 w-[280px] ${
          direction === "ltr" ? "left-0" : "right-0"
        } h-full  bg-white  transition-transform duration-300 ${
          isSidebarOpen
            ? "translate-x-0"
            : direction === "rtl"
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        {isSidebarOpen && (
          <button
            className={`${
              direction === "rtl"
                ? "left-4 absolute top-4"
                : "right-4 absolute top-4"
            } `}
            onClick={closeSidebar}
          >
            <IoClose className="dark:text-white" size={23} />
          </button>
        )}
        <nav className="h-full sidebar  z-50 dark:bg-gray-900 dark:text-white text-[18px] overflow-y-auto  scrollbar-hide ">
          <div
            className={`${
              direction === "ltr" ? "mt-28 mb-24 ml-3" : "mt-28 mb-24 mr-4"
            }`}
          >
            <h2 className="mb-6 ml-3 ">{t("general")}</h2>
            <div
              className={`flex w-[250px] gap-2 pt-3 pb-3 pl-3 dark:text-white text-[#888888] hover:bg-[#5900CA17] dark:hover:bg-gray-600 transition-all duration-300 ease-in-out focus:outline-none focus:bg-[#5900CA17] focus:border-r-4 focus:border-r-[#5900CA] ${
                direction === "ltr"
                  ? "hover:border-r-4 hover:border-r-[#5900CA] "
                  : "hover:border-l-4 hover:border-l-[#5900CA] "
              }`}
            >
              <Image src={dashboard} alt="icon" width={24} />
              <Link href="/">{t("Dashboard")}</Link>
            </div>
            <div
              className={`flex  w-[250px] gap-2 pt-3 pb-3 pl-3 dark:text-white text-[#888888] hover:bg-[#5900CA17]  dark:hover:bg-gray-600 transition-all duration-300 ease-in-out focus:outline-none focus:bg-[#5900CA17] focus:border-r-4 focus:border-r-[#5900CA] ${
                direction === "ltr"
                  ? "hover:border-r-4 hover:border-r-[#5900CA] "
                  : "hover:border-l-4 hover:border-l-[#5900CA] "
              }`}
            >
              <Image src={ReportDeConductores} alt="icon" width={24} />
              <Link href="/">{t("Driver_Report")}</Link>
            </div>
            <div
              className={`flex  w-[250px] gap-2 pt-3 pb-3 pl-3 dark:text-white text-[#888888] hover:bg-[#5900CA17] dark:hover:bg-gray-600  transition-all duration-300 ease-in-out focus:outline-none focus:bg-[#5900CA17] focus:border-r-4 focus:border-r-[#5900CA] ${
                direction === "ltr"
                  ? "hover:border-r-4 hover:border-r-[#5900CA] "
                  : "hover:border-l-4 hover:border-l-[#5900CA] "
              }`}
            >
              <Image src={ReporteDePasajeros} alt="icon" width={24} />
              <Link href="/">{t("Passenger_Report")}</Link>
            </div>
            <h2 className="mt-7 mb-5 pl-3">{t("user")}</h2>
            <div
              className={`flex  w-[250px] gap-2 pt-3 pb-3 pl-3 dark:text-white text-[#888888] hover:bg-[#5900CA17] dark:hover:bg-gray-600  transition-all duration-300 ease-in-out focus:outline-none focus:bg-[#5900CA17] focus:border-r-4 focus:border-r-[#5900CA] ${
                direction === "ltr"
                  ? "hover:border-r-4 hover:border-r-[#5900CA] "
                  : "hover:border-l-4 hover:border-l-[#5900CA] "
              }`}
            >
              <Image src={Usuario} alt="icon" width={24} />
              <Link href="/profile">{t("profile")}</Link>
            </div>
            <h2 className="mt-7  mb-6 pl-3">{t("admin")}</h2>
            <div
              className={`flex w-[250px] gap-2 pt-3 pb-3 pl-3 dark:text-white text-[#888888] hover:bg-[#5900CA17] dark:hover:bg-gray-600  transition-all duration-300 ease-in-out focus:outline-none focus:bg-[#5900CA17] focus:border-r-4 focus:border-r-[#5900CA] ${
                direction === "ltr"
                  ? "hover:border-r-4  hover:border-r-[#5900CA] "
                  : "hover:border-l-4 hover:border-l-[#5900CA] "
              }`}
            >
              <Image src={ControlDeRutas} alt="icon" width={24} />
              <Link href="/">{t("route_Control")}</Link>
            </div>
            <div
              className={`flex w-[250px] gap-2 pt-3 pb-3 pl-3 dark:text-white text-[#888888] hover:bg-[#5900CA17] dark:hover:bg-gray-600 transition-all duration-300 ease-in-out focus:outline-none focus:bg-[#5900CA17] focus:border-r-4 focus:border-r-[#5900CA] ${
                direction === "ltr"
                  ? "hover:border-r-4 hover:border-r-[#5900CA] "
                  : "hover:border-l-4 hover:border-l-[#5900CA] "
              }`}
            >
              <Image src={Usuario} alt="icon" width={24} />
              <Link href="/">{t("User_control")}</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
