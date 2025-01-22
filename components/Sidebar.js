"use client";
import Link from "next/link";
import Image from "next/image";
import dashboard from "../public/images/Dashboard.svg";
import ReportDeConductores from "../public/images/ReporteDeConductores.svg";
import ReporteDePasajeros from "../public/images/ReporteDePasajeros.svg";
import Usuario from "../public/images/Usuario.svg";
import ControlDeRutas from "../public/images/ControlDeRutas.svg";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18n.config";
export default function Sidebar({ direction }) {
  const { t } = useTranslation();

  return (
    <nav className="h-full z-50 dark:bg-gray-900 dark:text-white text-[18px] overflow-y-auto  scrollbar-hide ">
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
  );
}
