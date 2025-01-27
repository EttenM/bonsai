"use client";
import Image from "next/image";
import image1 from "@/img/hero/image1.png";
import image2 from "@/img/hero/image2.png";
import "./hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
gsap.registerPlugin(useGSAP);
type Props = {};

const Hero = (props: Props) => {
  const t = useTranslations("HomePage.Hero");
  const title = t("title").split(" ");
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero_image1_container",
      {
        xPercent: -100,
      },
      {
        visibility: "visible",
        xPercent: 0,
        duration: 1.5,
        ease: "ease",
      },
      "1"
    )
      .fromTo(
        ".hero_image2_container",
        {
          xPercent: 100,
        },
        {
          visibility: "visible",
          xPercent: 0,
          duration: 1.5,
          ease: "ease",
        },
        "1"
      )
      .to(
        ".hero_title span",
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.25,
          ease: "sine",
        },
        "2"
      )
      .to(
        ".hero_description",
        {
          opacity: 1,
          duration: 0.5,
          ease: "sine",
        },
        "3"
      )
      .fromTo(
        ".header",
        {
          yPercent: -100,
        },
        {
          visibility: "visible",
          yPercent: 0,
          duration: 0.5,
          ease: "sine",
        },
        "3"
      );
  }, []);
  return (
    <section className="hero_section">
      <div className="hero_image1_container">
        <Image
          src={image1}
          alt="hero_image1"
          className="hero_image1"
          priority
        />
      </div>
      <div className="hero_image2_container">
        <Image
          src={image2}
          alt="hero_image2"
          className="hero_image2"
          priority
        />
      </div>

      <h1 className="hero_title">
        {title.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
        {/* {t("title")} */}
        {/* <span>create</span> <span>your</span> <span>interior</span>{" "}
        <span>space.</span> */}
      </h1>

      <div className="hero_description">
        <h3 className="hero_description_title">
          {t("hero_description_title")}
          {/* Customized furniture  */}
        </h3>
        <p className="hero_description_text">
          {t("hero_description_text")}
          {/* In building furniture we are always confident to make customers always
          satisfied with our work, therefore we have a good value rating */}
        </p>
      </div>
    </section>
  );
};

export default Hero;
