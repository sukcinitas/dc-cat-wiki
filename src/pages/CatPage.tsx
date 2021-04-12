import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import CatInfoCard from '../components/CatInfoCard';
import OtherPhotos from '../components/OtherPhotos';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { mapCatInfo, mapCatImageInfo } from '../util/mapInfo';
import { CatInfo } from '../types';

const CatPage = () => {
  const { breedId } = useParams<{breedId: string}>() || window.location.pathname.split('/')[2];
  const [imgLoaded, setImgLoaded] = useState(0);
  const [length, setLength] = useState(0);
  const [catInfo, setCatInfo] = useState<CatInfo>(
    {
      url: '',
      name: '',
      description: '',
      qualities: {
        textQualities: {
          temperament: '',
          origin: '',
          life_span: '',
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
    }
  );
  const [catImageInfo, setCatImageInfo] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const getCatImageInfo = async (breedId: string): Promise<void> => {
      axios.get(`/api/cats/images?breedId=${breedId}&limit=9`).then(
        (res) => {
          const { data: { success, catInfo, message } } = res;
          if (success) {
            const firstElem = mapCatInfo(catInfo[0]);
            setCatInfo(firstElem);
            setCatImageInfo(mapCatImageInfo(catInfo));
            setLength(catInfo.length);
            setLoading(false);
          } else {
            setError(message);
          }
        },
        (err) => {
          setLoading(false);
          setError(
            err.response.data.message ||
              `${err.response.status}: ${err.response.statusText}`,
          );
        },
      );
    };
    getCatImageInfo(breedId);
  }, [breedId]);

  const setImgLoadedCount = () => {
    setImgLoaded(imgLoaded + 1);
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>
  }

   return (
     <>
     {(loading || imgLoaded < length) && <Loader />}
     <div className={(loading || imgLoaded < length) ? 'cat-page--loading' : 'cat-page'}>
        <CatInfoCard catInfo={catInfo} cb={setImgLoadedCount} />
        <OtherPhotos catImageInfo={catImageInfo} cb={setImgLoadedCount} />
      </div>
     </>
   )
}

export default CatPage;