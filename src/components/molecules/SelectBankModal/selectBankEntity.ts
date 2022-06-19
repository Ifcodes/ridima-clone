import { entity } from "simpler-state";

export const selectBankStates = entity({
  showSelectBankModal: false,
  selectedBank: "",
});

export const setShowSelectBankModal = (val: boolean) => {
  selectBankStates.set((prev) => ({ ...prev, showSelectBankModal: val }));
};

export const setSelectBank = (val: string) => {
  selectBankStates.set((prev) => ({ ...prev, selectedBank: val }));
  setShowSelectBankModal(false);
};

export const clearSelectBanksState = () => {
  selectBankStates.set((prev) => ({
    ...prev,
    showSelectBankModal: false,
    selectedBank: "",
  }));
};
