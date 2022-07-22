import React from "react";

import "../sass/Heading.scss";

const Heading = ({
  children,
  type,
  cb,
}: {
  children: React.ReactNode;
  type?: string;
  cb?: () => void;
}) => {
  let heading;
  if (type === "small") {
    heading = (
      <h4 onClick={cb} className="heading heading--small">
        {children}
      </h4>
    );
  } else if (type === "small-bold") {
    heading = <h2 className="heading heading--small-bold">{children}</h2>;
  } else if (type === "with-line") {
    heading = <h2 className="heading heading--with-line">{children}</h2>;
  } else {
    heading = <h2 className="heading">{children}</h2>;
  }
  return heading;
};

export default Heading;
