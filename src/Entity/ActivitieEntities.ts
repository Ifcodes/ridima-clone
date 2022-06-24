import { entity } from "simpler-state";
import { generateId } from "../utils/generateId";

export const activitiesStates = entity({
  selectedFilterOption: "",
  selectedFilterStatus: "",
  showFilterModal: false,
  showTransactionModal: false,
  showGiftCardTransactionDetail: false,
  showDateModal: false,
  selectedTransaction: {
    id: generateId(),
    icon: "",
    transactionTitle: " ",
    type: undefined,
    product: "",
    productDescription: "",
    productOrigin: "",
    productOriginDesc: "",
    productIconUrl: "",
    transactionRefNumber: "",
    transactionRate: "",
    expectedValue: 0,
    date: "",
    amount: {
      currency: "",
      value: 0,
    },
    status: "",
    errorMessage: "",
  },
});

export const setShowFilterModal = (val: boolean) => {
  activitiesStates.set((prev) => ({ ...prev, showFilterModal: val }));
};

export const setShowDateModal = (val: boolean) => {
  activitiesStates.set((prev) => ({ ...prev, showDateModal: val }));
};

export const setShowTransactionModal = (val: boolean) => {
  activitiesStates.set((prev) => ({ ...prev, showTransactionModal: val }));
};

export const setGiftCardTransactionModal = (val: boolean) => {
  activitiesStates.set((prev) => ({
    ...prev,
    showGiftCardTransactionDetail: val,
  }));
};

export const setSelectedFilterOption = (val: string) => {
  activitiesStates.set((prev) => ({ ...prev, selectedFilterOption: val }));
};

export const setSelectedFilterStatus = (val: string) => {
  activitiesStates.set((prev) => ({ ...prev, selectedFilterStatus: val }));
};

export const setSelectedTransaction = (val: any) => {
  activitiesStates.set((prev) => ({ ...prev, selectedTransaction: val }));
};
