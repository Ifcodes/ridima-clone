import React, { useState } from "react";
import {
  setShowFundWarningModal,
  setShowUseUssdCodeModal,
} from "../../../Entity/WalletEntities/FundWalletEntity";
import SelectedBankUssdCard from "../../atoms/SelectedBankUssdCard";
import Selector from "../../atoms/Selector";
import { H1 } from "../../atoms/Typography";
import Modal from "../Modal";
import { UseUssdCodeContainer } from "./ussdCodeModalStyles";

const UseUssdCodeModal = ({
  openModal,
  closeModal,
  amount,
  accountNumber,
}: {
  openModal: boolean;
  closeModal: Function;
  amount?: string;
  accountNumber?: string;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    label?: string;
    code?: string;
  }>({
    label: "",
    code: "",
  });

  const options = [
    {
      label: "United Bank for Africa",
      code: "*919*",
    },
    {
      label: "Access Bank",
      code: "*901*",
    },
    {
      label: "Eco Bank",
      code: "*326*",
    },
    {
      label: "Guaranty Trust Bank",
      code: "*777*",
    },
    {
      label: "Heritage Bank",
      code: "*322*",
    },
    {
      label: "Zenith Bank",
      code: "*966*",
    },
  ];

  const handleItemSelection = (item: any) => {
    setSelectedItem(item);
    setShowDropdown(false);
  };

  const handleTelIconClick = () => {
    setShowUseUssdCodeModal(false);
    setShowFundWarningModal(true);
  };

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(`${selectedItem.code}${accountNumber}#`)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal showModal={openModal} closeModal={closeModal} width={"28rem"}>
      <UseUssdCodeContainer>
        <H1 mt="0">Use USSD Code</H1>
        <H1 mt="3rem">₦ {amount}</H1>
        <div className="other-content">
          <Selector
            width="100%"
            selectorTitle={selectedItem.label || "Select Bank"}
            selectedDropdownItem={selectedItem.label}
            titleIsActive={selectedItem !== ""}
            dropDownList={options}
            showDropdown={showDropdown}
            onClick={() => setShowDropdown(!showDropdown)}
            handleSelectItem={handleItemSelection}
          />
          <div className="card-cont">
            <SelectedBankUssdCard
              code={`${selectedItem.code}${accountNumber}#`}
              onTelIconClick={() => handleTelIconClick()}
              onCopyIconClick={handleCopyClick}
              isCopied={isCopied}
            />
          </div>
          <p className="description">
            Dial this code on your device and follow the prompt.
          </p>
        </div>
      </UseUssdCodeContainer>
    </Modal>
  );
};

export default UseUssdCodeModal;
