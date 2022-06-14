import { entity } from "simpler-state";

export const bettingWalletStates = entity({
  selectedPlatform: "",
  showSelectPlatFormModal: false,
  showConfirmBettingPayment: false,
  showBettingPaySuccessModal: false,
});

export const setShowSelectPlaform = (val: boolean) => {
  bettingWalletStates.set((prev) => ({
    ...prev,
    showSelectPlatFormModal: val,
  }));
};

export const setSelectedPlatform = (val: string) => {
  bettingWalletStates.set((prev) => ({
    ...prev,
    selectedPlatform: val,
  }));
};

export const setShowConfirmBettingPayment = (val: boolean) => {
  bettingWalletStates.set((prev) => ({
    ...prev,
    showConfirmBettingPayment: val,
  }));
};

export const setShowBettingPaySuccessModal = (val: boolean) => {
  bettingWalletStates.set((prev) => ({
    ...prev,
    showBettingPaySuccessModal: val,
  }));
};
