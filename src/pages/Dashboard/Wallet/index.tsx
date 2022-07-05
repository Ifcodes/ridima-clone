import React from "react";
import DashboardLayout from "../../../components/templates/MainLayout";
import WalletDefaultpage from "./walletDefaultpage";
import { WalletpageWrapper } from "./walletStyles";

const Wallet = () => {
  return (
    <DashboardLayout mobileChildPadding="0">
      <WalletpageWrapper>
        <WalletDefaultpage />
      </WalletpageWrapper>
    </DashboardLayout>
  );
};

export default Wallet;
