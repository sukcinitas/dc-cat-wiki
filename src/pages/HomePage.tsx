import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MainCard from '../components/MainCard';
import InfoCard from '../components/InfoCard';
import Loader from '../components/Loader';
import { mapCatImageNameInfo } from '../util/mapInfo';
import { CatBreedSearchedData } from '../types';


const HomePage = () => {
  const [data, setData] = useState<Array<{id: string, name: string, url: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(1);

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
          console.log(err);
          setLoading(false);
    });
    };
    getCatInfo();
  }, []);

  const setImgLoadedCount = () => {
    setImgLoaded(imgLoaded + 1);
  }

  if (loading && imgLoaded < 8) {
    return <Loader />
  }

  return (
    <div className="home-page">
      <MainCard data={data} cb={setImgLoadedCount} />
      <InfoCard cb={setImgLoadedCount} />
    </div>
  );
}

export default HomePage;