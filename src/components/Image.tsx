import React, { useState } from "react";

const Image = ({
  src,
  alt = "cat",
  classes = [],
  noLoader = false,
}: {
  src: string;
  alt?: string;
  classes?: string[];
  noLoader?: boolean;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        className={`${[loaded ? "loaded" : "", ...classes].join(" ")}`}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
      {!noLoader && !loaded && <span className="image-loader"></span>}
    </>
  );
};

export default Image;
