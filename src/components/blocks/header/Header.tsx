import Container from "@/components/layouts/Container";
import { nav } from "@/constants/navigation";
import Link from "next/link";
import React from "react";
import styles from "./header.module.scss";
import ButtonLink from "@/components/ui/button/ButtonLink";
type Props = {};

const Header = (props: Props) => {
  return (
    <Container>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Bonsai
        </Link>

        <nav className={styles.header_navigation}>
          {nav.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={styles.navigation_link}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink
          className={styles.header_button}
          text="Shop Now"
        ></ButtonLink>
      </header>
    </Container>
  );
};

export default Header;
