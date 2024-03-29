import React, { MouseEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../../components/atoms/SearchBox";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import TrapCard from "../../../components/atoms/TrapezoidCard";
import DashboardLayout from "../../../components/templates/MainLayout";
import { resetBuyGiftCardsState } from "../../../Entity/BuyGiftCardsEntity";

import {
  activeTradeGiftCardTab,
  setActiveTabChange,
} from "../../../Entity/TradeGiftCardsEntity";
import { StageTitleWrapper } from "../../CreateVirtualCard/createVirtualCardStyles";
import { trapCardItemList } from "../SellGiftCard";
import { SellGiftCardWrapper } from "../styledTradeGiftCard";
import BuyGiftCardActive from "./BuyGiftCardActiveCard";

const BuyGiftCards = () => {
  const activeTab = activeTradeGiftCardTab.use();
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState("");
  const [tabs, setTabs] = useState(["Trade Gift Cards", "Buy Gift Cards"]);
  const [selectedCard, setSelectedCard] = useState<any>();

  useEffect(() => {
    setActiveTabChange("reset");
  }, []);

  const handleTabClick = (type: string, index: number) => {
    if (type === "Trade Gift Cards") {
      navigate("/trade-giftcards");
      setActiveTabChange("prev");
      resetBuyGiftCardsState();
    } else if (index !== tabs.length - 1) {
      setTabs(tabs.slice(0, index + 1));
      setActiveTabChange("prev");
      resetBuyGiftCardsState();
    }
    return;
  };

  const handleCardClick = (cardItems: any) => {
    setSelectedCard(cardItems);
    setTabs(tabs.concat(cardItems.cardtitle));
    setActiveTabChange("next");
  };

  return (
    <DashboardLayout childPadding="0" mobileChildPadding="0">
      <SellGiftCardWrapper stage={activeTab}>
        <div className={activeTab === 1 ? "heading" : "default"}>
          <StageTitleWrapper darkBgShade>
            <span
              className="home"
              onClick={() => {
                resetBuyGiftCardsState();
                setActiveTabChange("reset");
                navigate("/home");
              }}
            >
              Home
            </span>
            {tabs.map((tab, index) => (
              <StageTitleWrapper
                key={`key-${tab}-of-${index}`}
                onClick={() => handleTabClick(tab, index)}
                isActive={index === activeTab}
                darkBgShade={activeTab === 1}
              >
                <span className="arrow"> {" > "} </span>
                <span className="title"> {tab} </span>
              </StageTitleWrapper>
            ))}
          </StageTitleWrapper>
          {activeTab === 1 && (
            <div className="search-cont">
              <SearchBox
                searchIconColor="white"
                placeholder="Search gift card category"
                placeholderColor="#fffffe4c"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                borderRadius="3.125rem"
                height="4.3rem"
                bgColor="#685BE1"
                inputTextColor="white"
              />
            </div>
          )}
        </div>
        <div className="main-content">
          {activeTab === 2 ? (
            <BuyGiftCardActive selectedCarditems={selectedCard} />
          ) : (
            <>
              <div className="title-cont">
                <HorizontalLinedTitle text="Available giftcards" />
              </div>
              <div className="content">
                {trapCardItemList.map((item, index) => (
                  <TrapCard
                    key={item.cardtitle}
                    bgColor={item.cardBg}
                    trapeCardType={item.cardType}
                    title={item.cardtitle}
                    icon={<item.cardIcon />}
                    onCardClick={() => handleCardClick(item)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </SellGiftCardWrapper>
    </DashboardLayout>
  );
};

export default BuyGiftCards;
