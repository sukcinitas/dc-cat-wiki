import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CatInfoCard from "../components/CatInfoCard";
import OtherPhotos from "../components/OtherPhotos";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { mapCatInfo, mapCatImageInfo } from "../util/mapInfo";
import useFetch from "../util/useFetch";
import { CatInfo } from "../types";

const CatPage = () => {
  const { breedId } =
    useParams<{ breedId: string }>() || window.location.pathname.split("/")[2];
  const [imgLoaded, setImgLoaded] = useState(0);
  const { loading, error, data } = useFetch(
    `/api/cats/images?breedId=${breedId}&limit=9`
  );
  const catInfo: CatInfo = data?.catInfo?.[0]
    ? mapCatInfo(data?.catInfo?.[0])
    : {
        url: "",
        name: "",
        description: "",
        qualities: {
          textQualities: {
            temperament: "",
            origin: "",
            life_span: "",
          },
          numberQualities: {
            adaptability: 0,
            affection_level: 0,
            child_friendly: 0,
            grooming: 0,
            intelligence: 0,
            health_issues: 0,
            social_needs: 0,
            stranger_friendly: 0,
          },
        },
      };
  const catImageInfo: Array<string> = data?.catInfo
    ? mapCatImageInfo(data?.catInfo)
    : [];
  const length: number = data?.catInfo?.length ? data.catInfo.length : 0;

  const setImgLoadedCount = () => {
    setImgLoaded(imgLoaded + 1);
  };

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <>
      {(loading || imgLoaded < length) && <Loader />}
      <div
        className={
          loading || imgLoaded < length ? "cat-page--loading" : "cat-page"
        }
      >
        <CatInfoCard catInfo={catInfo} cb={setImgLoadedCount} />
        <OtherPhotos catImageInfo={catImageInfo} cb={setImgLoadedCount} />
      </div>
    </>
  );
};

export default CatPage;
