import React, { FormEvent, useEffect, useState } from "react";
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

  const handleProceed = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (buyGiftCardStates.currentStage < 1) setBuyGiftcardStage("next");
  };

  return (
    <CardAmountFormWrapper isActive={expectedValue > 0}>
      <form onSubmit={handleProceed} className="form-cont">
        <Input
          label="Enter amount"
          symbol=""
          placeholder="1000"
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
        <div className="buy-giftCard-cta">
          <Paragraph> Payment is made with Naira wallet </Paragraph>
          <Button
            btnText="Buy GiftCard"
            disabled={!cardAmount}
            type={"submit"}
            width="100%"
            mt="1rem"
            mb="5rem"
          />
        </div>
      </form>
    </CardAmountFormWrapper>
  );
};

export default CardAmountSelection;
