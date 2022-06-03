import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlainRectangleCard from "../../components/atoms/PlainRectangleCard";
import DashboardLayout from "../../components/templates/MainLayout";
import { setProfileComplete } from "../../Entity/ProfileComplete";
import { StageTitleWrapper } from "../CreateVirtualCard/createVirtualCardStyles";
import TradeGiftCardDefaultPage from "./defaultPage";
import SellGiftCards from "./SellGiftCard";
import { TradeGiftCardWrapper } from "./styledTradeGiftCard";

const cardContent = [
  {
    cardTitle: "Sell Gift Cards",
    cardBgColor: "#EBE9FB",
    cardImgUrl: "/vectors/BlueGiftIcon.svg",
  },
  {
    cardTitle: "Buy Gift Cards",
    cardBgColor: "#FCF2CF",
    cardImgUrl: "/vectors/YellowGiftIcon.svg",
  },
  {
    cardTitle: "Check Gift Card Rates",
    cardBgColor: "#F3F2FD",
    cardImgUrl: "/vectors/CalculatorIcon.svg",
  },
  {
    cardTitle: "Hot Gift Cards",
    cardBgColor: "#FDE7E7",
    cardImgUrl: "/vectors/FireImgIllustration.svg",
  },
];

const TradeGiftCard = () => {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState(["Trade GiftCards"]);
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState("");

  const toggleActiveScreen = () => {
    navigate("/home");
    setProfileComplete(true);
  };

  const handleTabClick = (type: string, index: number) => {
    if (type === "Virtual cards") {
      navigate("/virtual-cards");
    } else {
      setTabs(tabs.slice(0, index + 1));
      setActiveCard("");
      setActiveTab(activeTab - 1);
    }
    return;
  };

  const handleActionClick = (actionType: string) => {
    if(actionType === "Sell Gift Cards"){
      navigate('/trade-giftcards/sell-giftcards')
    }
    setActiveCard(actionType);
    setTabs(tabs.concat(actionType));
    setActiveTab(activeTab + 1);
  };

  return (
    <DashboardLayout>
      <TradeGiftCardWrapper> 
        <StageTitleWrapper>
          <span className="home" onClick={() => toggleActiveScreen()}>
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
        {activeCard === "" && (
          <TradeGiftCardDefaultPage
            cardContent={cardContent}
            onCardClick={handleActionClick}
          />
        )}
      </TradeGiftCardWrapper>
    </DashboardLayout>
  );
};

export default TradeGiftCard;
