import Image from "next/image";
import React, { useRef } from "react";
import image_1 from "@/img/material/image1.png";
import image_2 from "@/img/material/image2.png";
import image_3 from "@/img/material/image3.png";
import SectionHeader from "@/components/components/sectionHeader/SectionHeader";

import "./material.scss";

import MaterialDescription from "./MaterialDescription";
import { useTranslations } from "next-intl";
type Props = {};

const Material = (props: Props) => {
  const t = useTranslations("HomePage.Materials");

  return (
    <div className="section_material">
      <div className="material_block1 material_block_wrapper">
        <SectionHeader title={<>{t("title")}</>} subtitle={t("subtitle")} />

        <Image src={image_1} alt="material_image1" className="material_image" />
      </div>
      <Image
        src={image_2}
        alt="material_image2"
        className="material_block2 material_image"
      />
      <div className="material_block3 material_block_wrapper">
        <Image src={image_3} alt="material_image3" className="material_image" />
        <MaterialDescription button={t("button")} text={t("text")} />
      </div>
    </div>
  );
};

export default Material;
