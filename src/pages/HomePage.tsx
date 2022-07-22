import React, { useState } from "react";

import useFetch from "../util/useFetch";
import MainCard from "../components/MainCard";
import InfoCard from "../components/InfoCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { mapCatImageNameInfo } from "../util/mapInfo";
import { CatBreedSearchedData } from "../types";

const HomePage = () => {
  const [imgLoaded, setImgLoaded] = useState(0);
  const { loading, error, data } = useFetch("/api/cats/");

  const setImgLoadedCount = () => {
    setImgLoaded(imgLoaded + 1);
  };

  const sorted = data?.mostPopularBreeds
    ? data?.mostPopularBreeds?.sort(
        (a: CatBreedSearchedData, b: CatBreedSearchedData) =>
          b.searched - a.searched
      )
    : [];
  const mapped = mapCatImageNameInfo(sorted);

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <>
      {(loading || imgLoaded < 8) && <Loader />}
      <div
        className={
          loading || imgLoaded < 8 ? "home-page--loading" : "home-page"
        }
      >
        <MainCard data={mapped} cb={setImgLoadedCount} />
        <InfoCard cb={setImgLoadedCount} />
      </div>
    </>
  );
};

export default HomePage;
