import { entity } from "simpler-state";

export const sellGiftCardsStates = entity({
  selectedSubCatecory: "",
});

export const setSellGiftCardSelectedCategory = (category: string) => {
  sellGiftCardsStates.set((prev) => ({
    ...prev,
    selectedSubCatecory: category,
  }));
};

export const clearSellGiftCardStates = () => {
  sellGiftCardsStates.set({
    selectedSubCatecory: "",
  });
};
