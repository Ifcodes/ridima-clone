import React, { useState } from "react";
import styled from "styled-components";
import SelecInput from "../../atoms/Forms/Select";
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
