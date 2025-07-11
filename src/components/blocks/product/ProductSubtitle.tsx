"use client";
import { useGSAP } from "@gsap/react";
import { fadeInAnimation } from "@/service/fadeInAnim";
import { useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
type Props = { text: string };

const ProductSubtitle = ({ text }: Props) => {
  const targetRef = useRef(null);
  useGSAP(() => {
    fadeInAnimation(targetRef.current);
  }, []);
  return (
    <p className="product_text" ref={targetRef}>
      {text}
    </p>
  );
};

export default ProductSubtitle;
