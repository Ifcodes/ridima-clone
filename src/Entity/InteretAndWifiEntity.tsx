import { entity } from "simpler-state";

export const internetWifiStates = entity({
  selectedInternetPlan: "",
  selectedInternetPlanAmount: 0,
  selectedNetworkProvider: "",
  showNetworkProviderModal: false,
  showSelectIntertPlanModal: false,
  showConfirmWifiPurchaseModal: false,
  showInternetWifiSuccessModal: false,
});

export const setSelectedInternetPlan = (val: string) => {
  internetWifiStates.set((prev) => ({ ...prev, selectedInternetPlan: val }));
};

export const setSelectedInternetPlanAmount = (val: number) => {
  internetWifiStates.set((prev) => ({
    ...prev,
    selectedInternetPlanAmount: val,
  }));
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

export const resetInternetWifiState = () => {
  internetWifiStates.set((prev) => ({
    ...prev,
    selectedInternetPlan: "",
    selectedNetworkProvider: "",
    selectedInternetPlanAmount: 0,
    showNetworkProviderModal: false,
    showSelectIntertPlanModal: false,
    showConfirmWifiPurchaseModal: false,
    showInternetWifiSuccessModal: false,
  }));
};
