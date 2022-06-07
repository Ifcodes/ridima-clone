import React from "react";
import AmazonCardImage from "../../../../components/atoms/vectors/AmazonCardIllus";
import { buyGiftCardsState } from "../../../../Entity/BuyGiftCardsEntity";
import { CardAmountFormWrapper } from "../buyGiftCardStyles";
import CardAmountSelection from "./cardAmount";
import EmailAndComments from "./emailandcomments";

const BuyGiftCardActive = () => {
  const activeStage = buyGiftCardsState.use().currentStage;
  return (
    <div>
      <AmazonCardImage />
      {activeStage === 0 && <CardAmountSelection />}
      {activeStage === 1 && <EmailAndComments />}
    </div>
  );
};

export default BuyGiftCardActive;
