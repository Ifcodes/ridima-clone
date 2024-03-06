import React from "react";
import DashboardLayout from "../../../components/templates/MainLayout";
import WalletDefaultpage from "./walletDefaultpage";
import { WalletpageWrapper } from "./walletStyles";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

const Wallet = () => {
  useDocumentTitle("Wallet");

  return (
    <DashboardLayout mobileChildPadding="0">
      <WalletpageWrapper>
        <WalletDefaultpage />
      </WalletpageWrapper>
    </DashboardLayout>
  );
};

export default Wallet;
