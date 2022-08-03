import React from "react";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import WalletBalanceCardSm from "../../../components/atoms/WalletBalanceCardSm";

const ReferralDetails = () => {
  return (
    <>
      <div className="page-content">
        <div className="wallet-bal-card">
          <WalletBalanceCardSm
            walletName="Referral Earnings"
            walletAmount="0.00"
            currency="NGN"
            bgColor="#EBE9FB"
            titleColor="#000000"
            amountColor="#7165E3"
            otherValue="18 Jan, 12:45"
          />
        </div>
        <div className="line-title">
          <HorizontalLinedTitle text="Referral Details" textColor="#828282" />
        </div>
        <div className="stats-wrapper">
          <div className="stat">
            <span className="stat-title">Total Reward</span>
            <span className="stat-value">₦0</span>
          </div>
          <div className="stat">
            <span className="stat-title">
              Signups with eligible transactions
            </span>
            <span className="stat-value">2</span>
          </div>
          <div className="stat">
            <span className="stat-title">Earnings Per Referal</span>
            <span className="stat-value">₦200</span>
          </div>
          <div className="stat">
            <span className="stat-title">Referred user</span>
            <span className="stat-value">0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralDetails;
