import React, { useState } from "react";
import ClosedEyeIconOutline from "../vectors/ClosedEyeIconOutlined";
import OpenEyeIconOutline from "../vectors/OpenEyeIconOutline";
import { WalletBalCardWrapper } from "./walletBalanceCardStyles";

const WalletBalanceCardSm = ({
  walletName,
  walletAmount,
  currency,
}: {
  walletName?: string;
  walletAmount?: string;
  currency?: string;
}) => {
  const [showValue, setShowValue] = useState(false);
  return (
    <WalletBalCardWrapper>
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
        <div className="eye-icon" onClick={() => setShowValue(!showValue)}>
          {showValue ? <ClosedEyeIconOutline /> : <OpenEyeIconOutline />}
        </div>
      </div>
      <img src="/vectors/WalletBalRectangle.svg" alt="" />
    </WalletBalCardWrapper>
  );
};

export default WalletBalanceCardSm;
