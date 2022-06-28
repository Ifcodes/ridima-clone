import React from "react";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import CopyIconLg from "../../../components/atoms/vectors/CopyIconLg";
import GiftBoxIcon from "../../../components/atoms/vectors/GiftBoxIcon";
import WalletBalanceCardSm from "../../../components/atoms/WalletBalanceCardSm";
import DashboardLayout from "../../../components/templates/MainLayout";
import { ReferralPageWrapper } from "./referralStyles";

const Referral = () => {
  const stats = [
    {
      title: "",
      value: "",
    },
  ];
  return (
    <DashboardLayout childPadding="0">
      <ReferralPageWrapper>
        <div className="heading">
          <div className="title-cont">
            <div className="icon-cont">
              <GiftBoxIcon />
            </div>
            <div className="text-cont">
              <H1>Referral</H1>
              <Paragraph>
                Refer your friends and family and win exciting cash rewards. Win
                N200 when they sign up with your code and make a transaction of
                at least N5000. Refer Now!
              </Paragraph>
            </div>
          </div>
          <div className="cta-cont">
            <div className="referral-code">
              <span>Omoto2406</span>
              <CopyIconLg />
            </div>
            <div className="share-btn">
              <span>Share</span>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="wallet-bal-card">
            <WalletBalanceCardSm
              walletName="Referral Earnings"
              walletAmount="0.00"
              currency="NGN"
              lightBlueCard
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
      </ReferralPageWrapper>
    </DashboardLayout>
  );
};

export default Referral;
