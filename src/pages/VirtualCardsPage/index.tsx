import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Buttons";
import VirtualCard from "../../components/molecules/VirtualCard";
import {
  MainWrapper,
  StageTitleWrapper,
} from "../CreateVirtualCard/createVirtualCardStyles";
import DashboardLayout from "../../components/templates/MainLayout";
import { setProfileComplete } from "../../Entity/ProfileComplete";
import { generateId } from "../../utils/generateId";
import { cardDataList } from "../../utils/helpers/cardsData";
import { VirtualCardsWrapper } from "./styledVirtualCards";
import MobileHeader from "../../components/atoms/MobileHeader";

const VirtualCardsPage = () => {
  const [stageTitles, setStageTitles] = useState(["Virtual cards"]);
  const [stage, setStage] = useState(0);
  const navigate = useNavigate();

  const toggleActiveScreen = () => {
    navigate("/home");
    setProfileComplete(true);
  };

  const handleStageTagClick = (stageIndex: number, type: string) => {
    stageTitles.map((stg, index) => {
      if (index === stageIndex) {
        if (stageIndex >= 0 && stage > 0) {
          setStage(stage - 1);
          setStageTitles(stageTitles.slice(0, stageIndex + 1));
        } else {
          return;
        }
      }

      return stg;
    });
  };

  return (
    <DashboardLayout mobileChildPadding="0">
      <VirtualCardsWrapper>
        <div className="stage-header">
          <div className="mobile-header" onClick={() => navigate("/home")}>
            <MobileHeader width="100%" />
          </div>
          <div className="stage-title-cont">
            <span className="home" onClick={() => toggleActiveScreen()}>
              Home
            </span>
            {stageTitles.map((stageText, index) => (
              <StageTitleWrapper
                key={`key-${stageText}-of-${index}`}
                onClick={() => handleStageTagClick(index, "")}
                isActive={index === stage}
              >
                <span className="arrow"> {" > "} </span>
                <span className="title"> {stageText} </span>
              </StageTitleWrapper>
            ))}
          </div>
          <Button
            btnText="Create card"
            buttonBgType="small"
            bgColor="#F5CF48"
            width="50%"
            mobileWidth="50%"
            mt="0"
          />
        </div>

        <div className="cards-wrapper">
          {cardDataList.map((card, index) => (
            <div
              key={`card-${card.cardDesign}-${index}`}
              onClick={() => navigate(`/virtual-cards/${card.id}`)}
            >
              <VirtualCard
                cardBgColor={card.cardDesign}
                cardName={card.cardName}
                cardFund={card.cardFund}
                cardNumber={card.cardNumber}
                cardOwnerName={card.cardOwnerName}
                cardExpiry={card.cardExpiry}
                isActive={true}
                currencyInitial={card.currency.initial}
                currencySymbol={card.currency.symbol}
              />
            </div>
          ))}
        </div>
      </VirtualCardsWrapper>
    </DashboardLayout>
  );
};

export default VirtualCardsPage;
