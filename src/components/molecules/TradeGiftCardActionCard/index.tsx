import React from "react";
import { useNavigate } from "react-router-dom";
import SemiTriangleCard from "../../atoms/vectors/SemiTriangleCard";
import { TradeCardWrapper } from "./styledTradeCard";

const TradeGiftcardActionCard = () => {
  const navigate = useNavigate();
  return (
    <TradeCardWrapper onClick={() => navigate("/trade-giftcards")}>
      <div className="card-content">
        <h3>Trade Gift Cards</h3>
      </div>
      <SemiTriangleCard />
    </TradeCardWrapper>
  );
};

export default TradeGiftcardActionCard;
