import React, { useEffect, useState } from "react";
import Button from "../../../../components/atoms/Buttons";
import Input from "../../../../components/atoms/Forms/Input";
import { Paragraph } from "../../../../components/atoms/Typography";
import {
  buyGiftCardsState,
  setBuyGiftcardStage,
  setCardPurchaseAmount,
  setExpectedValue,
} from "../../../../Entity/BuyGiftCardsEntity";
import { CardAmountFormWrapper } from "../buyGiftCardStyles";

const CardAmountSelection = () => {
  const buyGiftCardStates = buyGiftCardsState.use();
  const cardAmount = buyGiftCardStates.cardPurchaseAmount;
  const expectedValue = buyGiftCardStates.expectedValue;

  const rate = 590;

  useEffect(() => {
    if (cardAmount) setExpectedValue(Number(cardAmount) * rate);
  }, [cardAmount]);

  const handleProceed = () => {
    if (buyGiftCardStates.currentStage < 1) setBuyGiftcardStage("next");
  };

  return (
    <CardAmountFormWrapper isActive={expectedValue > 0}>
      <form action="" className="form-cont">
        <Input
          width="27rem"
          label="Enter amount"
          symbol="$"
          placeholder="$1000"
          value={cardAmount}
          onChange={setCardPurchaseAmount}
        />
        <div className="value-display-cont">
          <span>You will get:</span>
          <div className="value-cont">
            <span className="symbol">₦</span>
            <h1> {expectedValue.toLocaleString()}</h1>
          </div>
          <span>≠{rate}</span>
        </div>
        <div className="btn-cont">
          <Paragraph> Payment is made with Naira wallet </Paragraph>
          <Button
            btnText="Buy GiftCard"
            disabled={!cardAmount}
            width="27rem"
            mt="1rem"
            mb="5rem"
            onClick={() => handleProceed()}
          />
        </div>
      </form>
    </CardAmountFormWrapper>
  );
};

export default CardAmountSelection;
