import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import Container from "@/components/layouts/Container";
import "./vision.scss";

type Props = {};

const Vision = (props: Props) => {
  return (
    <>
      <div className="section vision_section">
        <Container>
          <SectionHeader
            title={
              <>
                “We are the best furniture company in{" "}
                <span className="section_header_title_accentText">Texas</span>.
                we always{" "}
                <span className="section_header_title_accentText">
                  prioritize our clients{" "}
                </span>
                wishes.”
              </>
            }
            subtitle="OUR VISION"
          />
        </Container>{" "}
      </div>
    </>
  );
};

export default Vision;
