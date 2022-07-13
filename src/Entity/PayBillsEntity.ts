import { entity } from "simpler-state";

export const payBillsState = entity({
  tabs: ["Pay Bills"],
  activeTab: 0,
  selectedBillToPay: "",
});

export const setPayBillActiveTabChange = (type: string) => {
  const newSate = payBillsState.get();
  if (type === "next" && newSate.activeTab < 3) {
    payBillsState.set((prev) => ({
      ...prev,
      activeTab: prev.activeTab + 1,
    }));
  } else if (type === "prev" && newSate.activeTab > 0) {
    payBillsState.set((prev) => ({
      ...prev,
      activeTab: prev.activeTab - 1,
    }));
  } else if (type === "reset") {
    payBillsState.set((prev) => ({ ...prev, activeTab: 0 }));
  }
  return;
};

export const setPayBillsTabs = (cardType: string) => {
  payBillsState.set((prev) => ({
    ...prev,
    tabs: prev.tabs.concat(cardType),
  }));
  setPayBillActiveTabChange("next");
};

export const removePayBillsTabs = (index: number) => {
  payBillsState.set((prev) => ({
    ...prev,
    tabs: prev.tabs.slice(0, index + 1),
  }));
  setPayBillActiveTabChange("prev");
};

export const setSelectedPayBillToPay = (billTopay: string) => {
  payBillsState.set((prev) => ({ ...prev, selectedBillToPay: billTopay }));
};
