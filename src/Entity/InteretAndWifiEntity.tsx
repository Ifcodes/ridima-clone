import { entity } from "simpler-state";

export const internetWifiStates = entity({
  selectedInternetPlan: "",
  selectedNetworkProvider: "",
  showNetworkProviderModal: false,
  showSelectIntertPlanModal: false,
  showConfirmWifiPurchaseModal: false,
  showInternetWifiSuccessModal: false,
});

export const setSelectedInternetPlan = (val: string) => {
  internetWifiStates.set((prev) => ({ ...prev, selectedInternetPlan: val }));
};

export const setSelectedNetworkProvider = (val: string) => {
  internetWifiStates.set((prev) => ({ ...prev, selectedNetworkProvider: val }));
};

export const setShowNetworkProviderModal = (val: boolean) => {
  internetWifiStates.set((prev) => ({
    ...prev,
    showNetworkProviderModal: val,
  }));
};

export const setShowInternetPlanModal = (val: boolean) => {
  internetWifiStates.set((prev) => ({
    ...prev,
    showSelectIntertPlanModal: val,
  }));
};

export const setShowConfirmWifiPurchaseModal = (val: boolean) => {
  internetWifiStates.set((prev) => ({
    ...prev,
    showConfirmWifiPurchaseModal: val,
  }));
};

export const setShowWifiSuccessMsgModal = (val: boolean) => {
  internetWifiStates.set((prev) => ({
    ...prev,
    showInternetWifiSuccessModal: val,
  }));
};

// export const resetAirtimeDataState = () => {
//   internetWifiStates.set((prev) => ({
//     ...prev,
//     selectedService: "",
//     selectedNetwork: "",
//     showAirtimeSuccessMsg: false,
//     showServicesModal: false,
//     showSelectNetworkModal: false,
//   }));
// };
