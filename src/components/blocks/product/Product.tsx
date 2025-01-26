"use server";
import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import "./product.scss";

import React from "react";
import ProductSlider from "./ProductSlider";

import ProductSubtitle from "./ProductSubtitle";

type Props = {};

const Product = (props: Props) => {
  return (
    <div className="product_section">
      <div className="product_section_content">
        <div className="product_header_wrapper">
          <SectionHeader
            title={
              <>
                “Choose your{" "}
                <span className="section_header_title_accentText">product</span>{" "}
                category.”
              </>
            }
            subtitle="PRODUCT"
          />
        </div>
        <ProductSubtitle />
      </div>

      <ProductSlider />
    </div>
  );
};

export default Product;
