import React, { useState } from "react";
import BillCard from "../../components/atoms/BillCard";
import { H1 } from "../../components/atoms/Typography";
import BettingWalletIcon from "../../components/atoms/vectors/BettingWalletIcon";
import ElectrictyOutlineIcon from "../../components/atoms/vectors/ElectrcityOulineIcon";
import TelephoneOutlineIcon from "../../components/atoms/vectors/TelephoneIcon";
import TvOulineIcon from "../../components/atoms/vectors/TVIcon";
import WifiOutlineIcon from "../../components/atoms/vectors/WifiOutlineIcon";
import {
  setPayBillsTabs,
  setSelectedPayBillToPay,
} from "../../Entity/PayBillsEntity";
import { PayBillsDefaultWrapper } from "./payBillsStyles";

const billTypes = [
  {
    title: "Airtime & Data",
    icon: TelephoneOutlineIcon,
    bgColor: "#EBE9FB",
  },
  {
    title: "Internet & Wifi",
    icon: WifiOutlineIcon,
    bgColor: "#FAE69E",
  },
  {
    title: "TV cables",
    bgColor: "#F5EDF8",
    icon: TvOulineIcon,
  },
  {
    title: "Betting Wallet",
    bgColor: "#FBD0D0",
    icon: BettingWalletIcon,
  },
  {
    title: "Electricity Bill",
    bgColor: "#F2F2F2",
    icon: ElectrictyOutlineIcon,
  },
];

const PayBillsDefault = () => {
  const [active, setActive] = useState<number | undefined>();

  const handleBillCardClick = (index: number, title: string) => {
    setActive(index);
    setSelectedPayBillToPay(title);
    setPayBillsTabs(title);
  };

  return (
    <PayBillsDefaultWrapper>
      <div className="title-cont">
        <H1>Pay Bills</H1>
        <span>2.0% Off</span>
      </div>
      <div className="cards-cont">
        {billTypes.map((bill, index) => (
          <div
            key={bill.title}
            className="card-wrapper"
            onClick={() => handleBillCardClick(index, bill.title)}
          >
            <BillCard
              title={bill.title}
              icon={<bill.icon />}
              bgColor={bill.bgColor}
              isActive={index === active}
            />
          </div>
        ))}
      </div>
    </PayBillsDefaultWrapper>
  );
};

export default PayBillsDefault;
