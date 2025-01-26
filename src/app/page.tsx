import Hero from "@/components/blocks/hero/Hero";
import Vision from "@/components/blocks/vision/Vision";
import LigthLayout from "@/components/layouts/LigthLayout";
import Service from "@/components/blocks/servicBlock/Service";
import Material from "@/components/blocks/material/Material";
import Product from "@/components/blocks/product/Product";
import Work from "@/components/blocks/Work/Work";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <LigthLayout>
        <Service />
        <Material />
      </LigthLayout>
      <Product />
      <Work />
    </>
  );
}
