import React from "react";

import Heading from "../components/Heading";

const ReadMorePage = () => {
  return (
    <div className="read-more-page">
      <Heading type="small-bold">Why should you have a cat?</Heading>
      <a
        className="read-more-page__link"
        href="https://twitter.com/ShouldHaveCat/status/1368253168405123072?s=20"
        target="_blank"
        rel="noreferrer noopener"
      >
        The only one and most important reason
      </a>
    </div>
  );
};

export default ReadMorePage;
