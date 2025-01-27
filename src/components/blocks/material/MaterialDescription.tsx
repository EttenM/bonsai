"use client";
import ButtonLink from "@/components/ui/button/ButtonLink";
import { fadeInAnimation } from "@/service/fadeInAnim";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";
gsap.registerPlugin(useGSAP);
type Props = {
  text: string;
  button: string;
};

const MaterialDescription = ({ text, button }: Props) => {
  const targetRef = useRef(null);
  useGSAP(() => {
    fadeInAnimation(targetRef.current);
  }, []);
  return (
    <div className="material_description" ref={targetRef}>
      <p className="material_text">{text}</p>
      <ButtonLink className="material_button" text={button} />
    </div>
  );
};

export default MaterialDescription;
