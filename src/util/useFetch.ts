import { useState, useEffect } from "react";
import axios from "axios";
import { CatBreedSearchedData, CatBreedImageData } from "../types";

interface Data {
  mostPopularBreeds?: Array<CatBreedSearchedData>;
  catInfo?: Array<CatBreedImageData>;
  message?: string;
  success?: boolean;
}

const useFetch = (url = "") => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect((): (() => void) => {
    let isMounted = true;

    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (isMounted) {
          setData(response?.data);
          setError("");
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Something went wrong!");
          setData({});
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false);
  }, [url]);

  return { loading, error, data } as {
    loading: boolean;
    error: string;
    data: Data;
  };
};

export default useFetch;
