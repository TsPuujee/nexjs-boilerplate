"use client";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useLocale } from "next-intl";
import { useState } from "react";
import { usePathname, useRouter } from "@/libs/i18nNavigation";
import { AppConfig } from "@/utils/AppConfig";

export default function LocaleSwitcher() {
  const [isShowModal, setShowModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (choosenLocale: string) => {
    router.push(pathname, { locale: choosenLocale });
    router.refresh();
  };
  const showModal = () => {
    setShowModal(!isShowModal);
  };
  const currentLocaleJson = AppConfig.localesJson.find(
    (localeJson) => localeJson.locale === locale
  );

  return (
    <>
      <button
        id="states-button"
        onClick={() => showModal()}
        className="flex-shrink-0 inline-flex items-center ml-[30px] text-sm font-medium text-center border-gray-300 rounded-lg"
        type="button">
        <i className={`fi fi-${currentLocaleJson?.logo} mr-2`} />
        {currentLocaleJson?.name}
      </button>
      {isShowModal && (
        <div className="bg-[#F8F8F8] border rounded-lg shadow w-44 fixed top-2 right-[23%] ">
          <ul className="py-2 text-s">
            {AppConfig.localesJson.map((localeJson) => (
              <li key={localeJson.name}>
                <button
                  type="button"
                  value={localeJson.locale}
                  className="inline-flex w-full px-4 py-2 text-sm"
                  onClick={() => handleChange(localeJson.locale)}>
                  <div className="inline-flex items-center">
                    <i className={`fi fi-${localeJson.logo} mr-2`}></i>
                    {localeJson.name}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
