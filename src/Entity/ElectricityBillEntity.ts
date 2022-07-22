import { entity } from "simpler-state";

export const electricityBillStates = entity({
  selectedProvider: "",
  showSelectProviderModal: false,
  showConfirmPaymentModal: false,
  showElectrictyBillSuccessModal: false,
});

export const setShowSelectProvider = (val: boolean) => {
  electricityBillStates.set((prev) => ({
    ...prev,
    showSelectProviderModal: val,
  }));
};

export const setSelectedProvider = (val: string) => {
  electricityBillStates.set((prev) => ({
    ...prev,
    selectedProvider: val,
  }));
};

export const setShowConfirmElectricityPayModal = (val: boolean) => {
  electricityBillStates.set((prev) => ({
    ...prev,
    showConfirmPaymentModal: val,
  }));
};

export const setShowElectPaySuccessModal = (val: boolean) => {
  electricityBillStates.set((prev) => ({
    ...prev,
    showElectrictyBillSuccessModal: val,
  }));
};

export const resetElectricityState = () => {
  electricityBillStates.set((prev) => ({
    ...prev,
    selectedProvider: "",
    showSelectProviderModal: false,
    showConfirmPaymentModal: false,
    showElectrictyBillSuccessModal: false,
  }));
};
