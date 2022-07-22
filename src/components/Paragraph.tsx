import React from "react";

import "../sass/Paragraph.scss";

const Paragraph = ({
  children,
}: {
  children: React.ReactNode;
  type?: string;
}) => <p className="paragraph">{children}</p>;

export default Paragraph;
