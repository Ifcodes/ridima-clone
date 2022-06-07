import React from "react";
import Button from "../../../../../components/atoms/Buttons";
import { Paragraph } from "../../../../../components/atoms/Typography";
import MessageCard from "../../../../../components/molecules/MessageCard";
import { SuccessMessageWrapper } from "../../../styledTradeGiftCard";

const SuccessMessageCard = () => {
  return (
    <SuccessMessageWrapper>
      <div className="img-cont">
        <img
          src="/vectors/SuccessMessageIconGreen2.svg"
          alt=""
          className={"illustration"}
        />
      </div>
      <div className="text-cont">
        <h1>Super Smooth</h1>
        <Paragraph>
          We’ve received your Giftcard trade and it is currently being
          processed. We’ll notify you of your transaction status soon.
        </Paragraph>
      </div>
      <div className="btn-wrapper">
        <Button
          buttonBgType="modalSm"
          btnText="Make another trade"
          width="22rem"
        />
        <Button
          buttonBgType="reversedModal"
          btnText="See Transaction Status"
          width="20rem"
          mt="0"
        />
      </div>
    </SuccessMessageWrapper>
  );
};

export default SuccessMessageCard;
