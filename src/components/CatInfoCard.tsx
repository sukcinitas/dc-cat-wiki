import React from "react";

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "./Image";
import CatInfoCardTable from "./CatInfoCardTable";

import "../sass/CatInfoCard.scss";

type TCatInfoCardProps = {
  catInfo: {
    name: string;
    description: string;
    url: string;
    qualities: {
      textQualities: {
        temperament: string;
        origin: string;
        life_span: string;
      };
      numberQualities: {
        adaptability: number;
        affection_level: number;
        child_friendly: number;
        grooming: number;
        intelligence: number;
        health_issues: number;
        social_needs: number;
        stranger_friendly: number;
      };
    };
  };
};

const CatInfoCard = ({
  catInfo: { name, description, url, qualities },
}: TCatInfoCardProps) => {
  return (
    <section className="cat-info-card">
      <div className="cat-info-card__photo-wrapper">
        <div className="relative">
          <Image src={url} classes={["cat-info-card__photo"]} />
        </div>
        <span className="cat-info-card__detail"></span>
      </div>
      <div className="cat-info-card__table">
        <Heading type="small">{name}</Heading>
        <Paragraph>{description}</Paragraph>
        <CatInfoCardTable qualities={qualities} />
      </div>
    </section>
  );
};

export default CatInfoCard;
