import Image from "next/image";
export async function generateStaticParams() {
  // Provide all possible values for "locale"
  return [{ locale: "en" }, { locale: "ar" }];
}
export default function Home() {
  return (
    <div className="bg-[#B7B7B752] w-full h-screen dark:bg-gray-800 dark:text-white  flex items-center justify-center">
      <div className="font-bold"> welcome to my dashboard </div>
    </div>
  );
}
