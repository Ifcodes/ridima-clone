import React, { useState } from "react";
import CustomRadioButton from "../../atoms/CustomRadioButton";
import { H1 } from "../../atoms/Typography";
import Modal from "../Modal";
import { SelectedCurrencyModalWrapper } from "./selectCurrencyModalStyles";

const SelectCurrencyModal = ({
  openModal,
  closeModal = () => {},
  selectCurrency = () => {},
  selectedCurrency,
}: {
  openModal: boolean;
  closeModal?: Function;
  selectCurrency?: Function;
  selectedCurrency?: string;
}) => {
  const currencyList = [
    "🇺🇸 United State Dollars (USD)",
    "🇬🇧 British Pounds (GBP)",
    "🇪🇺 Europian Euros (EUR)",
    "🇨🇦 Canadian Dollars (CAD)",
    "🇦🇺 Australian Dollars (AUD)",
  ];
  return (
    <Modal showModal={openModal} closeModal={closeModal} showCloseBtn>
      <SelectedCurrencyModalWrapper>
        <H1 mt="0">Select Currency</H1>
        <div className="currency-list-cont">
          {currencyList.map((currency, index) => (
            <div
              key={currency}
              className="currency-cont"
              onClick={() => selectCurrency(currency)}
            >
              <span className="currency">{currency}</span>
              <CustomRadioButton
                isChecked={selectedCurrency === currency}
                checkedColor={"#7165E3"}
              />
            </div>
          ))}
        </div>
      </SelectedCurrencyModalWrapper>
    </Modal>
  );
};

export default SelectCurrencyModal;
