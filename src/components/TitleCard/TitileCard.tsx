import React from "react";
import "./TitleCard.scss";
import backIcon from "../../assets/svg/backIcon.svg";

export type titleCardProps = {
  heading: string;
  description: string;
  bgImage: string;
  bgColor: string;
  color: string;
};

const TitileCard = ({
  heading,
  description,
  bgImage,
  bgColor,
  color,
}: titleCardProps) => {
  return (
    <div className="titlecard" style={{ backgroundColor: bgColor }}>
      <div className="titlecard__container">
        <span
          className="titlecard__container__heading"
          style={{ color: color }}
        >
          {heading}
        </span>
        <span
          className="titlecard__container__description"
          style={{ color: color }}
        >
          {description}
        </span>
        <div className="titlecard__container__btn-wrapper">
          <div className="titlecard__container__btn-wrapper__btn-container">
            <button>Learn more</button>
            <img className="back-icon" src={backIcon} alt="" />
          </div>
          <div className="titlecard__container__btn-wrapper__btn-container">
            <button>Buy</button>
            <img className="back-icon" src={backIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="titlecard__background">
        <img src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default TitileCard;
