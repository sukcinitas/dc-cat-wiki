import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MainCard from '../components/MainCard';
import InfoCard from '../components/InfoCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { mapCatImageNameInfo } from '../util/mapInfo';
import { CatBreedSearchedData } from '../types';


const HomePage = () => {
  const [data, setData] = useState<Array<{id: string, name: string, url: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [imgLoaded, setImgLoaded] = useState(0);

  useEffect(() => {
    setLoading(true);
    const getCatInfo = async (): Promise<void> => {
      await axios.get('/api/cats/').then(
        (res) => {
          setLoading(false);
          const sorted = res.data.mostPopularBreeds.sort((a: CatBreedSearchedData, b: CatBreedSearchedData) => b.searched - a.searched);
          setData(mapCatImageNameInfo(sorted));
        },
        (err) => {
          setLoading(false);
          setError(
            err.response.data ? err.response.data.message :
              `${err.response.status}: ${err.response.statusText}`,
          );
    });
    };
    getCatInfo();
  }, []);

  const setImgLoadedCount = () => {
    setImgLoaded(imgLoaded + 1);
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>
  }

  return (
    <>
      {(loading || imgLoaded < 8) && <Loader />}
      <div className={(loading || imgLoaded < 8) ? 'home-page--loading' : 'home-page'}>
        <MainCard data={data} cb={setImgLoadedCount} />
        <InfoCard cb={setImgLoadedCount} />
      </div>
    </>
  );
}

export default HomePage;