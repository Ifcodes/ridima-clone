import { entity } from "simpler-state";

export const withdrawToBankStates = entity({
  withdrawalAmount: "",
  showKeypadModal: false,
  showSuccessMsgModal: false,
});

export const setWithdrawKeypadModal = (val: boolean) => {
  withdrawToBankStates.set((prev) => ({ ...prev, showKeypadModal: val }));
};

export const setWithdrawSuccessMsgModal = (val: boolean) => {
  withdrawToBankStates.set((prev) => ({ ...prev, showSuccessMsgModal: val }));
};

export const setWithdrawalAmount = (val: string) => {
  withdrawToBankStates.set((prev) => ({ ...prev, withdrawalAmount: val }));
};

export const clearWithdrawalStates = () => {
  withdrawToBankStates.set((prev) => ({
    ...prev,
    withdrawalAmount: "",
    showKeypadModal: false,
    showSuccessMsgModal: false,
  }));
};
