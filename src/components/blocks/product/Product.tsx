// "use server";
"use client";
import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import "./product.scss";

import React from "react";
import ProductSlider from "./ProductSlider";

import ProductSubtitle from "./ProductSubtitle";
import { useTranslations } from "next-intl";

type Props = {};

const Product = (data: any) => {
  const t = useTranslations("HomePage.Products");
  const products_data = data.data.landingPages.nodes[0].productsBlock;

  console.log("products_data", products_data);
  return (
    <div className="product_section">
      <div className="product_section_content">
        <div className="product_header_wrapper">
          <SectionHeader
            title={products_data.productTitle}
            subtitle={products_data.productSubtitle}
          />
        </div>
        <ProductSubtitle text={products_data.productText} />
      </div>

      <ProductSlider data={products_data.productItem} />
    </div>
  );
};

export default Product;
