import Image from "next/image";

export default function BodyHeader() {
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
      </div>
    </div>
  );
}
