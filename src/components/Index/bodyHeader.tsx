import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function BodyHeader() {
  const t = useTranslations("RootLayout");
  return (
    <div className="flex justify-center">
      <Image
        src="/images/mainBgImage.png"
        alt="backgroundImage"
        style={{
          width: "100%",
        }}
        width="2000"
        height="353"
        quality={100}
      />
      <div className="hidden md:flex absolute mt-[12%] flex-col items-center">
        <span className=" text-white font-[800] text-sm md:text-[14px] lg:text-[18px] xl:text-[22px] w-[310px] uppercase text-center">
          best online butcher delivering quality meat
        </span>
        <Link
          href="/onlineOrder"
          className="bg-mainColor md:h-[30px] flex items-center lg:h-[40px] xl:h-[50px] md:px-[16px] lg:px-[22px] xl:px-[28px] rounded-[10px] mt-[20px]">
          <span className="text-white md:text-[8px] lg:text-[10px] xl:text-[12px] font-bold uppercase leading-[14px] text-center">
            {t("online_order_link")}
          </span>
        </Link>
      </div>
    </div>
  );
}
