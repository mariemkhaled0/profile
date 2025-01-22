import initTranslations from "@/app/i18n";
import MyForm from "@/components/Form";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import ProfileCard from "@/components/ProfileCard";
import Statistics from "@/components/Statistics";
import TranslationsProvider from "@/components/TranslationProvider";
import i18nConfig from "@/i18n.config";
import React from "react";

const i18nNamespaces = ["Form", "navbar", "profileCard", "Statistics"];
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
async function page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const direction = i18nConfig.dir[locale] || "ltr"; // Default to 'ltr'

  return (
    <div>
      <TranslationsProvider
        locale={locale}
        resources={resources}
        namespaces={i18nNamespaces}
      >
        <Navbar />
        <div className="bg-[#B7B7B752] h-full dark:bg-gray-800 dark:text-white flex  flex-col lg:flex-row gap-6 pr-12 pl-12 pt-12 overflow-x-auto">
          <ProfileCard />
          <MyForm direction={direction} />
          <Statistics />
        </div>
      </TranslationsProvider>
    </div>
  );
}

export default page;
