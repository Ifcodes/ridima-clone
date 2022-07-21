import React from "react";
import AmazonCardImage from "../../../../components/atoms/vectors/AmazonCardIllus";
import StepperComponent from "../../../../components/molecules/Stepper";
import {
  buyGiftCardsState,
  setBuyGiftcardStage,
  setFixedCurrentStage,
} from "../../../../Entity/BuyGiftCardsEntity";
import { ActiveGiftCardWrapper } from "../../styledTradeGiftCard";
import { CardAmountFormWrapper } from "../buyGiftCardStyles";
import CardAmountSelection from "./cardAmount";
import EmailAndComments from "./emailandcomments";

const BuyGiftCardActive = () => {
  const activeStage = buyGiftCardsState.use().currentStage;

  const steps = [
    "Cards",
    "Card Amount & Equivalent",
    "Email Address & Comments",
  ];

  const mobileSteps = Array(3).fill("");

  const handleStepClick = (type: string) => {
    if (type === "Cards" || type.includes("Amount")) {
      console.log("clicked");
      setFixedCurrentStage(0);
      console.log(activeStage);
    }
  };

  return (
    <ActiveGiftCardWrapper>
      <div className="stepper-wrap">
        <StepperComponent
          steps={steps}
          activeStep={activeStage + 1}
          toggleSteps={handleStepClick}
        />
      </div>
      <div className="stepper-wrap-mobile">
        <StepperComponent
          steps={mobileSteps}
          activeStep={activeStage + 1}
          toggleSteps={handleStepClick}
        />
      </div>
      <AmazonCardImage />
      {activeStage === 0 && <CardAmountSelection />}
      {activeStage === 1 && <EmailAndComments />}
    </ActiveGiftCardWrapper>
  );
};

export default BuyGiftCardActive;
