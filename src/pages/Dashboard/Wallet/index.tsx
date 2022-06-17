import React from "react";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { H1 } from "../../../components/atoms/Typography";
import WalletBalanceCardSm from "../../../components/atoms/WalletBalanceCardSm";
import WalletBalanceCard from "../../../components/molecules/WalletBalanceCard";
import DashboardLayout from "../../../components/templates/MainLayout";
import WalletDefaultpage from "./walletDefaultpage";
import { WalletpageWrapper } from "./walletStyles";

const Wallet = () => {
  return (
    <DashboardLayout>
      <WalletpageWrapper>
        <WalletDefaultpage />
      </WalletpageWrapper>
    </DashboardLayout>
  );
};

export default Wallet;
