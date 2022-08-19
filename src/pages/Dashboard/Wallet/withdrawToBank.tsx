import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCard from "../../../components/atoms/AccountCard";
import Button from "../../../components/atoms/Buttons";
import AddButton from "../../../components/atoms/Buttons/AddButton";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import AddBankAccountModal from "../../../components/molecules/AddBankAccountModal";
import {
  addAccountStates,
  clearAddBankAccountStates,
  setAddAccountModal,
  setSelectedBankName,
} from "../../../components/molecules/AddBankAccountModal/addBankAccountEntity";
import SelectBankModal from "../../../components/molecules/SelectBankModal";
import {
  clearSelectBanksState,
  setSelectBank,
  setShowSelectBankModal,
} from "../../../components/molecules/SelectBankModal/selectBankEntity";
import DashboardLayout from "../../../components/templates/MainLayout";
import { clearKeypadStates } from "../../../Entity/KeypadModalEntity";
import {
  clearWithdrawalStates,
  setWithdrawAccounts,
  setWithdrawSuccessMsgModal,
  withdrawToBankStates,
} from "../../../Entity/WalletEntities/WithdrawToBankEntity";
import { demoAccounts } from "../../../utils/helpers/demoAccountsList";
import { StageTitleWrapper } from "../../CreateVirtualCard/createVirtualCardStyles";
import { WithdrawPageWrapper } from "./walletStyles";
import WithdrawSuccessMsg from "./Widgets/withdrawSuccessMsg";

const WithdrawToBank = () => {
  const navigate = useNavigate();
  const withdrawalAmount = withdrawToBankStates.use().withdrawalAmount;
  const accounts = withdrawToBankStates.use().accounts;
  const newAccountDetails = addAccountStates.use().formField;

  const [tabs, setTabs] = useState([
    "Quick Action",
    "Withdraw",
    "Select Bank Account",
  ]);
  const [activeAccount, setActiveAccount] = useState<number | null>(null);
  const [selectedAccount, setSelectedAccount] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
  });

  const handleTabClick = (type: string) => {
    if (type === "Withdraw") {
      navigate("/wallet");
    }
    if (type === "Quick Action") {
      navigate("/wallet");
      clearWithdrawalStates();
    }
    return;
  };

  const handleSelectAccount = (selected: any, indx: number) => {
    setActiveAccount(indx);
    setSelectedAccount(selected);
  };

  const handleSelectBank = (bank: string) => {
    setSelectedBankName(bank);
    setShowSelectBankModal(false);
    setAddAccountModal(true);
  };

  const closeWithdrawSuccessModalBtn = (val: boolean) => {
    clearWithdrawalStates();
    clearKeypadStates();
    clearSelectBanksState();
    clearAddBankAccountStates();
    setWithdrawSuccessMsgModal(val);
    navigate("/wallet");
  };

  const handleAddNewAccount = () => {
    setWithdrawAccounts(newAccountDetails);
    setAddAccountModal(false);
    clearAddBankAccountStates();
  };
  return (
    <>
      <DashboardLayout mobileChildPadding="0">
        <WithdrawPageWrapper>
          <StageTitleWrapper>
            <span className="home" onClick={() => navigate("/home")}>
              Home
            </span>
            {tabs.map((tab, index) => (
              <StageTitleWrapper
                key={`key-${tab}-of-${index}`}
                onClick={() => handleTabClick(tab)}
                isActive={index === tabs.length - 1}
              >
                <span className="arrow"> {" > "} </span>
                <span className="title"> {tab} </span>
              </StageTitleWrapper>
            ))}
          </StageTitleWrapper>
          <div className="add-card-cont">
            <AddButton onClick={() => setAddAccountModal(true)} />
            <span>Add New Bank Account</span>
          </div>
          <div className="line-cont">
            <HorizontalLinedTitle text="Saved Bank Account" />
          </div>
          <div className="cards-wrapper">
            {accounts.map((account, index) => (
              <AccountCard
                key={`${account.accountName}-${index}`}
                accountName={account.accountName}
                accountNumber={account.accountNumber}
                bankName={account.bankName}
                cardType={index === 0 ? "Primary" : ""}
                onCardClick={() => handleSelectAccount(account, index)}
                isActive={activeAccount === index}
              />
            ))}
          </div>

          <Button
            btnText="Proceed"
            width="27rem"
            mt="9rem"
            disabled={activeAccount === null}
            onClick={() => setWithdrawSuccessMsgModal(true)}
          />
        </WithdrawPageWrapper>
      </DashboardLayout>
      <WithdrawSuccessMsg
        closeModal={() => closeWithdrawSuccessModalBtn(false)}
        accountName={selectedAccount.accountName}
        amount={withdrawalAmount}
      />
      <AddBankAccountModal handleBtnClick={() => handleAddNewAccount()} />
      <SelectBankModal handleSelectBank={handleSelectBank} />
    </>
  );
};

export default WithdrawToBank;
