import React from "react";

import "../sass/CatInfoCardTable.scss";

const Grade = ({ grade }: { grade: number }) => (
  <div className={`grade grade--${grade}`}>
    <div className="grade__element"></div>
    <div className="grade__element"></div>
    <div className="grade__element"></div>
    <div className="grade__element"></div>
    <div className="grade__element"></div>
  </div>
);

type TCatInfoCardTableProps = {
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

const change = (name: string): string => {
  const capitalizedArr = name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedArr.join(" ");
};

const CatInfoCardTable = ({ qualities }: TCatInfoCardTableProps) => {
  const { textQualities, numberQualities } = qualities;
  const textValues = Object.entries(textQualities).map((entry) => (
    <tr key={entry[0]}>
      <td className="cat-info-card__info-table-property" colSpan={2}>
        {`${change(entry[0])}: `}
        <span className="cat-info-card__info-table-value">
          {entry[0] === "life_span" ? `${entry[1]} years` : entry[1]}
        </span>
      </td>
    </tr>
  ));

  const numberValues = Object.entries(numberQualities).map((entry) => (
    <tr key={entry[0]}>
      <td className="cat-info-card__info-table-property">{`${change(
        entry[0]
      )}: `}</td>
      <td>
        <Grade grade={entry[1]} />
      </td>
    </tr>
  ));
  return (
    <table className="cat-info-card__info-table">
      <tbody>
        {textValues}
        {numberValues}
      </tbody>
    </table>
  );
};

export default CatInfoCardTable;
