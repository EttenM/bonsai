"use client";
import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import React, { useRef } from "react";
import "./work.scss";
import ButtonLink from "@/components/ui/button/ButtonLink";
import { useGSAP } from "@gsap/react";
import { fadeInAnimation } from "@/service/fadeInAnim";
import gsap from "gsap";
import { useTranslations } from "next-intl";
gsap.registerPlugin(useGSAP);
type Props = {};

const Work = (props: Props) => {
  const t = useTranslations("HomePage.Work");

  const targetRef = useRef(null);
  useGSAP(() => {
    fadeInAnimation(targetRef.current);
  }, []);
  return (
    <div className="work_section">
      <div className="work_header_wrapper">
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
      <div className="work_text" ref={targetRef}>
        <p>{t("text")}</p>
        <ButtonLink className="work_button" text={t("button")} />
      </div>
    </div>
  );
};

export default Work;
