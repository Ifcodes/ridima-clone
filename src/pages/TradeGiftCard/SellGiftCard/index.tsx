import React, { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../../components/atoms/SearchBox";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import TrapCard from "../../../components/atoms/TrapezoidCard";
import AmazonCardImage from "../../../components/atoms/vectors/AmazonCardIllus";
import AmazonIcon from "../../../components/atoms/vectors/AmazonIcon";
import AmazonIconCircle from "../../../components/atoms/vectors/AmazonIconCircle";
import AmericaExpressLogoSm from "../../../components/atoms/vectors/AmericaExpressLogosm";
import AmericanExpressCardImg from "../../../components/atoms/vectors/AmericanExpressCardIllus";
import AmexCardImg from "../../../components/atoms/vectors/AmexCardImg";
import AMExpressLogoIcon from "../../../components/atoms/vectors/AMExpressLogoIcon";
import AppleLogoIcon from "../../../components/atoms/vectors/AppleLogoIcon";
import AppleLogoRedBgIcon from "../../../components/atoms/vectors/AppleLogoRedBgIcon";
import EbayCardImg from "../../../components/atoms/vectors/EbayCardImg";
import EbayLogoIcon from "../../../components/atoms/vectors/EbayLogoIcon";
import EbayLogoSm from "../../../components/atoms/vectors/EbayLogoSm";
import GooglePlayImg from "../../../components/atoms/vectors/GooglePlayCardIllus";
import GooglePlayLogoIcon from "../../../components/atoms/vectors/GooglePlayLogoIcon";
import GooglePlayLogoSm from "../../../components/atoms/vectors/GooglePlayLogoSm";
import ItunesCardImg from "../../../components/atoms/vectors/ItunesCardIllus";
import MacyCardImg from "../../../components/atoms/vectors/MacyCardImg";
import MacyLogoIcon from "../../../components/atoms/vectors/MacyLogoIcon";
import MacyLogoSm from "../../../components/atoms/vectors/MacyLogoSm";
import NikeCardImg from "../../../components/atoms/vectors/NikeCardImg";
import NikeLogoIcon from "../../../components/atoms/vectors/NikeLogoIcon";
import NikeLogoSm from "../../../components/atoms/vectors/NikeLogoPlain";
import RazerGoldImg from "../../../components/atoms/vectors/RazerGoldCardIllus";
import RazerGoldLogoSm from "../../../components/atoms/vectors/RazerGoldLogo";
import RazerGoldLogoIcon from "../../../components/atoms/vectors/RazerGoldLogoIcon";
import SephoraCardImg from "../../../components/atoms/vectors/SephoraCardIllus";
import SephoraLogoIcon from "../../../components/atoms/vectors/SephoraLogoIcon";
import SephoraLogoSm from "../../../components/atoms/vectors/SephoraLogoSm";
import SteamCardImg from "../../../components/atoms/vectors/SteamCardIllus";
import SteamLogoIcon from "../../../components/atoms/vectors/SteamLogoIcon";
import SteamLogoSm from "../../../components/atoms/vectors/SteamLogoSm";
import VanillaCardImg from "../../../components/atoms/vectors/VanillaCardImg";
import VanillaLogoIcon from "../../../components/atoms/vectors/VanillaLogoIcon";
import VanillaLogoSm from "../../../components/atoms/vectors/VanillaLogoSm";
import WalmartCardImg from "../../../components/atoms/vectors/WalmartCardImage";
import WalmartLogoIcon from "../../../components/atoms/vectors/WalmartLogoIcon";
import WalmartLogoSm from "../../../components/atoms/vectors/WalmartLogoSm";
import DashboardLayout from "../../../components/templates/MainLayout";
import {
  clearSellGiftCardStates,
  setSellGiftCardSelectedCategory,
} from "../../../Entity/SellGiftCardEntity";
import { navigateHome } from "../../../utils/helpers";
import { StageTitleWrapper } from "../../CreateVirtualCard/createVirtualCardStyles";
import { SellGiftCardWrapper } from "../styledTradeGiftCard";
import ActiveGiftCard from "./ActiveGiftCardPage";

export const trapCardItemList = [
  {
    cardBg: "#F9D89F",
    cardType: "rightTrape",
    cardtitle: "Amazon",
    activeCardImg: AmazonCardImage,
    cardIcon: AmazonIcon,
    miniIcon: AmazonIconCircle,
  },
  {
    cardBg: "#F8DAD3",
    cardType: "rightTrape",
    cardtitle: "Apple iTunes",
    activeCardImg: ItunesCardImg,
    cardIcon: AppleLogoRedBgIcon,
    miniIcon: AppleLogoIcon,
  },
  {
    cardBg: "#9AFED3",
    cardType: "rightTrape",
    cardtitle: "Google Play",
    activeCardImg: GooglePlayImg,
    miniIcon: GooglePlayLogoSm,
    cardIcon: GooglePlayLogoIcon,
  },
  {
    cardBg: "#DCE5EF",
    cardType: "leftTrape",
    cardtitle: "Steam",
    activeCardImg: SteamCardImg,
    cardIcon: SteamLogoIcon,
    miniIcon: SteamLogoSm,
  },
  {
    cardBg: "#D8D4F7",
    cardType: "leftTrape",
    cardtitle: "Walmart",
    activeCardImg: WalmartCardImg,
    cardIcon: WalmartLogoIcon,
    miniIcon: WalmartLogoSm,
  },
  {
    cardBg: "#E0E0E0",
    cardType: "leftTrape",
    cardtitle: "Nike",
    activeCardImg: NikeCardImg,
    cardIcon: NikeLogoIcon,
    miniIcon: NikeLogoSm,
  },
  {
    cardBg: "#E0E0E0",
    cardType: "rightTrape",
    cardtitle: "Razer",
    activeCardImg: RazerGoldImg,
    cardIcon: RazerGoldLogoIcon,
    miniIcon: RazerGoldLogoSm,
  },
  {
    cardBg: "#F2F2F2",
    cardType: "rightTrape",
    cardtitle: "Vanilla",
    activeCardImg: VanillaCardImg,
    cardIcon: VanillaLogoIcon,
    miniIcon: VanillaLogoSm,
  },
  {
    cardBg: "#F6EAD5",
    cardType: "rightTrape",
    cardtitle: "Ebay",
    activeCardImg: EbayCardImg,
    cardIcon: EbayLogoIcon,
    miniIcon: EbayLogoSm,
  },
  {
    cardBg: "#DCE5EF",
    cardType: "leftTrape",
    cardtitle: "Sephora",
    activeCardImg: SephoraCardImg,
    cardIcon: SephoraLogoIcon,
    miniIcon: SephoraLogoSm,
  },
  {
    cardBg: "#D8D4F7",
    cardType: "leftTrape",
    cardtitle: "American Express",
    activeCardImg: AmexCardImg,
    cardIcon: AMExpressLogoIcon,
    miniIcon: AmericaExpressLogoSm,
  },
  {
    cardBg: "#f1c2b8",
    cardType: "leftTrape",
    cardtitle: "Macy",
    activeCardImg: MacyCardImg,
    cardIcon: MacyLogoIcon,
    miniIcon: MacyLogoSm,
  },
];

const SellGiftCards = () => {
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const [tabs, setTabs] = useState(["Trade Gift Cards", "Sell Gift Cards"]);
  const [activeCard, setActiveCard] = useState("");
  const [selectedCard, setSelectedCard] = useState<any>();

  const handleTabClick = (type: string, index: number) => {
    if (type === "Trade Gift Cards") {
      navigate("/trade-giftcards");
      setActiveTab(0);
      clearSellGiftCardStates();
    } else if (index !== tabs.length - 1) {
      setTabs(tabs.slice(0, index + 1));
      setActiveCard("");
      setActiveTab(activeTab - 1);
      clearSellGiftCardStates();
    }
    return;
  };

  const handleCardClick = (cardItems: any) => {
    setSelectedCard(cardItems);
    setActiveCard(cardItems.cardtitle);
    setTabs(tabs.concat(cardItems.cardtitle));
    setActiveTab(activeTab + 1);
  };

  return (
    <DashboardLayout childPadding="0" mobileChildPadding="0">
      <SellGiftCardWrapper stage={activeTab}>
        <div className={activeTab === 1 ? "heading" : "default"}>
          <StageTitleWrapper darkBgShade>
            <span
              className="home"
              onClick={() => {
                setSellGiftCardSelectedCategory("");
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
            <>
              <ActiveGiftCard selectedCarditems={selectedCard} />
            </>
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

export default SellGiftCards;
