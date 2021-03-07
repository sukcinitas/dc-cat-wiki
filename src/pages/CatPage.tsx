import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import CatInfoCard from '../components/CatInfoCard';
import OtherPhotos from '../components/OtherPhotos';
import { mapCatInfo, mapCatImageInfo } from '../util/mapInfo';
import { CatInfo } from '../types';

const HomePage = () => {
  const { breedId } = useParams<{breedId: string}>();
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
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const getCatInfo = async (breedId: string): Promise<void> => {
  //     axios.get(`/api/cats/breeds/${breedId}`).then(
  //       (res) => {
  //         console.log(res);
  //         const { data: { success, catInfo, message } } = res;
  //         if (success) {
  //           setCatInfo(mapCatInfo(catInfo));
  //         } else {
  //           setError(message);
  //         }
  //       },
  //       (err) => {
  //         setError(
  //           err.response.data.message ||
  //             `${err.response.status}: ${err.response.statusText}`,
  //         );
  //       },
  //     );
  //   };
  //   getCatInfo(breedId);
  // }, [breedId]);

  useEffect(() => {
    const getCatImageInfo = async (breedId: string): Promise<void> => {
      axios.get(`/api/cats/images?breedId=${breedId}&limit=9`).then(
        (res) => {
          console.log(res);
          const { data: { success, catInfo, message } } = res;
          if (success) {
            console.log(catInfo);
            setCatInfo(mapCatInfo(catInfo[0]));
            setCatImageInfo(mapCatImageInfo(catInfo));
          } else {
            setError(message);
          }
        },
        (err) => {
          setError(
            err.response.data.message ||
              `${err.response.status}: ${err.response.statusText}`,
          );
        },
      );
    };
    getCatImageInfo(breedId);
  }, [breedId]);

   return (
     <div className="cat-page">
       <CatInfoCard catInfo={catInfo} />
       <OtherPhotos catImageInfo={catImageInfo} />
     </div>
   )
}

export default HomePage;