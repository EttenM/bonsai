import React from "react";

type PropsWithChildren = {
  children: React.ReactNode;
};

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container">{children}</div>;
};

export default Container;
