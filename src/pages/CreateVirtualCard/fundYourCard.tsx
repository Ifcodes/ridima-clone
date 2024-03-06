import React, { FormEvent, useEffect, useState } from "react";
import { generateId } from "../../utils/generateId";
import Button from "../../components/atoms/Buttons";
import Input from "../../components/atoms/Forms/Input";
import { Paragraph } from "../../components/atoms/Typography";
import VirtualCard from "../../components/molecules/VirtualCard";
import Modal from "../../components/molecules/Modal";
import ConfirmFunding from "./CardWidgets/confirmFunding";
import PinVerification from "./CardWidgets/PinVerification";
import PinVerificationSuccess from "./CardWidgets/PinVerificationSuccess";
import { FundYourCardWrapper } from "./createVirtualCardStyles";
import {
  setCreateVCardConfirmFundModal,
  setCreateVCardPinVerifyModal,
  setCreateVCardSuccessMsgModal,
} from "../../Entity/CreateVirtualCardEntity";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const FundYourCard = ({ selectedCard }: { selectedCard: string }) => {
  useDocumentTitle("Fund Your Card");

  const [fundAmount, setFundAmount] = useState("");
  const [pin, setPin] = useState("");
  const [currentExchangeRate] = useState(550);
  const [userDetails] = useState({
    profileImage: "",
    userName: "Toyosil",
  });

  const nairaAmount = currentExchangeRate * Number(fundAmount);

  const handlePinChange = (val: string) => {
    setPin(val);
  };

  useEffect(() => {
    if (pin.length === 4) {
      setCreateVCardPinVerifyModal(false);
      setCreateVCardSuccessMsgModal(true);
    }
  }, [pin]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCreateVCardConfirmFundModal(true);
  };

  return (
    <FundYourCardWrapper>
      <div className="form-cont">
        <h1>Fund your Card</h1>
        <Paragraph>
          You will be charged <b>(USD2) NGN1100</b> to create your virtual
          dollar card.
        </Paragraph>
        <form onSubmit={handleFormSubmit}>
          <Input
            id={generateId()}
            placeholder="0"
            symbol="$"
            value={fundAmount}
            onChange={(e) => setFundAmount(e.target.value)}
          />
          <div className="exchange-rate-text">
            <span>NGN{currentExchangeRate} ≈ $1</span>
          </div>
          <Button disabled={!fundAmount} btnText="Proceed" mt="4.5rem" />
        </form>
      </div>
      <div className="virtual-card-cont">
        <VirtualCard
          cardBgColor={selectedCard}
          cardName="Hetikal"
          cardFund=""
          cardOwnerName="Lawal Omotoyosi"
          cardNumber=""
          cardExpiry="01/02"
        />
      </div>

      <PinVerification
        imgUrl={userDetails.profileImage}
        user={userDetails.userName}
        handlePinInput={(val: string) => handlePinChange(val)}
        pin={pin}
      />

      <PinVerificationSuccess />

      <ConfirmFunding
        nairaAmount={nairaAmount}
        currentExchangeRate={currentExchangeRate}
      />
    </FundYourCardWrapper>
  );
};

export default FundYourCard;
