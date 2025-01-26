"use client";
import ButtonLink from "@/components/ui/button/ButtonLink";
import { fadeInAnimation } from "@/service/fadeInAnim";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
gsap.registerPlugin(useGSAP);
type Props = {};

const MaterialDescription = (props: Props) => {
  const targetRef = useRef(null);
  useGSAP(() => {
    fadeInAnimation(targetRef.current);
  }, []);
  return (
    <div className="material_description" ref={targetRef}>
      <p className="material_text">
        In building furniture we are always confident to make customers always
        satisfied with our work, therefore we have a good value rating
      </p>
      <ButtonLink className="material_button" text="See materials" />
    </div>
  );
};

export default MaterialDescription;
