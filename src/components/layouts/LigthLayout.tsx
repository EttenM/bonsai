import React from "react";

type PropsWithChildren = {
  children: React.ReactNode;
};

const LigthLayout = ({ children }: PropsWithChildren) => {
  return <div className="light_layout">{children}</div>;
};

export default LigthLayout;
