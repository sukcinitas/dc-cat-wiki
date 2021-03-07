import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Heading from '../components/Heading';
import CatCard from '../components/CatCard';

const PopularCatsPage = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState('');

    useEffect(() => {
    const getCatInfo = async (): Promise<void> => {
      await axios.get('/api/cats/').then(
        (res) => {
          console.log(res.data.data);
          setData(res.data.data);
        },
        (err) => {
          setError(
            err.response.data.message ||
              `${err.response.status}: ${err.response.statusText}`,
          );
        },
      );
    };
    getCatInfo();
  }, [])

  const list = data.map((cat: any, index: number) => <CatCard key={cat.id} index={index + 1} name={cat.name} description={cat.description} url={cat.image.url } />)

   return (
     <div className="popular-cats-page">
       <Heading type="small-bold">Top 10 most searched breeds</Heading>
      {list}
     </div>
   )
}

export default PopularCatsPage;