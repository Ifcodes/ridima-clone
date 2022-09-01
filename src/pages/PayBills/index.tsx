import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/templates/MainLayout";
import { resetAirtimeDataState } from "../../Entity/AirtimeAndDataEntity";
import { resetBettingState } from "../../Entity/BettingWalletEntity";
import { resetElectricityState } from "../../Entity/ElectricityBillEntity";
import { resetInternetWifiState } from "../../Entity/InteretAndWifiEntity";
import {
  payBillsState,
  removePayBillsTabs,
  setPayBillActiveTabChange,
  setPayBillsTabs,
  setSelectedPayBillToPay,
} from "../../Entity/PayBillsEntity";
import { resetTvCableEntity } from "../../Entity/TvCablesEntity";
import { StageTitleWrapper } from "../CreateVirtualCard/createVirtualCardStyles";
import AirtimeAndData from "./Airtime&Data";
import BettingWallets from "./Betting";
import ElectricityBill from "./ElectricityBill";
import InternetAndWifi from "./Internet&Wifi";
import PayBillsDefault from "./payBillsDefault";
import { PayBillsWrapper } from "./payBillsStyles";
import TvCables from "./TvCables";

const PayBills = () => {
  const navigate = useNavigate();
  const payBillState = payBillsState.use();
  const tabs = payBillState.tabs;
  const activeTab = payBillState.activeTab;
  const selectedBill = payBillState.selectedBillToPay;

  const handleTabClick = (tab: string, index: number) => {
    if (tab === "Pay Bills") {
      resetBettingState();
      resetAirtimeDataState();
      resetTvCableEntity();
      resetElectricityState();
      resetInternetWifiState();
    }
    if (index < 1) {
      setPayBillActiveTabChange("prev");
      setSelectedPayBillToPay("");
      removePayBillsTabs(index);
    }
    return;
  };

  const handleNavigateHome = () => {
    navigate("/home");
    setPayBillActiveTabChange("reset");
  };

  return (
    <DashboardLayout>
      <PayBillsWrapper>
        <StageTitleWrapper darkBgShade>
          <span className="home" onClick={() => handleNavigateHome()}>
            Home
          </span>
          {tabs.map((tab, index) => (
            <StageTitleWrapper
              key={`key-${tab}-of-${index}`}
              onClick={() => handleTabClick(tab, index)}
              isActive={index === activeTab}
            >
              <span className="arrow"> {" > "} </span>
              <span className="title"> {tab} </span>
            </StageTitleWrapper>
          ))}
        </StageTitleWrapper>
        {selectedBill === "" && <PayBillsDefault />}
        {selectedBill === "Airtime & Data" && <AirtimeAndData />}
        {selectedBill === "Internet & Wifi" && <InternetAndWifi />}
        {selectedBill === "TV cables" && <TvCables />}
        {selectedBill === "Betting Wallet" && <BettingWallets />}
        {selectedBill === "Electricity Bill" && <ElectricityBill />}
      </PayBillsWrapper>
    </DashboardLayout>
  );
};

export default PayBills;
