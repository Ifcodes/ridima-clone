import React from "react";
import ListItemCard from "../../../components/atoms/ListItemCard";
import { Paragraph } from "../../../components/atoms/Typography";
import AmazonCardImage from "../../../components/atoms/vectors/AmazonCardIllus";
import AmazonIconCircle from "../../../components/atoms/vectors/AmazonIconCircle";
import AmericaExpressLogoSm from "../../../components/atoms/vectors/AmericaExpressLogosm";
import AmericanExpressCardImg from "../../../components/atoms/vectors/AmericanExpressCardIllus";
import AppleLogoIcon from "../../../components/atoms/vectors/AppleLogoIcon";
import GooglePlayImg from "../../../components/atoms/vectors/GooglePlayCardIllus";
import GooglePlayLogoSm from "../../../components/atoms/vectors/GooglePlayLogoSm";
import ItunesCardImg from "../../../components/atoms/vectors/ItunesCardIllus";
import MacyLogoSm from "../../../components/atoms/vectors/MacyLogoSm";
import RazerGoldImg from "../../../components/atoms/vectors/RazerGoldCardIllus";
import RazerGoldLogoSm from "../../../components/atoms/vectors/RazerGoldLogo";
import SephoraCardImg from "../../../components/atoms/vectors/SephoraCardIllus";
import SephoraLogoSm from "../../../components/atoms/vectors/SephoraLogoSm";
import SteamCardImg from "../../../components/atoms/vectors/SteamCardIllus";
import SteamLogoSm from "../../../components/atoms/vectors/SteamLogoSm";
import DashboardLayout from "../../../components/templates/MainLayout";
import {
  setHotGiftCardsTabs,
  setHotGiftCardTab,
  setSelectedHotGiftCard,
} from "../../../Entity/HotGiftCardsEntity";
import { HotGiftCardDefaultWrapper } from "./hotGiftCardsStyles";

const hotGiftCardsList = [
  {
    icon: AmazonIconCircle,
    activeCardImg: AmazonCardImage,
    title: "Amazon",
    description: "USA, Cash Receipt ($25)",
    amount: 41000,
  },
  {
    icon: SteamLogoSm,
    activeCardImg: SteamCardImg,
    title: "Steam",
    description: "USA, Cash Receipt ($25)",
    amount: 39000,
  },
  {
    icon: AmericaExpressLogoSm,
    activeCardImg: AmericanExpressCardImg,
    title: "American Express",
    description: "USA, Cash Receipt ($25)",
    amount: 39000,
  },
  {
    icon: GooglePlayLogoSm,
    activeCardImg: GooglePlayImg,
    title: "Google Play",
    description: "USA, Cash Receipt ($25)",
    amount: 42000,
  },
  {
    icon: MacyLogoSm,
    activeCardImg: GooglePlayImg,
    title: "Macy's",
    description: "USA, Cash Receipt ($25)",
    amount: 31000,
  },
  {
    icon: SephoraLogoSm,
    activeCardImg: SephoraCardImg,
    title: "Sephora",
    description: "USA, Cash Receipt ($25)",
    amount: 41500,
  },
  {
    icon: AppleLogoIcon,
    activeCardImg: ItunesCardImg,
    title: "Apple iTunes",
    description: "USA, Cash Receipt ($25)",
    amount: 41000,
  },
  {
    icon: RazerGoldLogoSm,
    activeCardImg: RazerGoldImg,
    title: "Razer Gold",
    description: "USA, Cash Receipt ($25)",
    amount: 36500,
  },
];
const HotGiftCardsDefault = () => {
  const handleCardSelection = (card: any) => {
    setSelectedHotGiftCard(card);
    setHotGiftCardsTabs("add", card.title);
  };
  return (
    <HotGiftCardDefaultWrapper>
      <div className="title-wrapper">
        <h1>Hot Gift Cards 🔥</h1>
        <Paragraph>See the giftcards that are hot and high below</Paragraph>
      </div>
      <div className="list-wrapper">
        {hotGiftCardsList.map((card, index) => (
          <div key={card.title} className="list-item">
            <ListItemCard
              icon={<card.icon />}
              title={card.title}
              titleDescription={card.description}
              value={`₦${card.amount.toLocaleString()}`}
              showTextBorder
              onCardClick={() => handleCardSelection(card)}
            />
          </div>
        ))}
      </div>
    </HotGiftCardDefaultWrapper>
  );
};

export default HotGiftCardsDefault;
