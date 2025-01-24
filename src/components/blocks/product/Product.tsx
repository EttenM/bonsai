import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import "./product.scss";

import React from "react";
import ProductSlider from "./ProductSlider";

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
        <p className="product_text">
          Find a variety of furniture products that you want
        </p>
      </div>

      <ProductSlider />
    </div>
  );
};

export default Product;
