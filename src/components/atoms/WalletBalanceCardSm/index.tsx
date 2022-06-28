import React, { useEffect, useState } from "react";
import ClosedEyeIconOutline from "../vectors/ClosedEyeIconOutlined";
import OpenEyeIconOutline from "../vectors/OpenEyeIconOutline";
import { WalletBalCardWrapper } from "./walletBalanceCardStyles";

const WalletBalanceCardSm = ({
  walletName,
  walletAmount,
  currency,
  lightBlueCard,
  titleColor,
  amountColor,
  showEyeIcon,
  otherValue,
  otherValueColor,
}: {
  walletName?: string;
  walletAmount?: string;
  currency?: string;
  lightBlueCard?: boolean;
  titleColor?: string;
  amountColor?: string;
  showEyeIcon?: boolean;
  otherValue?: string;
  otherValueColor?: string;
}) => {
  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    if (!showEyeIcon) setShowValue(true);
  }, []);

  return (
    <WalletBalCardWrapper
      titleColor={titleColor}
      amountColor={amountColor}
      otherValueColor={otherValueColor}
    >
      <div className="card-content">
        <div className="title-amount-cont">
          <span className="title">{walletName}</span>
          {showValue ? (
            <div className="amount-cont">
              <h1 className="amount">
                {walletAmount} <sup>{currency}</sup>
              </h1>
            </div>
          ) : (
            <div className="mask">******</div>
          )}
        </div>
        {showEyeIcon && (
          <div className="eye-icon" onClick={() => setShowValue(!showValue)}>
            {showValue ? <ClosedEyeIconOutline /> : <OpenEyeIconOutline />}
          </div>
        )}
        {otherValue && <span className="other-value">{otherValue}</span>}
      </div>
      {lightBlueCard ? (
        <img src="/vectors/WalletBalRectangleLight.svg" alt="" />
      ) : (
        <img src="/vectors/WalletBalRectangle.svg" alt="" />
      )}
    </WalletBalCardWrapper>
  );
};

export default WalletBalanceCardSm;
