import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Buttons";
import { Paragraph } from "../../../components/atoms/Typography";
import EmptyTransactionIcon from "../../../components/atoms/vectors/EmptyTransactionIcon";
import { EmptyTransactionPageWrapper } from "./activitiesStyles";

const EmptyTransactionpage = () => {
  const navigate = useNavigate();
  return (
    <EmptyTransactionPageWrapper>
      <div className="content">
        <div className="empty-page-icon">
          <EmptyTransactionIcon />
        </div>
        <Paragraph>
          You have no transaction activities yet. You can see all your
          transaction activities here, when you trade.
        </Paragraph>
        <div className="cta-cont">
          <Button
            btnText="Trade giftcard"
            width="100%"
            mt="2rem"
            onClick={() => navigate("/trade-giftcards")}
          />
        </div>
      </div>
    </EmptyTransactionPageWrapper>
  );
};

export default EmptyTransactionpage;
