import { entity } from "simpler-state";

export const changePinStates = entity({
  currentPin: "",
  newPin: "",
  confirmedNewPIn: "",
  newPinMatch: true,
  showChangePinModal: false,
  showChangePinSuccessMsg: false,
});

export const setChangePinModal = (val: boolean) => {
  changePinStates.set((prev) => ({ ...prev, showChangePinModal: val }));
};

export const setChangePinSuccessMsg = (val: boolean) => {
  changePinStates.set((prev) => ({ ...prev, showChangePinSuccessMsg: val }));
};

export const setCurrentPin = (val: string) => {
  changePinStates.set((prev) => ({ ...prev, currentPin: val }));
};

export const setNewPin = (val: string) => {
  changePinStates.set((prev) => ({ ...prev, newPin: val }));
};

export const setConfirmNewPin = (val: string) => {
  changePinStates.set((prev) => ({ ...prev, confirmedNewPIn: val }));
};

export const setNewPinMatch = (val: boolean) => {
  changePinStates.set((prev) => ({ ...prev, newPinMatch: val }));
};

export const resetAllChangePinState = () => {
  changePinStates.set((prev) => ({
    ...prev,
    currentPin: "",
    newPin: "",
    confirmedNewPIn: "",
    newPinMatch: true,
    pinInputed: false,
    showChangePinModal: false,
    showChangePinSuccessMsg: false,
  }));
};
