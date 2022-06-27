import { entity } from "simpler-state";

export const changeEmailState = entity({
  showChangeEmailModal: false,
  showChangeEmailSuccessMsg: false,
});

export const setChangeEmailModal = (val: boolean) => {
  changeEmailState.set((prev) => ({
    ...prev,
    showChangeEmailModal: val,
  }));
};

export const setChangeEmailSuccess = (val: boolean) => {
  changeEmailState.set((prev) => ({
    ...prev,
    showChangeEmailSuccessMsg: val,
  }));
};

export const resetAllchangeEmailState = () => {
  changeEmailState.set((prev) => ({
    ...prev,
    showChangeEmailModal: false,
    showChangeEmailSuccessMsg: false,
  }));
};
