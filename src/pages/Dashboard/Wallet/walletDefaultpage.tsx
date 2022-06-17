import React, { useState } from "react";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { H1 } from "../../../components/atoms/Typography";
import MoneyAddIcon from "../../../components/atoms/vectors/MoneyAddIcon";
import MoneyRemoveIcon from "../../../components/atoms/vectors/MoneyRemoveIcon";
import WalletActionCard from "../../../components/atoms/WalletActionCard";
import WalletBalanceCardSm from "../../../components/atoms/WalletBalanceCardSm";
import KeypadModal from "../../../components/molecules/KeypadModal";
import PaymentMethodModal from "../../../components/molecules/PaymentMethodModal";
import UseUssdCodeModal from "../../../components/molecules/UseUssdCodeModal";
import {
  fundWalletStates,
  setShowFundWalletModal,
  setShowPayMethodModal,
  setShowUseUssdCodeModal,
} from "../../../Entity/WalletEntities/FundWalletEntity";
import { WalletpageDefaultWrapper } from "./walletStyles";

const walletActionCards = [
  {
    bgColor: "#7165E3",
    icon: MoneyAddIcon,
    cardText: "Fund Wallet",
    cardType: "left",
    isYellow: false,
    iconColor: "white",
  },
  {
    bgColor: "#7D209F",
    icon: MoneyRemoveIcon,
    cardText: "Send Money",
    cardType: "left",
    isYellow: false,
    iconColor: "white",
  },
  {
    bgColor: "#F5CF48",
    icon: MoneyRemoveIcon,
    cardText: "Withdraw to Bank",
    cardType: "right",
    isYellow: true,
    iconColor: "#3F1E4B",
  },
  {
    bgColor: "#3F1E4B",
    icon: MoneyAddIcon,
    cardText: "Request Money",
    cardType: "right",
    isYellow: false,
    iconColor: "white",
  },
];
const WalletDefaultpage = () => {
  const fundWalletState = fundWalletStates.use();
  const showFundWalletModal = fundWalletState.showFundWalletModal;
  const showPayMethodModal = fundWalletState.showPayMethodModal;
  const showUseUssdCodeModal = fundWalletState.showUseUssdCodeModal;

  const handleCardClick = (type: string) => {
    if (type === "Fund Wallet") {
      console.log("clicked");
      setShowFundWalletModal(true);
    }
    return;
  };

  const handleFundWalletButtonClick = (modalType: string) => {
    if (modalType === "amount") {
      setShowFundWalletModal(false);
      setShowPayMethodModal(true);
    }
    if (modalType === "use-ussd-code") {
      setShowPayMethodModal(false);
      setShowUseUssdCodeModal(true);
    }
    return;
  };

  return (
    <WalletpageDefaultWrapper>
      <H1>Wallet</H1>
      <div className="wallet-card-cont">
        <WalletBalanceCardSm
          walletName="Naira Wallet"
          walletAmount="25,000"
          currency="NGN"
        />
      </div>
      <div className="horizontal-line-cont">
        <HorizontalLinedTitle text="Wallet Quick Actions" />
      </div>
      <div className="action-cards-wrapper">
        {walletActionCards.map((card, index) => (
          <WalletActionCard
            title={card.cardText}
            icon={<card.icon lineColor={card.iconColor} />}
            isYellowBg={card.isYellow}
            cardType={card.cardType}
            bgColor={card.bgColor}
            onCardClick={() => handleCardClick(card.cardText)}
          />
        ))}
      </div>
      <KeypadModal
        showModal={showFundWalletModal}
        closeModal={() => setShowFundWalletModal(false)}
        modalTitle="Fund Wallet"
        handleBtnClick={() => handleFundWalletButtonClick("amount")}
        ctaText="Fund Wallet"
      />
      <PaymentMethodModal
        showModal={showPayMethodModal}
        closeModal={() => setShowPayMethodModal(false)}
        bankName="Wema Bank"
        accountName="Omotoyosi Lawal"
        accountNumber="1234567890"
        handleUseUssdCardClick={() =>
          handleFundWalletButtonClick("use-ussd-code")
        }
      />
      <UseUssdCodeModal
        openModal={showUseUssdCodeModal}
        closeModal={() => setShowUseUssdCodeModal(false)}
        amount="2000"
        accountNumber={"1234567890"}
      />
    </WalletpageDefaultWrapper>
  );
};

export default WalletDefaultpage;
