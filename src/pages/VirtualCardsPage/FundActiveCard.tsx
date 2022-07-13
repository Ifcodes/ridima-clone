import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/atoms/Buttons";
import Input from "../../components/atoms/Forms/Input";
import ArrowUpDown from "../../components/atoms/vectors/ArrowUpDown";
import Modal from "../../components/molecules/Modal";
import PinVerificationCard from "../../components/molecules/PinVerificationModal";
import VirtualCard from "../../components/molecules/VirtualCard";
import PinVerification from "../CreateVirtualCard/CardWidgets/PinVerification";
import { selectedVirtualCardData } from "../../Entity/SelectedVirtualCardData";
import { generateId } from "../../utils/generateId";
import { FundCardWrapper } from "./styledVirtualCards";

const FundActiveCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cardData = selectedVirtualCardData.use();
  const [currentExchangeRate] = useState(550);
  const [fundAmount, setFundAmount] = useState<number | string>();
  const [pinConfirmed, setPinConfirmed] = useState(false);
  const [openPinModal, setOpenPinModal] = useState(false);
  const [pin, setPin] = useState("");
  const [pinModalStage, setPinModalStage] = useState(0);
  const [userDetails, setUserDetails] = useState({
    profileImage: "",
    userName: "Toyosil",
  });

  const handleValueConversion = (e: ChangeEvent<HTMLInputElement>) => {
    setFundAmount(e.target.value);
  };

  const nairaValue = fundAmount ? Number(fundAmount) * 550 : "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pinConfirmed === false) {
      setOpenPinModal(true);
    }
  };

  const handlePinChange = (val: string) => {
    setPin(val);
  };

  const verifyPin = () => {
    setTimeout(() => {
      setPinModalStage(pinModalStage + 1);
    }, 4000);
  };

  const handlePinVerificationDone = () => {
    setOpenPinModal(false);
    setFundAmount("");
    setPinModalStage(0);
    setPin("");
    navigate("/virtual-cards");
  };

  return (
    <FundCardWrapper>
      <div className="form-cont">
        <h1 className="form-cont-title">
          How much do you want to fund this card with?
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="exchange-rate-text">
            <span>Exchange rate: NGN{currentExchangeRate} ≈ $1</span>
          </div>
          <Input
            id={generateId()}
            placeholder="0"
            symbol="$"
            value={fundAmount}
            onChange={handleValueConversion}
          />
          <div className="arrow-cont">
            <ArrowUpDown />
          </div>
          <Input
            id={generateId()}
            placeholder="0"
            symbol="NGN"
            value={nairaValue}
            readOnly={nairaValue > 0}
          />
          <Button
            type="submit"
            disabled={!fundAmount}
            btnText="Fund Card"
            mt="4.5rem"
          />
        </form>
      </div>
      <div className="virtual-card-cont">
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
      <Modal
        width="30%"
        cardHeight="95vh"
        showModal={openPinModal}
        showCloseBtn
        closeModal={() => setOpenPinModal(false)}
      >
        <PinVerificationCard
          imgUrl={userDetails.profileImage}
          user={userDetails.userName}
          pin={pin}
          handlePinInput={handlePinChange}
          pvMessageTitle="Super Smoooth!"
          pvMessage="You’ve successfully created your virtual US Dollar card. You can start paying online."
          pvMessageBtnText="Done"
          pvBtnAction={() => handlePinVerificationDone()}
          handlePinSubmit={verifyPin}
          pinModalStage={pinModalStage}
        />
      </Modal>
    </FundCardWrapper>
  );
};

export default FundActiveCard;
