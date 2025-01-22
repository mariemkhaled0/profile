"use client";
import Image from "next/image";
import userName from "../public/images/UserName.svg";
import { useTranslation } from "react-i18next";
function Navbar() {
  const i18nNamespaces = ["navbar", "Form"];
  const { t } = useTranslation(i18nNamespaces);
  return (
    <div className="w-full flex justify-between pr-12 pl-12 text-white items-center h-[80px] bg-[#292121]">
      <p>{t("Route_control")}</p>
      <div className="flex gap-1">
        <p>{t("user")}</p>
        <Image src={userName} alt="userIcon" width={24} />
      </div>
    </div>
  );
}

export default Navbar;
