import { getLocale } from "next-intl/server";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const locale = getLocale();
  return <div>its page on {locale}</div>;
};

export default page;
