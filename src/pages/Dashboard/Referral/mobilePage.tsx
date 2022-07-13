import React, { useState } from "react";
import Button from "../../../components/atoms/Buttons";
import CopyIconLg from "../../../components/atoms/vectors/CopyIconLg";

const MobileReferralPage = ({ activeTab, handleViewReferral = () => {} }: { activeTab?: string, handleViewReferral?: Function }) => {
  return (
    <div className="mobile-page-cont">
      <div className="content">
        <div className="img-cont">
          <img src="/vectors/ReferralIllustration.svg" alt="" />
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
      <div className="btn-cont">
        <Button
          btnText="View referral details"
          buttonBgType="modal"
          width="100%"
          mobileWidth="100%"
          onClick={() => handleViewReferral()}
        />
      </div>
    </div>
  );
};

export default MobileReferralPage;
