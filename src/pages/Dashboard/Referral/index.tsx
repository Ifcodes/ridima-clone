import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileHeader from "../../../components/atoms/MobileHeader";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import CopyIconLg from "../../../components/atoms/vectors/CopyIconLg";
import GiftBoxIcon from "../../../components/atoms/vectors/GiftBoxIcon";
import WalletBalanceCardSm from "../../../components/atoms/WalletBalanceCardSm";
import DashboardLayout from "../../../components/templates/MainLayout";
import MobileReferralPage from "./mobilePage";
import ReferralDetails from "./referralDetails";
import { ReferralPageWrapper } from "./referralStyles";

const Referral = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const viewReferralDetails = () => {
    setActiveTab(activeTab + 1);
  };

  const handleBackButton = () => {
    if (activeTab === 1) {
      setActiveTab(activeTab - 1);
    } else if (activeTab === 0) navigate("/home");
    else return;
  };

  return (
    <DashboardLayout childPadding="0" mobileChildPadding="0">
      <ReferralPageWrapper>
        <div className="header" onClick={() => handleBackButton()}>
          <MobileHeader title="Refer & Win" />
        </div>
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
        <div className="details">
          <ReferralDetails />
        </div>
        {activeTab === 0 && (
          <MobileReferralPage handleViewReferral={viewReferralDetails} />
        )}
        {activeTab === 1 && (
          <div className="mobile-referral-details">
            <ReferralDetails />
          </div>
        )}
      </ReferralPageWrapper>
    </DashboardLayout>
  );
};

export default Referral;
