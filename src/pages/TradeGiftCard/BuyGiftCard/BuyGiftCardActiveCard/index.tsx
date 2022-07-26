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

const BuyGiftCardActive = ({
  selectedCarditems,
}: {
  selectedCarditems?: any;
}) => {
  const activeStage = buyGiftCardsState.use().currentStage;

  const steps = [
    "Cards",
    "Card Amount & Equivalent",
    "Email Address & Comments",
  ];

  const mobileSteps = Array(3).fill("");

  const handleStepClick = (type: string, index: number) => {
    if (type === "Cards" || type.includes("Amount")) setFixedCurrentStage(0);
    else if (type.includes("Email")) setFixedCurrentStage(1);
    else if (type === "mobile" && index <= 1) setFixedCurrentStage(0);
    else if (type === "mobile") setFixedCurrentStage(index - 1);
    else return;
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
          mobileSteps={mobileSteps}
          activeStep={activeStage + 1}
          toggleSteps={handleStepClick}
        />
      </div>
      <div className="card-img-wrap">
        {selectedCarditems.activeCardImg && <selectedCarditems.activeCardImg />}
      </div>
      {activeStage === 0 && <CardAmountSelection />}
      {activeStage === 1 && <EmailAndComments />}
    </ActiveGiftCardWrapper>
  );
};

export default BuyGiftCardActive;
