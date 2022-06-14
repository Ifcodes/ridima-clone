import React from "react";
import ListItemCard from "../../../components/atoms/ListItemCard";
import { Paragraph } from "../../../components/atoms/Typography";
import AmazonIconCircle from "../../../components/atoms/vectors/AmazonIconCircle";
import AmericaExpressLogoSm from "../../../components/atoms/vectors/AmericaExpressLogosm";
import AppleLogoIcon from "../../../components/atoms/vectors/AppleLogoIcon";
import GooglePlayLogoSm from "../../../components/atoms/vectors/GooglePlayLogoSm";
import MacyLogoSm from "../../../components/atoms/vectors/MacyLogoSm";
import RazerGoldLogoSm from "../../../components/atoms/vectors/RazerGoldLogo";
import SephoraLogoSm from "../../../components/atoms/vectors/SephoraLogoSm";
import SteamLogoSm from "../../../components/atoms/vectors/SteamLogoSm";
import DashboardLayout from "../../../components/templates/MainLayout";
import {
  setHotGiftCardsTabs,
  setHotGiftCardTab,
} from "../../../Entity/HotGiftCardsEntity";
import { HotGiftCardDefaultWrapper } from "./hotGiftCardsStyles";

const hotGiftCardsList = [
  {
    icon: AmazonIconCircle,
    title: "Amazon",
    description: "USA, Cash Receipt ($25)",
    amount: 41000,
  },
  {
    icon: SteamLogoSm,
    title: "Steam",
    description: "USA, Cash Receipt ($25)",
    amount: 39000,
  },
  {
    icon: AmericaExpressLogoSm,
    title: "American Express",
    description: "USA, Cash Receipt ($25)",
    amount: 39000,
  },
  {
    icon: GooglePlayLogoSm,
    title: "Google Play",
    description: "USA, Cash Receipt ($25)",
    amount: 42000,
  },
  {
    icon: MacyLogoSm,
    title: "Macy's",
    description: "USA, Cash Receipt ($25)",
    amount: 31000,
  },
  {
    icon: SephoraLogoSm,
    title: "Sephora",
    description: "USA, Cash Receipt ($25)",
    amount: 41500,
  },
  {
    icon: AppleLogoIcon,
    title: "Apple iTunes",
    description: "USA, Cash Receipt ($25)",
    amount: 41000,
  },
  {
    icon: RazerGoldLogoSm,
    title: "Razer Gold",
    description: "USA, Cash Receipt ($25)",
    amount: 36500,
  },
];
const HotGiftCardsDefault = () => {
  const handleCardSelection = (card: string) => {
    setHotGiftCardsTabs("add", card);
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
              onCardClick={() => handleCardSelection(card.title)}
            />
          </div>
        ))}
      </div>
    </HotGiftCardDefaultWrapper>
  );
};

export default HotGiftCardsDefault;
