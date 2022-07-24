import { entity } from "simpler-state";

export const changePasswordState = entity({
  stage: 0,
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

export const setChangePasswordStage = (val: number) => {
  changePasswordState.set((prev) => ({ ...prev, stage: val }));
};

export const resetAllChangePasswordState = () => {
  changePasswordState.set((prev) => ({
    ...prev,
    stage: 0,
    showChangePasswordModal: false,
    showChangePasswordSuccessMsg: false,
  }));
};
