import React from "react";
import AmazonCardImage from "../../../../components/atoms/vectors/AmazonCardIllus";
import Stepper from "../../../../components/molecules/Stepper";
import {
  buyGiftCardsState,
  setBuyGiftcardStage,
} from "../../../../Entity/BuyGiftCardsEntity";
import { ActiveGiftCardWrapper } from "../../styledTradeGiftCard";
import { CardAmountFormWrapper } from "../buyGiftCardStyles";
import CardAmountSelection from "./cardAmount";
import EmailAndComments from "./emailandcomments";

const BuyGiftCardActive = () => {
  const activeStage = buyGiftCardsState.use().currentStage;
  const steps = ["Card amount & Equivalent", "Email Address $ Comments"];

  const handleStepClick = (index: number) => {
    steps.map((step, stepIndex) => {
      if (index === stepIndex) setBuyGiftcardStage("fixed", index);
    });
  };

  return (
    <ActiveGiftCardWrapper padding="0 1.5rem">
      {/* <Stepper
        defaultTitle="Card"
        steps={steps}
        currentStep={activeStage}
        previousStep={activeStage - 1}
        onClick={handleStepClick}
      /> */}
      <AmazonCardImage />
      {activeStage === 0 && <CardAmountSelection />}
      {activeStage === 1 && <EmailAndComments />}
    </ActiveGiftCardWrapper>
  );
};

export default BuyGiftCardActive;
