import React from "react";
import Selector from "../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import SelectCurrencyModal from "../../../components/molecules/SelectCurrencyModal";
import SelectGiftCardModal from "../../../components/molecules/SelectGiftCardModal";
import {
  checkRatesStates,
  setSelectedCurrencyForCheckRates,
  setShowCheckRateCurrencyModal,
  setShowSelectGiftCardModal,
} from "../../../Entity/CheckRatesEntity";
import { CheckRatesFormWrapper } from "./checkRatesStyles";

const GiftCardsCurrency = () => {
  const selectedGiftCard = checkRatesStates.use().selectedGiftCard;
  const selectedCurrency = checkRatesStates.use().selectedCurrency;
  const showCurrencyModal = checkRatesStates.use().showCheckRateCurrencyModal;

  const openModal = (type: string) => {
    if (type === "selectGiftCard") {
      setShowSelectGiftCardModal(true);
    } else if (type === "selectCurrency") {
      setShowCheckRateCurrencyModal(true);
    }
  };

  const selectCurrency = (currency: string) => {
    setSelectedCurrencyForCheckRates(currency);
  };
  return (
    <CheckRatesFormWrapper>
      <div>
        <HorizontalLinedTitle text="What Giftcard?" />
      </div>
      <div className="form-content">
        <Selector
          selectorTitle={selectedGiftCard || "Select Giftcard"}
          onClick={() => openModal("selectGiftCard")}
        />
      </div>
      <div className="title-cont">
        <HorizontalLinedTitle text="Select Currency" />
      </div>
      <div className="form-content">
        <Selector
          selectorTitle={selectedCurrency || "Select currency"}
          onClick={() => openModal("selectCurrency")}
        />
      </div>
      <SelectGiftCardModal />
      <SelectCurrencyModal
        openModal={showCurrencyModal}
        closeModal={() => setShowCheckRateCurrencyModal(false)}
        selectCurrency={selectCurrency}
      />
    </CheckRatesFormWrapper>
  );
};

export default GiftCardsCurrency;
