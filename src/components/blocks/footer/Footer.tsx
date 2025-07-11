"use client";
import React from "react";
import "./footer.scss";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
type Props = {};

const Footer = (props: Props) => {
  const t = useTranslations("HomePage.Footer");
  const keys1 = ["Shop", "Categories", "Collections", "Blog"];
  const keys2 = ["Call", "OnlineChat", "Email", "Blog"];

  const handlSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <footer className="footer">
      <div className="footer_news">
        <p>{t("enterEmail")}</p>
        <form action="" onSubmit={handlSubmit} className="footer_news_form">
          <input type="email" placeholder={t("placeholder")} />
          <button type="submit">{t("submit")}</button>
        </form>
      </div>
      <nav className="footer_navigation">
        <ul className="footer_navigation_list">
          {keys1.map((key) => (
            <li key={key} className="footer_navigation_list_link">
              {t(`${key}`)}
            </li>
          ))}
        </ul>
        <ul className="footer_navigation_list">
          {keys2.map((key) => (
            <li key={key} className="footer_navigation_list_link">
              {t(`${key}`)}
            </li>
          ))}
        </ul>
        <div className="footer_social">
          <div className="footer_logo">Bonsai</div>
          <div className="footer_social_inner">
            <p>{t("SocialMedia")}</p>
            <ul className="footer_social_inner_links">
              <li>
                <Twitter />
              </li>
              <li>
                <Facebook />
              </li>
              <li>
                <Instagram />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
