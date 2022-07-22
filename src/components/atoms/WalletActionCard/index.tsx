import React from "react";
import { CardProps } from "../../../types";
import WalletActionCardLeftBg from "../vectors/WalletActionCardLeftBg";
import WalletActionCardRightBg from "../vectors/WalletActionCardRightBg";
import { WalletActionCardWrap } from "./walletActionCardStyle";

interface WalletActionCardProps extends CardProps {
  isYellowBg?: boolean;
  cardType?: string;
}

const WalletActionCard = ({
  title,
  icon,
  isYellowBg,
  cardType,
  bgColor,
  onCardClick,
}: WalletActionCardProps) => {
  return (
    <WalletActionCardWrap isYellowBg={isYellowBg} onClick={onCardClick}>
      <div className="card-content">
        <>{icon}</>
        <span>{title}</span>
      </div>
      {cardType === "right" ? (
        <WalletActionCardRightBg bgcolor={bgColor} />
      ) : (
        <WalletActionCardLeftBg bgcolor={bgColor} />
      )}
    </WalletActionCardWrap>
  );
};

export default WalletActionCard;
