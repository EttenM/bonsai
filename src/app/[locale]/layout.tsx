import type { Metadata } from "next";
import { Jacques_Francois, Inter } from "next/font/google";
import "@/styles/index.scss";
import Header from "@/components/blocks/header/Header";
import Footer from "@/components/blocks/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={` ${inter.className} ${jacques_francois.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Header lang={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
