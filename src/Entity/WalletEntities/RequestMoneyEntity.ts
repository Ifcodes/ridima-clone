import { clearKeypadStates } from "./../KeypadModalEntity";
import { entity } from "simpler-state";

export const requestMoneyStates = entity({
  showConfirmModal: false,
  showKeypadModal: false,
  showRequestMoneySuccessMsg: false,
});

export const setRequestMoneyKeypadModal = (val: boolean) => {
  requestMoneyStates.set((prev) => ({ ...prev, showKeypadModal: val }));
};

export const setRequestMoneySuccessModal = (val: boolean) => {
  requestMoneyStates.set((prev) => ({
    ...prev,
    showRequestMoneySuccessMsg: val,
  }));
};

export const setConfirmRequestMoneyModal = (val: boolean) => {
  requestMoneyStates.set((prev) => ({ ...prev, showConfirmModal: val }));
};

export const clearRequestMoneyStates = () => {
  requestMoneyStates.set((prev) => ({
    ...prev,
    showConfirmModal: false,
    showKeypadModal: false,
    showRequestMoneySuccessMsg: false,
  }));
  clearKeypadStates();
};
