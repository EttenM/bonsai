"use client";
import { useGSAP } from "@gsap/react";
import { fadeInAnimation } from "@/service/fadeInAnim";
import { useRef } from "react";
type Props = {};

const ProductSubtitle = (props: Props) => {
  const targetRef = useRef(null);
  useGSAP(() => {
    fadeInAnimation(targetRef.current);
  }, []);
  return (
    <p className="product_text" ref={targetRef}>
      Find a variety of furniture products that you want
    </p>
  );
};

export default ProductSubtitle;
