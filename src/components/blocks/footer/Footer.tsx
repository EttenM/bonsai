"use client";
import React from "react";
import "./footer.scss";
import { Facebook, Instagram, Twitter } from "lucide-react";
type Props = {};

const Footer = (props: Props) => {
  const handlSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <footer className="footer">
      <div className="footer_news">
        <p>Enter your email to get the latest news</p>
        <form action="" onSubmit={handlSubmit} className="footer_news_form">
          <input type="email" placeholder="Your email address" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <nav className="footer_navigation">
        <ul className="footer_navigation_list">
          <li className="footer_navigation_list_link">Shop</li>
          <li className="footer_navigation_list_link">Categories</li>
          <li className="footer_navigation_list_link">Collections</li>
          <li className="footer_navigation_list_link">Blog</li>
        </ul>
        <ul className="footer_navigation_list">
          <li className="footer_navigation_list_link">Call</li>
          <li className="footer_navigation_list_link">Online Chat</li>
          <li className="footer_navigation_list_link">Email</li>
          <li className="footer_navigation_list_link">Blog</li>
        </ul>
        <div className="footer_social">
          <div className="footer_logo">Bonsai</div>
          <div className="footer_social_inner">
            <p>Social Media</p>
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
