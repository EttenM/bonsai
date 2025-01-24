"use client";
import React, { useRef } from "react";
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";

import image_1 from "@/img/products/image1.png";
import image_2 from "@/img/products/image2.png";
import image_3 from "@/img/products/image3.png";
import image_4 from "@/img/products/image4.png";
import image_5 from "@/img/products/image5.png";
import image_6 from "@/img/products/image6.png";
import Image from "next/image";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

type Props = {};

const ProductSlider = (props: Props) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const productData = [
    {
      id: 1,
      img: image_1,

      title: "Sofa",
      quantity: 22,
    },
    {
      id: 2,
      img: image_2,

      title: "Bookshelf",
      quantity: 7,
    },
    {
      id: 3,
      img: image_3,

      title: "Chair Package",
      quantity: 41,
    },
    {
      id: 4,
      img: image_4,

      title: "Work desk",
      quantity: 15,
    },
    {
      id: 4,
      img: image_5,

      title: "Bed",
      quantity: 10,
    },
    {
      id: 4,
      img: image_6,

      title: "Kitchen",
      quantity: 9,
    },
  ];
  return (
    <div className="product_slider">
      <Swiper
        className="mySwiper"
        grabCursor={true}
        // loop={true}
        slidesPerView={"auto"}
        // spaceBetween={15}
        freeMode={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[FreeMode, Navigation]}
      >
        {productData.map((product) => (
          <SwiperSlide>
            <div className="swiper-slide_inner">
              <Image src={product.img} alt={`${product.title} img`} />
              <div className="swiper-slide_text">
                <p>{product.title}</p>
                <p>{product.quantity} items</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-navigation">
          <div className="swiper-button-prev" ref={prevRef}>
            <ArrowLeftCircleIcon />
          </div>
          <div className="swiper-button-next" ref={nextRef}>
            <ArrowRightCircleIcon />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
