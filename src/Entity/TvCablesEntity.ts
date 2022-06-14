import { entity } from "simpler-state";

export const tvCableStates = entity({
  selectedTvCablePlan: "",
  selectedServiceProvider: "",
  showServiceProviderModal: false,
  showSelectTvCableModal: false,
  showConfirmTvCablePurchaseModal: false,
  showTvCableSuccessModal: false,
});

export const setSelectedTvCablePlan = (val: string) => {
  tvCableStates.set((prev) => ({ ...prev, selectedTvCablePlan: val }));
};

export const setSelectedServiceProvider = (val: string) => {
  tvCableStates.set((prev) => ({ ...prev, selectedServiceProvider: val }));
};

export const setShowServiceProviderModal = (val: boolean) => {
  tvCableStates.set((prev) => ({
    ...prev,
    showServiceProviderModal: val,
  }));
};

export const setShowTvCablePlanModal = (val: boolean) => {
  tvCableStates.set((prev) => ({
    ...prev,
    showSelectTvCableModal: val,
  }));
};

export const setShowConfirmTvCableModal = (val: boolean) => {
  tvCableStates.set((prev) => ({
    ...prev,
    showConfirmTvCablePurchaseModal: val,
  }));
};

export const setShowTvCableSuccessMsgModal = (val: boolean) => {
  tvCableStates.set((prev) => ({
    ...prev,
    showTvCableSuccessModal: val,
  }));
};

// export const resetAirtimeDataState = () => {
//   tvCableStates.set((prev) => ({
//     ...prev,
//     selectedService: "",
//     selectedNetwork: "",
//     showAirtimeSuccessMsg: false,
//     showServicesModal: false,
//     showSelectNetworkModal: false,
//   }));
// };
