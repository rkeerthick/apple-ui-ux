import React from "react";
import "./iWatchTitleCard.scss";

export type iWatchTitleCardProps = {
  image: string;
  heading: string;
};

const IWatchTitleCard = ({ image, heading }: iWatchTitleCardProps) => {
  return (
    <div className="iwatchtitlecard">
      <img src={image} alt="iwatch-bg" />
      <div className="iwatchtitlecard__container">
        <img
          className="iwatchtitlecard__container__heading"
          src={heading}
          alt="iwatch-heading"
        />
        <span className="iwatchtitlecard__container__description">
          Double tap. A magical new way to use Apple Watch.
        </span>

        <div className="iwatchtitlecard__container__btn-wrapper">
          <button className="iwatchtitlecard__container__btn-wrapper__btn-container">
            Learn more
          </button>
          <button className="iwatchtitlecard__container__btn-wrapper__btn-container">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default IWatchTitleCard;
