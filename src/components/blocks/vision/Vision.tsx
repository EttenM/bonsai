import SectionHeader from "@/components/components/sectionHeader/SectionHeader";
import Container from "@/components/layouts/Container";
import "./vision.scss";
import { useTranslations } from "next-intl";

type Props = {};

const Vision = (props: Props) => {
  const t = useTranslations("HomePage.Vision");
  return (
    <>
      <div className="section vision_section">
        <Container>
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
