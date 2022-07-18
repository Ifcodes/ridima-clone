import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Buttons";
import Stepper from "../../../components/molecules/Stepper";
import DashboardLayout from "../../../components/templates/MainLayout";
import {
  checkRatesStates,
  resetAllCheckRatesState,
  setCurrentCheckRateStage,
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

  const steps = ["Card type & Sub-category", "Card Amount"];

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
    if (activeStage === 3) {
      navigate("/trade-giftcards");
      resetAllCheckRatesState();
    } else {
      setCurrentCheckRateStage("next");
    }
  };
  return (
    <DashboardLayout mobileChildPadding="0">
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
          <div className="stepper-cont">
            <Stepper
              defaultTitle={"Gift Card & currency"}
              steps={steps}
              currentStep={activeStage}
              previousStep={activeStage - 1}
            />
          </div>
          {activeStage === 1 && <GiftCardsCurrency />}
          {activeStage === 2 && <CardTypeAndSubCategory />}
          {activeStage === 3 && <CardAmount />}
          <Button
            btnText={activeStage === 3 ? "Close" : "Proceed"}
            width="27rem"
            disabled={
              (activeStage === 1 && selectedCard === "") ||
              selectedCurrency === ""
                ? true
                : activeStage === 2 && selectedCategory === ""
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
