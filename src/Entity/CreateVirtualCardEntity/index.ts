import { entity } from "simpler-state";

export const createVirtualCardState = entity({
  showConfirmFundModal: false,
  showPinVerificationModal: false,
  showSuccessMessageModal: false,
});

export const setCreateVCardConfirmFundModal = (val: boolean) => {
  createVirtualCardState.set((prev) => ({
    ...prev,
    showConfirmFundModal: val,
  }));
};

export const setCreateVCardPinVerifyModal = (val: boolean) => {
  createVirtualCardState.set((prev) => ({
    ...prev,
    showPinVerificationModal: val,
  }));
};

export const setCreateVCardSuccessMsgModal = (val: boolean) => {
  createVirtualCardState.set((prev) => ({
    ...prev,
    showSuccessMessageModal: val,
  }));
};
