import React from "react";

import useFetch from "../util/useFetch";
import MainCard from "../components/MainCard";
import InfoCard from "../components/InfoCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { mapCatImageNameInfo } from "../util/mapInfo";
import { CatBreedSearchedData } from "../types";

const HomePage = () => {
  const { loading, error, data } = useFetch("/api/cats/");

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
      {loading && <Loader />}
      <div className={loading ? "home-page--loading" : "home-page"}>
        <MainCard data={mapped} />
        <InfoCard />
      </div>
    </>
  );
};

export default HomePage;
