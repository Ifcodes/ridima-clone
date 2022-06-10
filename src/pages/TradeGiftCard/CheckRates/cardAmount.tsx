import React, { useEffect, useState } from "react";
import Input from "../../../components/atoms/Forms/Input";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { CardAmountFormWrapper } from "../BuyGiftCard/buyGiftCardStyles";
import { CheckRatesFormWrapper } from "./checkRatesStyles";

const CardAmount = () => {
  const [cardAmount, setCardAmount] = useState<string | undefined>();
  const [expectedValue, setExpectedValue] = useState(0);

  const rate = 550;

  useEffect(() => {
    if (cardAmount) {
      setExpectedValue(Number(cardAmount) * rate);
    } else {
      setExpectedValue(0);
    }
  }, [cardAmount]);

  return (
    <CheckRatesFormWrapper isActive={expectedValue > 0}>
      <div>
        <HorizontalLinedTitle text={`Enter Card Amount`} />
      </div>
      <div className="form-content">
        <span className="rates">Rate: NGN{rate}</span>
        <Input
          placeholder="$0"
          symbol={cardAmount ? "$" : ""}
          required
          value={cardAmount}
          onChange={(e) => setCardAmount(e.target.value)}
        />

        <div className="value-display-cont">
          <span>You would pay:</span>
          <div className="value-cont">
            <span className="symbol">₦</span>
            <h1> {expectedValue.toLocaleString()}</h1>
          </div>
          <span>≠{rate}</span>
        </div>
      </div>
    </CheckRatesFormWrapper>
  );
};

export default CardAmount;
