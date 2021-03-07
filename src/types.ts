export type CatInfo = {
  url: string,
  name: string,
  description: string,
  qualities: {
    textQualities: {
      temperament: string,
      origin: string,
      life_span: string,
    },
    numberQualities: {
      adaptability: number,
      affection_level: number,
      child_friendly: number,
      grooming: number,
      intelligence: number,
      health_issues: number,
      social_needs: number,
      stranger_friendly: number,
    },
  },
}