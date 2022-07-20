import React from "react";
import { useNavigate } from "react-router-dom";
import { TradeCardWrapper } from "./styledTradeCard";

const TradeGiftcardActionCard = () => {
  const navigate = useNavigate();
  return (
    <TradeCardWrapper onClick={() => navigate("/trade-giftcards")}>
      <div className="card-content">
        <h3>Trade Gift Cards</h3>
      </div>
      <img src="/vectors/SemiTriangleCard.svg" alt="" />
    </TradeCardWrapper>
  );
};

export default TradeGiftcardActionCard;
