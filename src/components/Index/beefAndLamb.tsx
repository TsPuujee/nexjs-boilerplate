"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Beef from "@/public/svg/beef";
import Lamb from "@/public/svg/lamb";
import Select from "@/public/svg/select";
import { Beef1 } from "@/public/svg";

type Item = {
  name: string;
  price: number;
  desc: string;
  image: string;
};

type Props = { items: Item[] };

const BeefAndLamb: FC<Props> = ({ items }) => {
  const [state, setState] = useState("beef");
  const [index, setIndex] = useState(0);
  const buttonX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="md:flex mt-[55px] border-t-2 border-lineBorder">
      <div className="md:w-1/2 items-start">
        <div className="relative flex justify-center items-center ">
          <Image
            src="/images/beefBackground.png"
            alt="backgroundImage"
            width="2000"
            className="w-full"
            height="353"
            quality={100}
          />
          <div className="absolute lg:flex hidden">
            {buttonX?.map((val: number) => {
              return (
                <button
                  key={val}
                  onClick={() => setIndex(val)}
                  className={`${
                    val === 1 && state === "beef" && "top-[190px] left-[68%]"
                  } ${
                    val === 2 && state === "beef" && "top-[90px] left-[70%]"
                  } ${val !== index && "hover:scale-125"} absolute`}>
                  <Select color={val === index ? "#FFFFFF" : "#808080"} />
                </button>
              );
            })}
            {state === "beef" && index === 0 ? (
              <Beef />
            ) : state === "beef" && index === 1 ? (
              <Beef1 />
            ) : state === "beef" && index === 2 ? (
              <></>
            ) : state === "beef" && index === 3 ? (
              <></>
            ) : state === "beef" && index === 4 ? (
              <></>
            ) : state === "beef" && index === 5 ? (
              <></>
            ) : state === "beef" && index === 6 ? (
              <></>
            ) : state === "beef" && index === 7 ? (
              <></>
            ) : state === "beef" && index === 8 ? (
              <></>
            ) : state === "beef" && index === 9 ? (
              <></>
            ) : state === "beef" && index === 10 ? (
              <></>
            ) : (
              <></>
            )}
            {state === "lamb" ? <Lamb /> : <></>}
          </div>
        </div>
      </div>
      <div className="md:w-1/2 px-8 md:px-0 sm:px-28">
        <div className="md:mt-[25px] md:ml-[33px] flex flex-col md:w- lg:w-1/2">
          <span className="max-w-[170px] 2xl:max-w-[220px] xl:max-w-[190px] uppercase font-[800] text-mainColor 2xl:text-[18px] xl:text-[16px] text-[14px] text-wrap leading-[16px]">
            Get an excellent selection of beef with our beef boxes!
          </span>
          <div className="flex flex-row justify-between mt-[20px] p-[5px]">
            <button
              onClick={() => setState("beef")}
              className={`2xl:h-[50px] xl:h-[40px] lg:h-[30px] h-[30px] w-1/2 ${
                state === "beef" ? "bg-mainColor" : "bg-[#FAFAFA]"
              } flex items-center justify-center rounded-[10px]`}>
              <span
                className={`font-bold uppercase text-xs text-center 2xl:text-[16px] xl:text-[14px] ${
                  state === "beef" ? "text-white" : "text-[#808080]"
                }`}>
                beef
              </span>
            </button>
            <button
              onClick={() => setState("lamb")}
              className={`2xl:h-[50px] xl:h-[40px] lg:h-[30px] h-[30px] w-1/2 ${
                state === "lamb" ? "bg-mainColor" : "bg-[#FAFAFA]"
              } flex items-center justify-center rounded-[10px]`}>
              <span
                className={`font-bold uppercase text-xs text-center 2xl:text-[16px] xl:text-[14px] ${
                  state === "lamb" ? "text-white" : "text-[#808080]"
                }`}>
                Lamb
              </span>
            </button>
          </div>
          <div className="mt-[10px] m-[5px]">
            {items.map((item, index) => {
              return (
                <div
                  className="p-[5px] flex rounded-[15px] mt-[5px] flex-row bg-[#FAFAFA]"
                  key={index}>
                  <Image
                    src={item?.image}
                    style={{ objectFit: "cover" }}
                    alt="cardImage"
                    width="2000"
                    className="w-[86px] h-[86px] rounded-[8.6px]"
                    height="353"
                    quality={100}
                  />
                  <div className="flex-row flex w-full py-[20px] justify-between">
                    <div className="flex flex-col pl-[15px]">
                      <span className="text-[14px] leading-[16px] text-[#3B393A] font-[800]">
                        {item?.name}
                      </span>
                      <span className="text-[#3B393A] font-[600] text-xs mt-[10px] leading-[15px]">
                        {item?.desc}
                      </span>
                    </div>
                    <span className="pr-[5px] text-[#3B393A] text-xs font-bold leading-[18px]">
                      ${item?.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeefAndLamb;
