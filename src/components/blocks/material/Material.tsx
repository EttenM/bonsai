import Image from "next/image";
import React from "react";
import image_1 from "@/img/material/image1.png";
import image_2 from "@/img/material/image2.png";
import image_3 from "@/img/material/image3.png";
import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import Container from "@/components/layouts/Container";
import "./material.scss";
import ButtonLink from "@/components/ui/button/ButtonLink";
type Props = {};

const Material = (props: Props) => {
  return (
    <div className="section_material">
      <div className="material_block1 material_block_wrapper">
        <SectionHeader
          title={<>“Special materials to make good furniture”</>}
          subtitle="MATERIAL"
        />

        <Image src={image_1} alt="material_image1" className="material_image" />
      </div>
      <Image
        src={image_2}
        alt="material_image2"
        className="material_block2 material_image"
      />
      <div className="material_block3 material_block_wrapper">
        <Image src={image_3} alt="material_image3" className="material_image" />
        <div className="material_description">
          <p className="material_text">
            In building furniture we are always confident to make customers
            always satisfied with our work, therefore we have a good value
            rating
          </p>
          <ButtonLink className="material_button" text="See materials" />
        </div>
      </div>
    </div>
  );
};

export default Material;
