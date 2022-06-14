import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/templates/MainLayout";
import {
  hotGiftCardsStates,
  setHotGiftCardsTabs,
  setHotGiftCardTab,
} from "../../../Entity/HotGiftCardsEntity";
import { StageTitleWrapper } from "../../CreateVirtualCard/createVirtualCardStyles";
import ActiveGiftCard from "./ActiveGiftCardPage";
import HotGiftCardsDefault from "./defaultPage";
import { HotGiftCardsWrapper } from "./hotGiftCardsStyles";

const HotGiftCards = () => {
  const navigate = useNavigate();
  const hotGiftCardState = hotGiftCardsStates.use();
  const tabs = hotGiftCardState.tabs;
  const activeTab = hotGiftCardState.currentTab;

  const handleTabClick = (type: string, index: number) => {
    if (type === "Trade Gift Cards") {
      navigate("/trade-giftcards");
      setHotGiftCardTab("prev");
    } else {
      setHotGiftCardsTabs("remove", undefined, index);
    }
    return;
  };

  return (
    <DashboardLayout>
      <HotGiftCardsWrapper>
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
        {activeTab === 1 && <HotGiftCardsDefault />}
        {activeTab === 2 && <ActiveGiftCard />}
      </HotGiftCardsWrapper>
    </DashboardLayout>
  );
};

export default HotGiftCards;
