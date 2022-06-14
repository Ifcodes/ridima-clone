import { entity } from "simpler-state";

export const airtimeDataStates = entity({
  selectedService: "",
  selectedNetwork: "",
  selectedDataPlan: "",
  showAirtimeSuccessMsg: false,
  showDataRefillSuccessMsg: false,
  showServicesModal: false,
  showSelectNetworkModal: false,
  showSelectDataPlanModal: false,
});

export const setShowServiceModal = (val: boolean) => {
  airtimeDataStates.set((prev) => ({ ...prev, showServicesModal: val }));
};

export const setShowAirtimeSuccessMsg = (val: boolean) => {
  airtimeDataStates.set((prev) => ({ ...prev, showAirtimeSuccessMsg: val }));
};

export const setShowDataRefillSuccessMsg = (val: boolean) => {
  airtimeDataStates.set((prev) => ({ ...prev, showDataRefillSuccessMsg: val }));
};

export const setSelectedService = (val: string) => {
  airtimeDataStates.set((prev) => ({ ...prev, selectedService: val }));
};

export const setSelectedDataPlan = (val: string) => {
  airtimeDataStates.set((prev) => ({ ...prev, selectedDataPlan: val }));
};

export const setShowNetworksModal = (val: boolean) => {
  airtimeDataStates.set((prev) => ({ ...prev, showSelectNetworkModal: val }));
};

export const setShowSelectDataPlan = (val: boolean) => {
  airtimeDataStates.set((prev) => ({ ...prev, showSelectDataPlanModal: val }));
};

export const setSelectedNetwork = (val: string) => {
  airtimeDataStates.set((prev) => ({ ...prev, selectedNetwork: val }));
};

export const resetAirtimeDataState = () => {
  airtimeDataStates.set((prev) => ({
    ...prev,
    selectedService: "",
    selectedNetwork: "",
    showAirtimeSuccessMsg: false,
    showServicesModal: false,
    showSelectNetworkModal: false,
  }));
};
