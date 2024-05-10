"use client";
import { useTranslations } from "next-intl";

const LogOutButton = () => {
  const t = useTranslations("MainLayout");

  return (
    <button
      className="border-none text-gray-700 hover:text-gray-900"
      type="button"
      onClick={() => {}}>
      {t("sign_out")}
    </button>
  );
};

export { LogOutButton };
