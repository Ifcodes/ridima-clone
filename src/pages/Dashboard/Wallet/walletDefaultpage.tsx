import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import TransactionDetailContainer from "../../../components/atoms/TransactionListItemContainer";
import { H1 } from "../../../components/atoms/Typography";
import MoneyAddIcon from "../../../components/atoms/vectors/MoneyAddIcon";
import MoneyRemoveIcon from "../../../components/atoms/vectors/MoneyRemoveIcon";
import WalletActionCard from "../../../components/atoms/WalletActionCard";
import WalletBalanceCardSm from "../../../components/atoms/WalletBalanceCardSm";
import KeypadModal from "../../../components/molecules/KeypadModal";
import PaymentMethodModal from "../../../components/molecules/PaymentMethodModal";
import UseUssdCodeModal from "../../../components/molecules/UseUssdCodeModal";
import WarningModal from "../../../components/molecules/WarningModal";
import {
  setSelectedTransaction,
  setShowTransactionModal,
} from "../../../Entity/ActivitieEntities";
import { keypadModalStates } from "../../../Entity/KeypadModalEntity";
import {
  fundWalletStates,
  setShowFundWalletModal,
  setShowFundWarningModal,
  setShowPayMethodModal,
  setShowUseUssdCodeModal,
} from "../../../Entity/WalletEntities/FundWalletEntity";
import {
  requestMoneyStates,
  setRequestMoneyKeypadModal,
} from "../../../Entity/WalletEntities/RequestMoneyEntity";
import {
  sendMoneyStates,
  setSendMoneyKeypadModal,
} from "../../../Entity/WalletEntities/SendMoneyEntity";
import {
  setWithdrawalAmount,
  setWithdrawKeypadModal,
  withdrawToBankStates,
} from "../../../Entity/WalletEntities/WithdrawToBankEntity";
import { walletTransactions } from "../../../utils/helpers/transactionsData";
import BillPaymentTransactionDetailsModal from "../Activities/widgets/billPaymentTransactionDetailModal";
import { WalletpageDefaultWrapper } from "./walletStyles";
import WithdrawSuccessMsg from "./Widgets/withdrawSuccessMsg";

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
  const navigate = useNavigate();
  const fundWalletState = fundWalletStates.use();
  const withdrawWalletState = withdrawToBankStates.use();
  const sendMoneyState = sendMoneyStates.use();
  const showFundWalletModal = fundWalletState.showFundWalletModal;
  const showPayMethodModal = fundWalletState.showPayMethodModal;
  const showUseUssdCodeModal = fundWalletState.showUseUssdCodeModal;
  const showWarningModal = fundWalletState.showWarningModal;
  const showWithdrawKeypadModal = withdrawWalletState.showKeypadModal;
  const showSendMoneyKeypadModal = sendMoneyState.showKeypadModal;
  const showRequestMoneyKeypad = requestMoneyStates.use().showKeypadModal;
  const keypadAmount = keypadModalStates.use().amount;

  const handleCardClick = (type: string) => {
    if (type === "Fund") {
      setShowFundWalletModal(true);
    }
    if (type === "Withdraw") {
      setWithdrawKeypadModal(true);
    }
    if (type === "Transfer") {
      setSendMoneyKeypadModal(true);
    }
    return;
  };

  const handleModalCtaClick = (modalType: string) => {
    if (modalType === "amount") {
      setShowFundWalletModal(false);
      setShowPayMethodModal(true);
    }
    if (modalType === "use-ussd-code") {
      setShowPayMethodModal(false);
      setShowUseUssdCodeModal(true);
    }
    if (modalType === "withdraw-amount") {
      setWithdrawKeypadModal(false);
      setWithdrawalAmount(keypadAmount);
      navigate("/wallet/withdraw");
    }
    if (modalType === "sendMoney") {
      setSendMoneyKeypadModal(false);
      navigate("/wallet/send-money");
    }
    if (modalType === "requestMoney") {
      setRequestMoneyKeypadModal(false);
      navigate("/wallet/request-money");
    }
    return;
  };

  const handleTransactionClick = (selectedTransaction: any) => {
    setSelectedTransaction(selectedTransaction);
    setShowTransactionModal(true);
  };

  return (
    <WalletpageDefaultWrapper>
      <H1>Wallet</H1>
      <div className="wallet-card-cont">
        <WalletBalanceCardSm
          walletName="Naira Wallet"
          walletAmount="25,000"
          currency="NGN"
          showEyeIcon
          isDefault
          width="100%"
          handleAction={handleCardClick}
        />
      </div>
      <div className="horizontal-line-cont">
        <HorizontalLinedTitle text="Wallet History" />
      </div>
      {/* <div className="action-cards-wrapper">
        {walletActionCards.map((card, index) => (
          <WalletActionCard
            key={card.cardText}
            title={card.cardText}
            icon={<card.icon linecolor={card.iconColor} />}
            isYellowBg={card.isYellow}
            cardType={card.cardType}
            bgColor={card.bgColor}
            onCardClick={() => handleCardClick(card.cardText)}
          />
        ))}
      </div> */}
      <div className="transaction-cont">
        {walletTransactions.map((transaction, index) => (
          <TransactionDetailContainer
            key={transaction.id}
            imgUrl={transaction.productIconUrl}
            icon={<transaction.icon />}
            transactionTitle={transaction.transactionTitle}
            transactionType={transaction.type}
            product={transaction.product}
            date={transaction.date}
            amount={transaction.amount.value}
            currency={transaction.amount.currency}
            transactionStatus={transaction.status}
            onTitleClick={() => handleTransactionClick(transaction)}
          />
        ))}
      </div>
      {showFundWalletModal && (
        <KeypadModal
          showModal={showFundWalletModal}
          closeModal={() => setShowFundWalletModal(false)}
          modalTitle="Fund Wallet"
          handleBtnClick={() => handleModalCtaClick("amount")}
          ctaText="Fund Wallet"
        />
      )}
      <PaymentMethodModal
        showModal={showPayMethodModal}
        closeModal={() => setShowPayMethodModal(false)}
        bankName="Wema Bank"
        accountName="Omotoyosi Lawal"
        accountNumber="1234567890"
        handleUseUssdCardClick={() => handleModalCtaClick("use-ussd-code")}
      />
      <UseUssdCodeModal
        openModal={showUseUssdCodeModal}
        closeModal={() => setShowUseUssdCodeModal(false)}
        amount={keypadAmount}
        accountNumber={"1234567890"}
      />
      <WarningModal
        showModal={showWarningModal}
        closeModal={() => setShowFundWarningModal(false)}
      />
      {showWithdrawKeypadModal && (
        <KeypadModal
          showModal={showWithdrawKeypadModal}
          closeModal={() => setWithdrawKeypadModal(false)}
          modalTitle="Withdraw to Bank"
          handleBtnClick={() => handleModalCtaClick("withdraw-amount")}
          ctaText="Select Account"
        />
      )}
      {showSendMoneyKeypadModal && (
        <KeypadModal
          showModal={showSendMoneyKeypadModal}
          closeModal={() => setSendMoneyKeypadModal(false)}
          modalTitle="Send Money"
          handleBtnClick={() => handleModalCtaClick("sendMoney")}
          ctaText="Proceed"
        />
      )}
      {showRequestMoneyKeypad && (
        <KeypadModal
          showModal={showRequestMoneyKeypad}
          closeModal={() => setRequestMoneyKeypadModal(false)}
          modalTitle="Request Money"
          handleBtnClick={() => handleModalCtaClick("requestMoney")}
          ctaText="Proceed"
        />
      )}
      <BillPaymentTransactionDetailsModal />
    </WalletpageDefaultWrapper>
  );
};

export default WalletDefaultpage;
