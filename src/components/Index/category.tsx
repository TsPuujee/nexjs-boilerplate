"use client";
import React, { useState } from "react";
import Container from "./container";
import { useTranslations } from "next-intl";

const Category = () => {
  const [categoryState, setCategoryState] = useState("beef");
  const t = useTranslations("Index");
  return (
    <Container>
      <div className="items-center justify-center flex flex-col">
        <span className="font-[800] mt-[30px] text-[14px] text-mainColor uppercase leading-[14px]">
          {t("categoryTitle")}
        </span>
        <span className="font-[700] mt-[20px] text-[12px] max-w-[578px] text-black leading-[16px] text-center">
          {t("categoryDescription")}
        </span>
      </div>
      <div className="flex flex-row justify-center my-[20px]">
        <button
          onClick={() => setCategoryState("beef")}
          className={`py-[8px] w-[150px] ${
            categoryState === "beef" ? "bg-mainColor" : "bg-[#FAFAFA]"
          } flex items-center justify-center rounded-[10px]`}>
          <span
            className={`font-bold uppercase text-xs text-center ${
              categoryState === "beef" ? "text-white" : "text-[#808080]"
            }`}>
            beef
          </span>
        </button>
        <button
          onClick={() => setCategoryState("mutton")}
          className={`py-[8px] w-[150px] ${
            categoryState === "mutton" ? "bg-mainColor" : "bg-[#FAFAFA]"
          } flex items-center justify-center rounded-[10px]`}>
          <span
            className={`font-bold uppercase text-xs text-center ${
              categoryState === "mutton" ? "text-white" : "text-[#808080]"
            }`}>
            mutton
          </span>
        </button>
        <button
          onClick={() => setCategoryState("frozen_products")}
          className={`py-[8px] w-[150px] ${
            categoryState === "frozen_products"
              ? "bg-mainColor"
              : "bg-[#FAFAFA]"
          } flex items-center justify-center rounded-[10px]`}>
          <span
            className={`font-bold uppercase text-xs text-center ${
              categoryState === "frozen_products"
                ? "text-white"
                : "text-[#808080]"
            }`}>
            frozen products
          </span>
        </button>
      </div>
    </Container>
  );
};

export default Category;
