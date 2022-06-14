import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/templates/MainLayout";
import {
  payBillsState,
  setPayBillActiveTabChange,
  setPayBillsTabs,
} from "../../Entity/PayBillsEntity";
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

  const handleTabClick = (index: number) => {
    setPayBillsTabs("remove", undefined, index);
  };

  return (
    <DashboardLayout>
      <PayBillsWrapper>
        <StageTitleWrapper darkBgShade>
          <span className="home" onClick={() => navigate("/home")}>
            Home
          </span>
          {tabs.map((tab, index) => (
            <StageTitleWrapper
              key={`key-${tab}-of-${index}`}
              onClick={() => handleTabClick(index)}
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
