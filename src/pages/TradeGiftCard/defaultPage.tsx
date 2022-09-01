import React, { MouseEventHandler } from "react";
import PlainRectangleCard from "../../components/atoms/PlainRectangleCard";

type cardContentProps = {
  cardContent: Array<{
    cardBgColor?: string;
    cardTitle?: string;
    cardImgUrl?: string;
  }>;
  onCardClick?: Function;
};

const TradeGiftCardDefaultPage = ({
  cardContent,
  onCardClick = () => {},
}: cardContentProps) => {
  return (
    <div className="default">
      {cardContent.map((content, index) => (
        <PlainRectangleCard
          key={content.cardBgColor}
          bgColor={content.cardBgColor}
          title={content.cardTitle}
          imgUrl={content.cardImgUrl}
          cardTextWidth={
            content.cardTitle === "Check Gift Card Rates" ? "12rem" : ""
          }
          // mobileTextWidth={
          //   content.cardTitle === "Check Gift Card Rates" ? "8rem" : ""
          // }
          imgBottomPosition={
            content.cardTitle === "Buy Gift Cards"
              ? "-7rem"
              : content.cardTitle === "Check Gift Card Rates"
              ? "0"
              : content.cardTitle === "Hot Gift Cards"
              ? "-7rem"
              : ""
          }
          imgLeftPosition={
            content.cardTitle === "Hot Gift Cards"
              ? "2rem"
              : content.cardTitle === "Buy Gift Cards"
              ? "-2.5rem"
              : ""
          }
          imgBottomPositionMobile={
            content.cardTitle === "Buy Gift Cards"
              ? "-2rem"
              : content.cardTitle === "Check Gift Card Rates"
              ? "0"
              : content.cardTitle === "Hot Gift Cards"
              ? "-5rem"
              : ""
          }
          imgLeftPositionMobile={
            content.cardTitle === "Hot Gift Cards"
              ? "0rem"
              : content.cardTitle === "Buy Gift Cards"
              ? "-1rem"
              : ""
          }
          onCardClick={() => onCardClick(content.cardTitle)}
        />
      ))}
    </div>
  );
};

export default TradeGiftCardDefaultPage;
