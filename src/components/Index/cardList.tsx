"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Container from "./container";

type Item = {
  name: string;
  price: number;
  desc: string;
  image: string;
};

type Props = { items: Item[] };

const CardList: FC<Props> = ({ items }) => {
  return (
    <Container className="md:flex  hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        effect="cards"
        slidesPerView={4}
        navigation
        grabCursor
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <>
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={item?.image}
                  className="h-[256px] rounded-[12px] object-cover"
                  alt="cardImage"
                  width="2000"
                  height="600"
                  quality={100}
                />
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </Container>
  );
};

export default CardList;
