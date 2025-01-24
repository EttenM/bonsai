import type { Metadata } from "next";
import { Jacques_Francois, Inter } from "next/font/google";
import "@/styles/index.scss";
import Header from "@/components/blocks/header/Header";
import Footer from "@/components/blocks/footer/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
});
const jacques_francois = Jacques_Francois({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bonsai",
  description: "Best furniture company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} ${jacques_francois.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
