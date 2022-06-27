import { entity } from "simpler-state";

export const changePasswordState = entity({
  showChangePasswordModal: false,
  showChangePasswordSuccessMsg: false,
});

export const setChangePasswordModal = (val: boolean) => {
  changePasswordState.set((prev) => ({
    ...prev,
    showChangePasswordModal: val,
  }));
};

export const setChangePasswordSuccess = (val: boolean) => {
  changePasswordState.set((prev) => ({
    ...prev,
    showChangePasswordSuccessMsg: val,
  }));
};

export const resetAllChangePasswordState = () => {
  changePasswordState.set((prev) => ({
    ...prev,
    showChangePasswordModal: false,
    showChangePasswordSuccessMsg: false,
  }));
};
