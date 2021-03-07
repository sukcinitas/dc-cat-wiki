export const mapCatInfo = (data: any): any => {
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

export const mapCatImageInfo = (data: any): Array<string> => {
  const withoutFirst = data.slice(1);
  return withoutFirst.map((catImageInfo: any) => catImageInfo.url);
}
