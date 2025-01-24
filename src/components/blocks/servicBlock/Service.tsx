import React from "react";
import "./service.scss";
import VisionImage from "./ServiseTopImage";
import ServiseTopGallery from "./ServiseTopGallery";
import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import Image from "next/image";
import image_1 from "@/img/service_block/image1.png";
import image_2 from "@/img/service_block/image2.png";
import image_3 from "@/img/service_block/image3.png";
type Props = {};

const Service = (props: Props) => {
  return (
    <div className="service">
      <ServiseTopGallery />
      <div className="service_content">
        <div className="service_header_wrapper">
          <SectionHeader
            title={<>“Good design has perfect results.”</>}
            subtitle="SERVICE"
          />
        </div>
        <h3 className="service_description_text">
          Build your interior design customization with our greatest designers
          to become extraordinary masterpieces.
        </h3>
      </div>
      <div className="service_image_wrapper">
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
