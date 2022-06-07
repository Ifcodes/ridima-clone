import React, { useState } from "react";
import Input from "../../../../components/atoms/Forms/Input";
import HorizontalLinedTitle from "../../../../components/atoms/TitleWithHorizontalLine";
import TradeSummaryCard from "../../../../components/molecules/TradeSummaryCard";
import { tradeSummaryItems } from "../../../../Entity/TradeSummaryData";
import { TradeSummaryWrapper } from "../../styledTradeGiftCard";

const TradeSummary = () => {
  const tradeSummaryDetails = tradeSummaryItems.use();
  const [ecodeField, setEcodeField] = useState("");

  return (
    <TradeSummaryWrapper>
      <div className="hr-line">
        <HorizontalLinedTitle text="Trade Summary" />
      </div>
      <div className="card-wrapper">
        <TradeSummaryCard
          transactionDate={tradeSummaryDetails.transactionDate}
          cardAmount={tradeSummaryDetails.cardAmount}
          rate={tradeSummaryDetails.rate}
          expectedValue={tradeSummaryDetails.expectedValue}
          cardIcon={tradeSummaryDetails.cardIcon}
          cardName={tradeSummaryDetails.cardName}
          cardDescription={tradeSummaryDetails.cardDescription}
          images={tradeSummaryDetails.images}
        />
      </div>
      <div className="input-cont">
        <Input
          width="27rem"
          mt="2rem"
          label="Enter Code if card is blury (optional)"
          placeholder="e.g XDG2345678901234"
          value={ecodeField}
          onChange={(e) => setEcodeField(e.target.value)}
        />
      </div>
    </TradeSummaryWrapper>
  );
};

export default TradeSummary;
