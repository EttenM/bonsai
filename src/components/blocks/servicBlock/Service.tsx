"use client";
import React, { useRef } from "react";
import "./service.scss";
import VisionImage from "./ServiseTopImage";
import ServiseTopGallery from "./ServiseTopGallery";
import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import Image from "next/image";
import image_1 from "@/img/service_block/image1.png";
import image_2 from "@/img/service_block/image2.png";
import image_3 from "@/img/service_block/image3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInAnimation } from "@/service/fadeInAnim";
import { useTranslations } from "next-intl";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
type Props = {};

const Service = (props: Props) => {
  const t = useTranslations("HomePage.Service");

  const targetRef = useRef(null);
  const galleryRef = useRef(null);
  useGSAP(() => {
    fadeInAnimation(targetRef.current);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 641px)", () => {
      // desktop setup code here...
      const serviceImageTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".service_image_wrapper",
          start: "+=25% bottom",
          end: "center top",
          scrub: 1,
        },
      });
      serviceImageTl
        .fromTo(
          ".service_image-2",
          { yPercent: 60, ease: "ease" },
          {
            yPercent: 0,
            ease: "ease",
          },
          "same"
        )
        .fromTo(
          ".service_image-1",
          { xPercent: -40, yPercent: 20, ease: "ease" },
          { xPercent: 0, yPercent: 0, ease: "ease" },
          "same"
        )
        .fromTo(
          ".service_image-3",
          { xPercent: 40, yPercent: 20, ease: "ease" },
          { xPercent: 0, yPercent: 0, ease: "ease" },
          "same"
        )
        .to(
          ".service_image-1",

          { yPercent: -40, ease: "ease" },
          "same2"
        )
        .to(
          ".service_image-3",

          { yPercent: -40, ease: "ease" },
          "same2"
        );
    });

    mm.add("(max-width: 640px)", () => {
      const serviceImageTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".service_image_wrapper",
          start: "+=25% bottom",
          end: "center center",
          scrub: 1,
        },
      });
      serviceImageTl
        .fromTo(
          ".service_image-2",
          { yPercent: 60, ease: "ease" },
          {
            yPercent: 0,
            ease: "ease",
          },
          "same"
        )
        .fromTo(
          ".service_image-1",
          { xPercent: -40, yPercent: 20, ease: "ease" },
          { xPercent: 0, yPercent: 0, ease: "ease" },
          "same"
        )
        .fromTo(
          ".service_image-3",
          { xPercent: 40, yPercent: 20, ease: "ease" },
          { xPercent: 0, yPercent: 0, ease: "ease" },
          "same"
        );
    });
  }, []);
  return (
    <div className="service">
      <ServiseTopGallery />
      <div className="service_content">
        <div className="service_header_wrapper">
          <SectionHeader
            title={
              <>
                {" "}
                {t.rich("title", {
                  accent: (chunks) => (
                    <span className="section_header_title_accentText">
                      {chunks}
                    </span>
                  ),
                })}
              </>
            }
            subtitle={t("subtitle")}
          />
        </div>
        <h3 className="service_description_text" ref={targetRef}>
          {t("text")}
        </h3>
      </div>
      <div className="service_image_wrapper" ref={galleryRef}>
        <Image
          src={image_1}
          alt="service_image service_image-1"
          className="service_image service_image-1"
        />
        <Image
          src={image_2}
          alt="service_image service_image-2"
          className="service_image service_image-2"
        />
        <Image
          src={image_3}
          alt="service_image service_image-3"
          className="service_image service_image-3"
        />
      </div>
    </div>
  );
};

export default Service;
