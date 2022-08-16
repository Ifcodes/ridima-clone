import React, { useEffect, useState } from "react";
import { CircledBackground } from "../CircledBackground";
import BlueCardRecMobile from "../vectors/BlueCardRecMobile";
import CircleArrowUp from "../vectors/CircledArrowUp";
import ClosedEyeIconOutline from "../vectors/ClosedEyeIconOutlined";
import ExportIcon from "../vectors/ExportIcon";
import OpenEyeIconOutline from "../vectors/OpenEyeIconOutline";
import PlusIcon from "../vectors/PlusIcon";
import WalletbalCardBgMobileRec from "../vectors/WalletBalCardBgMobileRec";
import WalletBalCardBgRec from "../vectors/WalletBalCardBgRec";
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
  isDefault,
  width,
  handleAction = () => {},
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
  isDefault?: boolean;
  bgColor?: string;
  width?: string;
  handleAction?: Function;
}) => {
  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    if (!showEyeIcon) setShowValue(true);
  }, []);

  const cardActions = [
    {
      actionTitle: "Fund",
      icon: <PlusIcon linecolor="white" />,
    },
    {
      actionTitle: "Transfer",
      icon: <CircleArrowUp />,
    },
    {
      actionTitle: "Withdraw",
      icon: <ExportIcon />,
    },
  ];

  return (
    <WalletBalCardWrapper
      titleColor={titleColor}
      amountColor={amountColor}
      otherValueColor={otherValueColor}
      width={width}
      isDefault={isDefault}
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
      {isDefault && (
        <div className="card-actions-wrapper">
          {cardActions.map(({ icon, actionTitle }, index) => (
            <div
              key={actionTitle}
              className="action-wrapper"
              onClick={() => handleAction(actionTitle)}
            >
              <CircledBackground
                bgColor={index === 1 ? "#F4D06F" : "#e9f6fb33"}
                width="3.5rem"
                height="3.5rem"
                svgWidth="60%"
              >
                {icon}
              </CircledBackground>
              <span>{actionTitle}</span>
            </div>
          ))}
        </div>
      )}
      {isDefault ? (
        <div className="default-cardBg">
          <div className="large-screen">
            <WalletBalCardBgRec />
          </div>
          <div className="mobile-screen">
            <WalletbalCardBgMobileRec />
          </div>
        </div>
      ) : (
        <div className="wallet-cardBg">
          <WalletBalRectangleBlue bgcolor={bgColor} />
        </div>
      )}
    </WalletBalCardWrapper>
  );
};

export default WalletBalanceCardSm;
