import Image from "next/image";
import React from "react";

type Props = {
  url: any;
  alt: string;
};

const ServiseTopImage = ({ url, alt }: Props) => {
  return <Image src={url} alt={alt} className="service-top-image" />;
};

export default ServiseTopImage;
