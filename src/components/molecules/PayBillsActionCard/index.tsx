import React from "react";
import { useNavigate } from "react-router-dom";
import PayBillsRectangle from "../../atoms/vectors/PayBillsActionCard";
import { PayBillsCardWrapper } from "./styledPayBillsCard";

const PayBillsActionCard = () => {
  const navigate = useNavigate();
  return (
    <PayBillsCardWrapper onClick={() => navigate("/pay-bills")}>
      <div className="card-content">
        <div>
          <h3>Pay Bills</h3>
          <span>2.0% Off</span>
        </div>
      </div>
      <PayBillsRectangle />
    </PayBillsCardWrapper>
  );
};

export default PayBillsActionCard;
