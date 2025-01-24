import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  className: any;
};

const ButtonLink = ({ text, className }: Props) => {
  return (
    <Link href="#" className={className}>
      {text}
    </Link>
  );
};

export default ButtonLink;
