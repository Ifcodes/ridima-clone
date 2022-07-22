import { entity } from "simpler-state";

export const activeTradeGiftCardTab = entity(1);

export const tradeGiftCardsStates = entity({
  selectedGiftCardUrl: "",
});

export const setActiveTabChange = (type: string) => {
  const newState = activeTradeGiftCardTab.get();
  if (type === "next") {
    activeTradeGiftCardTab.set(newState + 1);
  } else if (type === "prev") {
    activeTradeGiftCardTab.set(newState - 1);
  } else {
    activeTradeGiftCardTab.set(1);
  }
};

export const setSelectedGiftCardUrl = (url: string) => {
  tradeGiftCardsStates.set((prev) => ({ ...prev, selectedGiftCardUrl: url }));
};
