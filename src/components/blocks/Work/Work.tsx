"use client";
import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import React, { useRef } from "react";
import "./work.scss";
import ButtonLink from "@/components/ui/button/ButtonLink";
import { useGSAP } from "@gsap/react";
import { fadeInAnimation } from "@/service/fadeInAnim";
type Props = {};

const Work = (props: Props) => {
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
              “Would you like to{" "}
              <span className="section_header_title_accentText">discuss</span>{" "}
              with us about your amazing project?”
            </>
          }
          subtitle="Work"
        />
      </div>
      <div className="work_text" ref={targetRef}>
        <p>Contact us below to work together to build your amazing project.</p>
        <ButtonLink className="work_button" text="Contact Us" />
      </div>
    </div>
  );
};

export default Work;
