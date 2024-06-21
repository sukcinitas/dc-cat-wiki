import React from "react";

import "../sass/Paragraph.scss";

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="paragraph">{children}</p>
);

export default Paragraph;
