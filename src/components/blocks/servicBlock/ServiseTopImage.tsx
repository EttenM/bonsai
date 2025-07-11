import Image from "next/image";
import React from "react";

type Props = {
  url: any;
  alt: string;
};

const ServiseTopImage = ({ url, alt }: Props) => {
  return (
    <div className="service-top-image-container">
      <Image src={url} alt={alt} className="service-top-image" />
    </div>
  );
};

export default ServiseTopImage;
