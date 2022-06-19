import { entity } from "simpler-state";

export const addAccountStates = entity({
  showAddAccountModal: false,
  accountVerified: false,
  formField: {
    accountNumber: "",
    bankName: "",
    accountName: "",
  },
});

export const setAddAccountModal = (val: boolean) => {
  addAccountStates.set((prev) => ({ ...prev, showAddAccountModal: val }));
};

export const setAddAccountNumber = (data: string) => {
  addAccountStates.set((prev) => ({
    ...prev,
    formField: { ...prev.formField, accountNumber: data },
  }));
};
export const setAddAccountName = (data: string) => {
  addAccountStates.set((prev) => ({
    ...prev,
    formField: { ...prev.formField, accountName: data },
  }));
};

export const setSelectedBankName = (bank: string) => {
  addAccountStates.set((prev) => ({
    ...prev,
    formField: { ...prev.formField, bankName: bank },
  }));
};

export const setWithdrawAccountVerified = (val: boolean) => {
  addAccountStates.set((prev) => ({ ...prev, accountVerified: val }));
};

export const clearAddBankAccountStates = () => {
  addAccountStates.set((prev) => ({
    ...prev,
    showAddAccountModal: false,
    accountVerified: false,
    formField: {
      accountNumber: "",
      bankName: "",
      accountName: "",
    },
  }));
};
