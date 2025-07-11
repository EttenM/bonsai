"use client";
import React from "react";
import ServiseTopImage from "./ServiseTopImage";
import image_1 from "@/img/vision/image1.png";
import image_2 from "@/img/vision/image2.png";
import image_3 from "@/img/vision/image3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
type Props = {};

const ServiseTopGallery = (props: Props) => {
  const vision_images = [
    {
      img: image_1,
      alt: "vision_image1",
    },
    {
      img: image_2,
      alt: "vision_image2",
    },
    {
      img: image_3,
      alt: "vision_image3",
    },
  ];

  useGSAP(() => {
    const images: any = gsap.utils.toArray(".service-top-image");
    const topGalleryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-top-gallery",
        start: "center bottom",
        toggleActions: "play none play reverse",
      },
    });

    topGalleryTimeline.fromTo(
      ".service-top-image",
      { scale: 1.25 },
      { scale: 1, duration: 0.5, ease: "ease" }
    );
  }, []);
  return (
    <div className="service-top-gallery">
      {vision_images.map((image, index) => (
        <ServiseTopImage url={image.img} alt={image.alt} key={index} />
      ))}{" "}
    </div>
  );
};

export default ServiseTopGallery;
