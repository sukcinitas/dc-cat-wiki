import React, { useState } from 'react';

import Heading from '../components/Heading';
import CatCard from '../components/CatCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { CatBreedSearchedData } from '../types';
import useFetch from '../util/useFetch';

const PopularCatsPage = () => {
  const [imgLoaded, setImgLoaded] = useState(0);
  const { loading, error, data = { mostPopularBreeds: []} } = useFetch('/api/cats/');

  const setImgLoadedCount = () => {
    setImgLoaded(imgLoaded + 1);
  }

  const sorted = data?.mostPopularBreeds?.sort((a: CatBreedSearchedData, b: CatBreedSearchedData) => b.searched - a.searched);

  const list = sorted?.map((cat: CatBreedSearchedData, index: number) => 
      <CatCard 
      key={cat.id} 
      id={cat.id} 
      index={index + 1} 
      name={cat.name} 
      description={cat.description} 
      url={cat.image.url} 
      cb={setImgLoadedCount}
    />)

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>
  }

   return (
     <>
     {(loading || imgLoaded < 10) && <Loader />}
     <div className={(loading || imgLoaded < 10) ? 'popular-cats-page--loading' : 'popular-cats-page'}>
        <Heading type="small-bold">Top 10 most searched breeds</Heading>
        {list}
      </div>
     </>
   )
}

export default PopularCatsPage;