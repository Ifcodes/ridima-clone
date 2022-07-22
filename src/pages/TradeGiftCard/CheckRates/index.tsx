import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Buttons";
import StepperComponent from "../../../components/molecules/Stepper";

import DashboardLayout from "../../../components/templates/MainLayout";
import {
  checkRatesStates,
  resetAllCheckRatesState,
  setCurrentCheckRateStage,
  setFixedCheckRateStage,
} from "../../../Entity/CheckRatesEntity";
import { StageTitleWrapper } from "../../CreateVirtualCard/createVirtualCardStyles";
import CardAmount from "./cardAmount";
import CardTypeAndSubCategory from "./cardTypeAndSubCategory";
import { CheckRatesMainWrapper, CheckRatesWrapper } from "./checkRatesStyles";
import GiftCardsCurrency from "./giftCardsCurrency";

const CheckRates = () => {
  const navigate = useNavigate();
  const activeStage = checkRatesStates.use().currentStage;
  const selectedCurrency = checkRatesStates.use().selectedCurrency;
  const selectedCard = checkRatesStates.use().selectedGiftCard;
  const selectedCategory = checkRatesStates.use().selectedSubCategory;
  const [tabs, setTabs] = useState(["Trade Gift Cards", "Check Rates"]);
  const [activeTab, setActiveTab] = useState(1);

  const steps = [
    "Giftcard-Currency",
    "Card type & Sub-category",
    "Card Amount",
  ];

  const mobileSteps = Array(3).fill("");

  const handleStepClick = (step: string, index: number) => {
    if (step.includes("Giftcard")) setFixedCheckRateStage(0);
    else if (step.includes("type")) setFixedCheckRateStage(1);
    else if (step.includes("Amount")) setFixedCheckRateStage(2);
    else if (step === "mobile") setFixedCheckRateStage(index);
    else return;
  };

  const handleTabClick = (type: string, index: number) => {
    if (type === "Trade Gift Cards") {
      navigate("/trade-giftcards");
      setCurrentCheckRateStage("prev");
    } else if (index !== tabs.length - 1) {
      setTabs(tabs.slice(0, index + 1));
      setCurrentCheckRateStage("next");
    }
    return;
  };

  const handleProceed = () => {
    if (activeStage === 2) {
      navigate("/trade-giftcards");
      resetAllCheckRatesState();
    } else {
      setCurrentCheckRateStage("next");
    }
  };
  return (
    <DashboardLayout mobileChildPadding="0" childPadding="0">
      <CheckRatesMainWrapper>
        <div className="stage-title-wrap">
          <StageTitleWrapper darkBgShade>
            <span className="home" onClick={() => navigate("/home")}>
              Home
            </span>
            {tabs.map((tab, index) => (
              <StageTitleWrapper
                key={`key-${tab}-of-${index}`}
                onClick={() => handleTabClick(tab, index)}
                isActive={index === activeTab}
              >
                <span className="arrow"> {" > "} </span>
                <span className="title"> {tab} </span>
              </StageTitleWrapper>
            ))}
          </StageTitleWrapper>
        </div>
        <CheckRatesWrapper>
          <div className="stepper-wrap">
            <StepperComponent
              steps={steps}
              activeStep={activeStage}
              toggleSteps={handleStepClick}
            />
          </div>
          <div className="stepper-wrap-mobile">
            <StepperComponent
              mobileSteps={mobileSteps}
              activeStep={activeStage}
              toggleSteps={handleStepClick}
            />
          </div>
          {activeStage === 0 && <GiftCardsCurrency />}
          {activeStage === 1 && <CardTypeAndSubCategory />}
          {activeStage === 2 && <CardAmount />}
          <Button
            btnText={activeStage === 3 ? "Close" : "Proceed"}
            width="27rem"
            disabled={
              (activeStage === 0 && selectedCard === "") ||
              selectedCurrency === ""
                ? true
                : activeStage === 1 && selectedCategory === ""
                ? true
                : false
            }
            onClick={() => handleProceed()}
          />
        </CheckRatesWrapper>
      </CheckRatesMainWrapper>
    </DashboardLayout>
  );
};

export default CheckRates;
