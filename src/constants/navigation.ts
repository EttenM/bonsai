import { useTranslations } from "next-intl";

const t = useTranslations("HomePage.Header");

export const nav = [
  { label: t("Home"), path: "/" },
  { label: t("Sevice"), path: "/" },
  { label: t("Collections"), path: "/" },
  { label: t("Contact"), path: "/" },
];
