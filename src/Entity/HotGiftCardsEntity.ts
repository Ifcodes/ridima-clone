import { entity, resetAll } from "simpler-state";

export const hotGiftCardsStates = entity({
  currentTab: 1,
  currentActiveCardStage: 0,
  tabs: ["Trade Gift Cards", "Hot Gift Cards"],
  selectedSubCategory: "",
  tradeSuccessful: false,
  openTermsModal: false,
  openSuccessMessage: false,
  openFailureMessage: false,
});

export const setHotGiftCardTab = (type: string) => {
  const newSate = hotGiftCardsStates.get();
  if (type === "next" && newSate.currentTab < 3) {
    hotGiftCardsStates.set((prev) => ({
      ...prev,
      currentTab: prev.currentTab + 1,
    }));
  } else if (type === "prev" && newSate.currentTab > 1) {
    hotGiftCardsStates.set((prev) => ({
      ...prev,
      currentTab: prev.currentTab - 1,
    }));
  } else if (type === "reset") {
    hotGiftCardsStates.set((prev) => ({ ...prev, currentTab: 1 }));
  }
  return;
};

export const setHotGiftCardsTabs = (
  actionType: string,
  cardType?: string,
  index?: number
) => {
  if (actionType === "add" && cardType) {
    hotGiftCardsStates.set((prev) => ({
      ...prev,
      tabs: prev.tabs.concat(cardType),
    }));
    setHotGiftCardTab("next");
  } else if (actionType === "remove" && index) {
    hotGiftCardsStates.set((prev) => ({
      ...prev,
      tabs: prev.tabs.slice(0, index + 1),
    }));
    setHotGiftCardTab("prev");
  }
};

export const setSelectedSubCategory = (val: string) => {
  hotGiftCardsStates.set((prev) => ({ ...prev, selectedSubCategory: val }));
};

export const setOpenTermsModal = (val: boolean) => {
  hotGiftCardsStates.set((prev) => ({ ...prev, openTermsModal: val }));
};

export const setActiveCardStage = (type: string) => {
  const newSate = hotGiftCardsStates.get();
  if (type === "next" && newSate.currentActiveCardStage < 3) {
    hotGiftCardsStates.set((prev) => ({
      ...prev,
      currentActiveCardStage: prev.currentActiveCardStage + 1,
    }));
  } else if (type === "prev" && newSate.currentActiveCardStage > 1) {
    hotGiftCardsStates.set((prev) => ({
      ...prev,
      currentActiveCardStage: prev.currentActiveCardStage - 1,
    }));
  } else if (type === "reset") {
    hotGiftCardsStates.set((prev) => ({
      ...prev,
      currentActiveCardStage: prev.currentActiveCardStage + 1,
    }));
  }
  return;
};

export const resetActiveCardStage = (index: number) => {
  hotGiftCardsStates.set((prev) => ({
    ...prev,
    currentActiveCardStage: index,
  }));
};

export const setOpenTradeSuccessMessage = (val: boolean) => {
  hotGiftCardsStates.set((prev) => ({ ...prev, openSuccessMessage: val }));
};

export const setOpenTradeFailureMessage = (val: boolean) => {
  hotGiftCardsStates.set((prev) => ({ ...prev, openFailureMessage: val }));
};

export const setIsTradeSuccessfull = (val: boolean) => {
  hotGiftCardsStates.set((prev) => ({ ...prev, tradeSuccessful: val }));
};

export const resetAllHotGiftCardState = () => {
  hotGiftCardsStates.set((prev) => ({
    ...prev,
    currentTab: 1,
    currentActiveCardStage: 0,
    tabs: ["Trade Gift Cards", "Hot Gift Cards"],
    selectedSubCategory: "",
    tradeSuccessful: false,
    openTermsModal: false,
    openSuccessMessage: false,
    openFailureMessage: false,
  }));
};
