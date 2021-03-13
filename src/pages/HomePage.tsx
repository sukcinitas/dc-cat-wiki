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

  if (loading) {
    return <Loader />
  }

  return (
    <div className="home-page">
      <MainCard data={data} />
      <InfoCard />
    </div>
  );
}

export default HomePage;