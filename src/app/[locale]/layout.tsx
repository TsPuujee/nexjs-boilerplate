import "@/styles/global.css";

import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { BaseTemplate } from "@/templates/main";
import { Call, Call2, Fb, Insta, LogoSvg, Messanger } from "@/public/svg";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { AppConfig } from "@/utils/AppConfig";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations("RootLayout");
  if (!AppConfig.locales.includes(props.params.locale)) notFound();

  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}>
          <BaseTemplate
            header={
              <>
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
                <div className="z-[100] hidden h-[113px] md:flex bg-white w-full fixed items-center justify-center top-0 border-b-2 border-b-[#E6E6E6]">
                  <Link
                    href="/about"
                    className="text-[12px] font-bold leading-4 text-center text-black">
                    {t("about_link")}
                  </Link>
                  <Link
                    href="/onlineOrder"
                    className="text-[12px] font-bold leading-4 text-center text-black ml-[30px]">
                    {t("online_order_link")}
                  </Link>
                  <Link
                    href="/"
                    className="text-[12px] font-bold leading-4 text-center text-black ml-[30px]">
                    <LogoSvg />
                  </Link>
                  <Link
                    href="/blogs"
                    className="text-[12px] font-bold leading-4 text-center text-black ml-[30px]">
                    {t("blogs_link")}
                  </Link>
                  <Link
                    href="/workWithUs"
                    className="text-[12px] font-bold leading-4 text-center text-black ml-[30px]">
                    {t("work_with_us_link")}
                  </Link>
                  {/* <LocaleSwitcher /> */}
                </div>
              </>
            }
            footer={
              <>
                <footer className="hidden md:flex h-[260px] w-fit">
                  <div className="flex flex-col justify-between items-center">
                    <div className="flex flex-row">
                      <div className="mt-[30px]">
                        <LogoSvg />
                      </div>
                      <div className="flex flex-row justify-betwee mt-[30px] ml-[105px]">
                        <div className="w-[365px] h-fit flex flex-col">
                          <span className="text-black text-[14px] leading-4 font-bold uppercase">
                            work with us
                          </span>
                          <input
                            type="text"
                            inputMode="email"
                            placeholder="enter your e-mail address"
                            className="p-[10px] placeholder-[#E6E6E6] mt-[10px] text-[12px] uppercase focus:outline-none focus:border-outline-none h-[50px] border-b-[1px] border-b-mainColor "></input>
                          <div className="flex flex-col mt-[30px]">
                            <span className="text-black text-[14px] leading-4 font-bold uppercase">
                              get to know us
                            </span>
                            <div className="flex flex-row gap-[10px] mt-[10px]">
                              <Fb />
                              <Insta />
                              <Messanger />
                              <Call />
                              <Call2 />
                            </div>
                          </div>
                        </div>
                        <div className="ml-[30px] h-fit flex flex-col">
                          <span className="text-mainColor text-[12px] leading-[14px] font-bold uppercase">
                            contact us
                          </span>
                          <span className="text-black text-[10px] leading-[11px] font-[600] uppercase mt-[20px]">
                            1245 Park St, Alameda, CA 94501
                          </span>
                          <div className="mt-[20px] border-b-2 border-b-[#E6E6E6]"></div>
                          <span className="text-black text-[10px] leading-[11px] font-[600] uppercase mt-[20px]">
                            (510) 263-8171
                          </span>
                          <div className="mt-[20px] border-b-2 border-b-[#E6E6E6]"></div>
                          <span className="text-black text-[10px] leading-[11px] font-[600] uppercase mt-[20px]">
                            contact@nomadbutchers.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[#808080] text-[8px] text-center font-[600] leading-[9px] mb-[15px]">
                      © 2024 nomad butchers. All Rights Reserved. Developed by mazalai
                      LLC
                    </span>
                  </div>
                </footer>
              </>
            }>
            {props.children}
          </BaseTemplate>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}