import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import Container from "@/components/layouts/Container";
import "./vision.scss";
import { useTranslations } from "next-intl";

type Props = {};

const Vision = (data: any) => {
  // console.log("visionData", data);
  const vision_data = data.data.landingPages.nodes[0].visionBlock;

  return (
    <>
      <div className="section vision_section">
        <Container>
          <SectionHeader
            title={vision_data.title}
            subtitle={
              // t("subtitle")
              vision_data.subtitle
            }
          />
        </Container>{" "}
      </div>
    </>
  );
};

export default Vision;
{
  /* “We are the best furniture company in{" "}
                <span className="section_header_title_accentText">Texas</span>.
                we always{" "}
                <span className="section_header_title_accentText">
                  prioritize our clients{" "}
                </span>
                wishes.” */
}
