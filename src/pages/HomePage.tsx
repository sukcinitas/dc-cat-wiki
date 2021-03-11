import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MainCard from '../components/MainCard';
import InfoCard from '../components/InfoCard';
import Loader from '../components/Loader';
import { mapCatImageNameInfo } from '../util/mapInfo';

const HomePage = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const getCatInfo = async (): Promise<void> => {
      await axios.get('/api/cats/').then(
        (res) => {
          setLoading(false);
          const sorted = res.data.mostPopularBreeds.sort((a: any, b: any) => b.searched - a.searched);
          console.log(sorted);
          setData(mapCatImageNameInfo(sorted));
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
   )
}

export default HomePage;