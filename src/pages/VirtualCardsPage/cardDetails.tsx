import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActionCard from "../../components/atoms/ActionCard";
import { H1 } from "../../components/atoms/Typography";
import TransactionDetailsCard from "../../components/molecules/TransactionDetailsCard";
import VirtualCard from "../../components/molecules/VirtualCard";
import { StageTitleWrapper } from "../CreateVirtualCard/createVirtualCardStyles";
import DashboardLayout from "../../components/templates/MainLayout";
import { setProfileComplete } from "../../Entity/ProfileComplete";
import {
  selectedVirtualCardData,
  setSelectedVirtualCardData,
} from "../../Entity/SelectedVirtualCardData";
import { cardDataProps } from "../../types";
import { cardActions } from "../../utils/helpers/cardActions.";
import { cardDataList } from "../../utils/helpers/cardsData";
import FundActiveCard from "./FundActiveCard";
import { CardDetailsWrapper } from "./styledVirtualCards";
import CardDetailsModal from "./widgets/cardDetailsModal";
import FreezeCardModal from "./widgets/freezeCardModal";
import Withdraw from "./withdraw";
import HorizontalLinedTitle from "../../components/atoms/TitleWithHorizontalLine";
import MobileHeader from "../../components/atoms/MobileHeader";

const CardDetails = () => {
  const navigate = useNavigate();
  const cardData = selectedVirtualCardData.use();
  const params = useParams();
  const [showDetailsModal, setShowDetails] = useState(false);
  const [showFreezeCardModal, setShowFreezeCardModal] = useState(false);
  const [activeAction, setActiveAction] = useState("");
  const [tabs, setTabs] = useState(["Virtual cards"]);
  const [activeTab, setActiveTab] = useState(0);
  const [list] = useState(cardDataList);

  useEffect(() => {
    const selectedCard = list.find(
      (card) => card.id === params.id
    ) as cardDataProps;
    setSelectedVirtualCardData(selectedCard);
    setTabs(tabs.concat(selectedCard.cardName));
    setActiveTab(activeTab + 1);
  }, []);

  const toggleActiveScreen = () => {
    navigate("/home");
    setProfileComplete(true);
  };

  const handleTabClick = (type: string, index: number) => {
    if (type === "mobile") {
      if (activeTab > 0) {
        setTabs(tabs.slice(0, index + 1));
        setActiveAction("");
        setActiveTab(activeTab - 1);
      } else if (activeTab === 0) {
        console.log("clicked", activeTab);
        navigate("/virtual-cards");
      }
    } else if (type === "Virtual cards") {
      navigate("/virtual-cards");
    } else {
      setTabs(tabs.slice(0, index + 1));
      setActiveAction("");
      setActiveTab(activeTab - 1);
    }
    return;
  };

  const handleActionClick = (actionType: string) => {
    if (actionType === "Details") {
      setShowDetails(true);
    } else if (actionType === "Freeze") {
      setShowFreezeCardModal(true);
    } else {
      setActiveAction(actionType);
      setTabs(tabs.concat(actionType));
      setActiveTab(activeTab + 1);
    }
  };

  return (
    <DashboardLayout mobileChildPadding="0">
      <CardDetailsWrapper>
        <div
          className="heading"
          onClick={() => handleTabClick("mobile", activeTab)}
        >
          <MobileHeader title={activeTab === 0 ? "" : tabs[activeTab]} />
        </div>
        <div className="stage-title-cont">
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
        </div>
        {activeAction === "Fund" ? (
          <FundActiveCard />
        ) : activeAction === "Withdraw" ? (
          <Withdraw />
        ) : (
          <div className="main-content">
            <div className="card-display">
              <VirtualCard
                cardBgColor={cardData.cardDesign}
                cardName={cardData.cardName}
                cardNumber={cardData.cardNumber}
                cardOwnerName={cardData.cardOwnerName}
                cardExpiry={cardData.cardExpiry}
                isActive={true}
                currencyInitial={cardData.currency.initial}
                currencySymbol={cardData.currency.symbol}
                cardFund={cardData.cardFund}
              />
            </div>
            <div className="action-heading">
              <H1 mt="3rem">Card Actions</H1>
            </div>
            <div className="card-actions-cont">
              {cardActions.map((action, index) => (
                <ActionCard
                  key={action.actionType}
                  cardBg={action.cardBg}
                  cardIcon={<action.actionIcon />}
                  cardTitle={action.actionType}
                  onClick={() => handleActionClick(action.actionType)}
                />
              ))}
            </div>
            <div className="card-transaction-heading">
              <HorizontalLinedTitle text="Card Transactions" />
            </div>
            <div className="transactions">
              {cardData.transactions.map((transaction, index) => (
                <TransactionDetailsCard
                  key={`${transaction.transactionType}-${index}`}
                  transactionType={transaction.transactionType}
                  title={transaction.transactionTitle}
                  amount={transaction.transactionAmount.amount}
                  currencySymbol={transaction.transactionAmount.currency}
                  transactionDate={transaction.transactionDate}
                  transactionTime={transaction.transactionTime}
                />
              ))}
            </div>
          </div>
        )}
        <CardDetailsModal
          showModal={showDetailsModal}
          closeModal={() => setShowDetails(false)}
        />
        <FreezeCardModal
          showModal={showFreezeCardModal}
          closeModal={() => setShowFreezeCardModal(false)}
        />
      </CardDetailsWrapper>
    </DashboardLayout>
  );
};

export default CardDetails;
