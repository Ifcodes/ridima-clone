import { entity } from "simpler-state";

export const checkRatesStates = entity({
  testValue: 0,
  currentStage: 1,
  selectedGiftCard: "",
  selectedCurrency: "",
  selectedSubCategory: "",
  showSelectedSubCategoryModal: false,
  showCheckRateCurrencyModal: false,
  showCheckRateModal: false,
  showSelectGiftCardModal: false,
});

export const setCheckRatesModal = (val: boolean) => {
  const newState = checkRatesStates.get();
  checkRatesStates.set({ ...newState, showCheckRateModal: val });
};

export const setShowSelectGiftCardModal = (val: boolean) => {
  const newState = checkRatesStates.get();
  checkRatesStates.set({ ...newState, showSelectGiftCardModal: val });
};

export const setCheckRatesSubCatModal = (val: boolean) => {
  checkRatesStates.set((prev) => ({
    ...prev,
    showSelectedSubCategoryModal: val,
  }));
};

export const setShowCheckRateCurrencyModal = (val: boolean) => {
  const newState = checkRatesStates.get();
  checkRatesStates.set({ ...newState, showCheckRateCurrencyModal: val });
};

export const setCurrentCheckRateStage = (type: string) => {
  const newSate = checkRatesStates.get();
  if (type === "next" && newSate.currentStage < 3) {
    checkRatesStates.set((prev) => ({
      ...prev,
      currentStage: prev.currentStage + 1,
    }));
  } else if (type === "prev" && newSate.currentStage > 0) {
    checkRatesStates.set((prev) => ({
      ...prev,
      currentStage: prev.currentStage - 1,
    }));
  } else if (type === "reset") {
    checkRatesStates.set((prev) => ({ ...prev, currentStage: 1 }));
  }
  return;
};

export const setSelectedGiftCard = (card: string) => {
  checkRatesStates.set((prev) => ({ ...prev, selectedGiftCard: card }));
  setShowSelectGiftCardModal(false);
};

export const setSelectedCurrencyForCheckRates = (currency: string) => {
  checkRatesStates.set((prev) => ({ ...prev, selectedCurrency: currency }));
  setShowCheckRateCurrencyModal(false);
};

export const setSelectedSubCatForCheckRates = (category: string) => {
  checkRatesStates.set((prev) => ({ ...prev, selectedSubCategory: category }));
  setCheckRatesSubCatModal(false);
};
