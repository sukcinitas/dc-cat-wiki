import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Heading from '../components/Heading';
import CatCard from '../components/CatCard';
import Loader from '../components/Loader';

const PopularCatsPage = () => {
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
          setData(sorted);
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

  const list = data.map((cat: any, index: number) => <CatCard key={cat.id} index={index + 1} name={cat.name} description={cat.description} url={cat.image.url } />)

  if (loading) {
    return <Loader />
  }

   return (
     <div className="popular-cats-page">
       <Heading type="small-bold">Top 10 most searched breeds</Heading>
      {list}
     </div>
   )
}

export default PopularCatsPage;