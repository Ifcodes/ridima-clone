import React, { useEffect, useState } from "react";
import BlueCardRecMobile from "../vectors/BlueCardRecMobile";
import ClosedEyeIconOutline from "../vectors/ClosedEyeIconOutlined";
import OpenEyeIconOutline from "../vectors/OpenEyeIconOutline";
import WalletBalRectangleBlue from "../vectors/WalletBalRectangleBlue";
import WalletBalRectangleLight from "../vectors/WalletBalRectangleLight";
import { WalletBalCardWrapper } from "./walletBalanceCardStyles";

const WalletBalanceCardSm = ({
  walletName,
  walletAmount,
  currency,
  lightBlueCard,
  bgColor,
  titleColor,
  amountColor,
  showEyeIcon,
  otherValue,
  otherValueColor,
  showDefault,
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
  showDefault?: boolean;
  bgColor?: string;
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
      showDefault={showDefault}
    >
      <div className="wallet-card-content">
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
      {
        <div className="wallet-cardBg">
          <WalletBalRectangleBlue bgcolor={bgColor} />
        </div>
      }
    </WalletBalCardWrapper>
  );
};

export default WalletBalanceCardSm;
