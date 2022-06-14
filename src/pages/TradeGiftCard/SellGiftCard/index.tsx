import React, { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../../components/atoms/SearchBox";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import TrapCard from "../../../components/atoms/TrapezoidCard";
import AmazonIcon from "../../../components/atoms/vectors/AmazonIcon";
import AppleLogoRedBgIcon from "../../../components/atoms/vectors/AppleLogoRedBgIcon";
import GooglePlayLogoIcon from "../../../components/atoms/vectors/GooglePlayLogoIcon";
import SteamLogoIcon from "../../../components/atoms/vectors/SteamLogoIcon";
import WalmartLogoIcon from "../../../components/atoms/vectors/WalmartLogoIcon";
import DashboardLayout from "../../../components/templates/MainLayout";
import { navigateHome } from "../../../utils/helpers";
import { StageTitleWrapper } from "../../CreateVirtualCard/createVirtualCardStyles";
import { SellGiftCardWrapper } from "../styledTradeGiftCard";
import ActiveGiftCard from "./ActiveGiftCardPage";

export const trapCardIemList = [
  {
    cardBg: "#F9D89F",
    cardType: "rightTrape",
    cardtitle: "Amazon",
    cardIcon: AmazonIcon,
    titleDescription: "19 Gift Cards",
  },
  {
    cardBg: "#F8DAD3",
    cardType: "rightTrape",
    cardtitle: "Apple iTunes",
    cardIcon: AppleLogoRedBgIcon,
    titleDescription: "19 Gift Cards",
  },
  {
    cardBg: "#9AFED3",
    cardType: "rightTrape",
    cardtitle: "Google Play",
    cardIcon: GooglePlayLogoIcon,
    titleDescription: "19 Gift Cards",
  },
  {
    cardBg: "#DCE5EF",
    cardType: "leftTrape",
    cardtitle: "Steam",
    cardIcon: SteamLogoIcon,
    titleDescription: "6 Gift Cards",
  },
  {
    cardBg: "#D8D4F7",
    cardType: "leftTrape",
    cardtitle: "Walmart",
    cardIcon: WalmartLogoIcon,
    titleDescription: "6 Gift Cards",
  },
];

const SellGiftCards = () => {
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const [tabs, setTabs] = useState(["Trade Gift Cards", "Sell Gift Cards"]);
  const [activeCard, setActiveCard] = useState("");

  const handleTabClick = (type: string, index: number) => {
    if (type === "Trade Gift Cards") {
      navigate("/trade-giftcards");
      setActiveTab(0);
    } else if (index !== tabs.length - 1) {
      setTabs(tabs.slice(0, index + 1));
      setActiveCard("");
      setActiveTab(activeTab - 1);
    }
    return;
  };

  const handleCardClick = (actionType: string) => {
    setActiveCard(actionType);
    setTabs(tabs.concat(actionType));
    setActiveTab(activeTab + 1);
  };
  return (
    <DashboardLayout childPadding="0">
      <SellGiftCardWrapper>
        <div className={activeTab === 1 ? "heading" : "default"}>
          <StageTitleWrapper darkBgShade>
            <span className="home" onClick={() => navigate("/home")}>
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
            <>
              <ActiveGiftCard />
            </>
          ) : (
            <>
              <div className="title-cont">
                <HorizontalLinedTitle text="Available giftcards" />
              </div>
              <div className="content">
                {trapCardIemList.map((item, index) => (
                  <TrapCard
                    key={item.cardtitle}
                    bgColor={item.cardBg}
                    trapeCardType={item.cardType}
                    title={item.cardtitle}
                    icon={<item.cardIcon />}
                    titleDescription={item.titleDescription}
                    onCardClick={() => handleCardClick(item.cardtitle)}
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

export default SellGiftCards;
