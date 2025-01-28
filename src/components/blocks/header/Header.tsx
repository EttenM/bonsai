import Container from "@/components/layouts/Container";
import { nav } from "@/constants/navigation";
// import Link from "next/link";
import { Link, useRouter } from "@/i18n/routing";
import React from "react";
import "./header.scss";
import ButtonLink from "@/components/ui/button/ButtonLink";
import { useTranslations } from "next-intl";
import { ChevronDown, Languages, LucideArrowDownRight } from "lucide-react";
import { Option, Select, selectClasses } from "@mui/joy";
type Props = {
  lang: string;
};

const Header = ({ lang }: Props) => {
  const t = useTranslations("HomePage.Header");
  const keys = ["Home", "Sevice", "Collections", "Contact"] as const;

  return (
    <Container>
      <header className="header">
        <div className="header_inner">
          <Link href="/" className="logo">
            Bonsai
          </Link>

          <nav className="header_navigation">
            {keys.map((key) => (
              <Link key={key} href="/" className="navigation_link">
                {t(`${key}`)}
              </Link>
            ))}
          </nav>

          <Select
            defaultValue={lang}
            indicator={<ChevronDown />}
            color="neutral"
            sx={{
              backgroundColor: "#141313 ",
              borderColor: "#b9a695",
              color: "#b9a695",
              fontSize: "max(14px, 1vw)",
              border: "1px $color solid",
              borderRadius: "0.5em",
              padding: "0.8em 1em",
              "&:hover": { backgroundColor: "#232323" }, // Цвет при наведении
            }}
            size="sm"
          >
            <Option value="en">
              <Link href="/" locale="en" style={{ width: "100%" }}>
                English
              </Link>
            </Option>
            <Option value="ru">
              <Link href="/" locale="ru" style={{ width: "100%" }}>
                Русский
              </Link>
            </Option>
          </Select>
        </div>
      </header>
    </Container>
  );
};

export default Header;
