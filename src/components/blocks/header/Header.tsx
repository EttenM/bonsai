import Container from "@/components/layouts/Container";
import { nav } from "@/constants/navigation";
import Link from "next/link";
import React from "react";
import "./header.scss";
import ButtonLink from "@/components/ui/button/ButtonLink";
type Props = {};

const Header = (props: Props) => {
  return (
    <Container>
      <header className="header">
        <div className="header_inner">
          <Link href="/" className="logo">
            Bonsai
          </Link>

          <nav className="header_navigation">
            {nav.map((item, index) => (
              <Link key={index} href={item.path} className="navigation_link">
                {item.label}
              </Link>
            ))}
          </nav>

          <ButtonLink className="header_button" text="Shop Now"></ButtonLink>
        </div>
      </header>
    </Container>
  );
};

export default Header;
