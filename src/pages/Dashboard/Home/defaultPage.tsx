import React, { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Buttons";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import Modal from "../../../components/molecules/Modal";
import PayBillsActionCard from "../../../components/molecules/PayBillsActionCard";
import ProfileStatusCard from "../../../components/molecules/ProfileStatusCard";
import TradeGiftcardActionCard from "../../../components/molecules/TradeGiftCardActionCard";
import VirtualDollarMastercard from "../../../components/molecules/VirtualDollaMastercard.tsx";
import WalletBalanceCard from "../../../components/molecules/WalletBalanceCard";
import { HomeWrapper } from "./styledHomepage";
import { profileComplete } from "../../../Entity/ProfileComplete";
import KeypadModal from "../../../components/molecules/KeypadModal";
import {
  setWithdrawalAmount,
  setWithdrawKeypadModal,
  withdrawToBankStates,
} from "../../../Entity/WalletEntities/WithdrawToBankEntity";
import { keypadModalStates } from "../../../Entity/KeypadModalEntity";
import { CircledBackground } from "../../../components/atoms/CircledBackground";
import NotificationIcon from "../../../components/atoms/vectors/NotificationIcon";
import LeaderBoardIcon from "../../../components/atoms/vectors/LeaderBoardIcon";

const DefaultHomeScreen = ({
  toggleActiveScreen,
}: {
  toggleActiveScreen?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const profileIsComplete = profileComplete.use();
  const showWithdrawKeypadModal = withdrawToBankStates.use().showKeypadModal;
  const keypadAmount = keypadModalStates.use().amount;
  const [currentUser, setCurrentUser] = useState("Toyosil");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleWithdrawClick = () => {
    setWithdrawKeypadModal(true);
  };

  const handleModalCtaClick = () => {
    setWithdrawKeypadModal(false);
    setWithdrawalAmount(keypadAmount);
    navigate("/wallet/withdraw");
  };
  return (
    <HomeWrapper>
      <div className="salutation-cont">
        <div className="salutation">
          <span>Hello, </span>
          <span className="user">{currentUser}</span>
        </div>
        {/* div below is for mobile view */}
        <div className="secondary-tabs">
          <CircledBackground
            width="3rem"
            height="3rem"
            borderRadius="1rem"
            onClick={() => navigate("/notification")}
          >
            <NotificationIcon />
          </CircledBackground>
          <CircledBackground
            width="3rem"
            height="3rem"
            borderRadius="1rem"
            onClick={() => navigate("/leaderboard")}
          >
            <LeaderBoardIcon />
          </CircledBackground>
        </div>
      </div>
      <div className="statCard-wrapper">
        <WalletBalanceCard
          title="Naira Wallet Balance"
          value="30,500"
          btnText="Withdraw"
          currency="NGN"
          onClick={() => handleWithdrawClick()}
        />
        {profileIsComplete ? (
          <VirtualDollarMastercard onClick={() => {}} onCardClick={() => {}} />
        ) : (
          <ProfileStatusCard
            onClick={() => navigate("/bvn-authentication")}
            onCardClick={() => navigate("/bvn-authentication")}
          />
        )}
      </div>
      <div className="quick-action">
        <span>Quick actions</span>
        <hr />
      </div>
      <div className="quick-actions-cont">
        <TradeGiftcardActionCard />
        <PayBillsActionCard />
      </div>
      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        width={"28%"}
        mobileCardHeight={"55%"}
      >
        <div className="modal-content">
          <div className="text-content">
            <H1>Create a Virtual US Dollar Card</H1>
            <Paragraph>
              Create your new 4-digit transaction PIN. Make sure its stronger
              and different from the last one.
            </Paragraph>
          </div>
          <img src="/vectors/DoubleDebitCardIcon.svg" alt="" />
          <div className="modal-btn-cont">
            <span className="creation-fee">$2 creation Fee</span>
            <Button
              buttonBgType="modal"
              btnText="Create"
              mt="0"
              mb="1.5rem"
              width={"100%"}
              onClick={toggleActiveScreen}
            />
          </div>
        </div>
      </Modal>
      <KeypadModal
        showModal={showWithdrawKeypadModal}
        closeModal={() => setWithdrawKeypadModal(false)}
        modalTitle="Withdraw to Bank"
        handleBtnClick={() => handleModalCtaClick()}
        ctaText="Select Account"
      />
    </HomeWrapper>
  );
};

export default DefaultHomeScreen;
