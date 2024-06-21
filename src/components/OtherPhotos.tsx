import React from "react";

import Heading from "./Heading";
import Image from "./Image";
import "../sass/OtherPhotos.scss";

const OtherPhotos = ({ catImageInfo }: { catImageInfo: Array<string> }) => {
  const imageList = catImageInfo.map((imageInfo) => (
    <div key={imageInfo} className="relative">
      <Image src={imageInfo} classes={["photos__photo"]} />
    </div>
  ));
  return (
    <section className="photos">
      <Heading type="small">Other photos</Heading>
      <div className="photos__grid">{imageList}</div>
    </section>
  );
};

export default OtherPhotos;
