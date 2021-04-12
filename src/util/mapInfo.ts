import { CatBreedImageData, CatBreedSearchedData, CatInfo } from '../types';

export const mapCatInfo = (data: CatBreedImageData): CatInfo => {
  const breed = data.breeds[0];
  const {
    name,
    description,
    temperament,
    origin, 
    life_span,
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
   } = breed;

  return {
    url: data.url,
    name,
    description,
    qualities: {
      textQualities: {
        temperament,
        origin,
        life_span,
      },
      numberQualities: {
        adaptability,
        affection_level,
        child_friendly,
        grooming,
        intelligence,
        health_issues,
        social_needs,
        stranger_friendly,
      },
    },
  }
}

export const mapCatImageInfo = (data: Array<CatBreedImageData>): Array<string> => {
  const withoutFirst = data.slice(1);
  return withoutFirst.map((catImageInfo: CatBreedImageData) => catImageInfo.url);
}

export const mapCatImageNameInfo = (data: Array<CatBreedSearchedData>): Array<{id: string, name: string, url: string }> => {
  const first = data.map((cat: CatBreedSearchedData) => ({
    id: cat.id,
    name: cat.name,
    url: cat.image.url, 
  })).slice(0, 4);
  return first;
}