import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/atoms/Buttons";
import { H1, Paragraph } from "../../../../../components/atoms/Typography";
import MessageCard from "../../../../../components/molecules/MessageCard";
import { SuccessMessageWrapper } from "../../../styledTradeGiftCard";

const ErrorMessageCard = () => {
  const navigate = useNavigate();
  return (
    <SuccessMessageWrapper errorMessage>
      <div className="img-cont">
        <img src="/vectors/ErrorMessageIcon.svg" alt="" />
      </div>
      <div className="text-cont">
        <H1 mt="2rem">Oh Snap!</H1>
        <Paragraph>
          Your Giftcard trade didn’t go through, please try again.
        </Paragraph>
      </div>
      <div className="btn-wrapper">
        <Button
          buttonBgType="modalSm"
          btnText="Try again"
          width="100%"
          onClick={() => navigate("/trade-giftcards")}
        />
      </div>
    </SuccessMessageWrapper>
  );
};

export default ErrorMessageCard;
