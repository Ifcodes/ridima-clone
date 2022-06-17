import { entity } from "simpler-state";

export const fundWalletStates = entity({
  showFundWalletModal: false,
  showPayMethodModal: false,
  showUseUssdCodeModal: false,
});

export const setShowFundWalletModal = (val: boolean) => {
  fundWalletStates.set((prev) => ({ ...prev, showFundWalletModal: val }));
};

export const setShowPayMethodModal = (val: boolean) => {
  fundWalletStates.set((prev) => ({ ...prev, showPayMethodModal: val }));
};

export const setShowUseUssdCodeModal = (val: boolean) => {
  fundWalletStates.set((prev) => ({ ...prev, showUseUssdCodeModal: val }));
};
