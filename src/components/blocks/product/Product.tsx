"use server";
import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import "./product.scss";

import React from "react";
import ProductSlider from "./ProductSlider";

import ProductSubtitle from "./ProductSubtitle";
import { useTranslations } from "next-intl";

type Props = {};

const Product = (props: Props) => {
  const t = useTranslations("HomePage.Products");

  return (
    <div className="product_section">
      <div className="product_section_content">
        <div className="product_header_wrapper">
          <SectionHeader
            title={
              <>
                {t.rich("title", {
                  accent: (chunks) => (
                    <span className="section_header_title_accentText">
                      {chunks}
                    </span>
                  ),
                })}
              </>
            }
            subtitle={t("subtitle")}
          />
        </div>
        <ProductSubtitle text={t("text")} />
      </div>

      <ProductSlider />
    </div>
  );
};

export default Product;
