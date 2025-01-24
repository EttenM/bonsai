import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import React from "react";
import "./work.scss";
import ButtonLink from "@/components/ui/button/ButtonLink";
type Props = {};

const Work = (props: Props) => {
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
      <div className="work_text">
        <p>Contact us below to work together to build your amazing project.</p>
        <ButtonLink className="work_button" text="Contact Us" />
      </div>
    </div>
  );
};

export default Work;
