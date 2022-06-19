import { clearKeypadStates } from "./../KeypadModalEntity";
import { entity } from "simpler-state";

export const sendMoneyStates = entity({
  showConfirmModal: false,
  showKeypadModal: false,
  showSendMoneySuccessMsg: false,
});

export const setSendMoneyKeypadModal = (val: boolean) => {
  sendMoneyStates.set((prev) => ({ ...prev, showKeypadModal: val }));
};

export const setSendMoneySuccessModal = (val: boolean) => {
  sendMoneyStates.set((prev) => ({ ...prev, showSendMoneySuccessMsg: val }));
};

export const setConfirmSendMoneyModal = (val: boolean) => {
  sendMoneyStates.set((prev) => ({ ...prev, showConfirmModal: val }));
};

export const clearSendMoneyStates = () => {
  sendMoneyStates.set((prev) => ({
    ...prev,
    showConfirmModal: false,
    showKeypadModal: false,
    showSendMoneySuccessMsg: false,
  }));
  clearKeypadStates();
};
