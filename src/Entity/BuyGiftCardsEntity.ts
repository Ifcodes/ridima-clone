import { entity } from "simpler-state";

export const buyGiftCardsState = entity({
  currentStage: 0,
  modalStage: 0,
  selectedCard: {},
  showTermsModal: false,
  showConfirmationModal: false,
  confirmed: false,
  cardPurchaseAmount: "",
  expectedValue: 0,
});

export const setBuyGiftcardStage = (type: string) => {
  const newState = buyGiftCardsState.get();

  if (type === "next") {
    const stage = newState.currentStage + 1;
    buyGiftCardsState.set({ ...newState, currentStage: stage });
  }
  if (type === "prev" && newState.currentStage > 0) {
    const stage = newState.currentStage - 1;
    buyGiftCardsState.set({ ...newState, currentStage: stage });
  }
};

export const setFixedCurrentStage = (val: number) => {
  buyGiftCardsState.set((prev) => ({ ...prev, currentStage: val }));
};

export const setShowBuyCardTermsModal = (val: boolean) => {
  const newState = buyGiftCardsState.get();
  buyGiftCardsState.set({ ...newState, showTermsModal: val });
};

export const setShowConfirmationModal = (val: boolean) => {
  const newState = buyGiftCardsState.get();
  buyGiftCardsState.set({ ...newState, showConfirmationModal: val });
};

export const setIsConfirmed = (val: boolean) => {
  const newState = buyGiftCardsState.get();
  buyGiftCardsState.set({ ...newState, confirmed: val });
};

export const setBuyGiftcardConfirmModalStage = (type: string) => {
  const newState = buyGiftCardsState.get();

  if (type === "next" && newState.modalStage < 1) {
    const stage = newState.modalStage + 1;
    buyGiftCardsState.set({ ...newState, modalStage: stage });
  }
  if (type === "prev" && newState.modalStage === 1) {
    const stage = newState.modalStage - 1;
    buyGiftCardsState.set({ ...newState, modalStage: stage });
  }
};

export const setExpectedValue = (val: number) => {
  const newState = buyGiftCardsState.get();
  buyGiftCardsState.set({ ...newState, expectedValue: val });
};

export const setCardPurchaseAmount = (
  e: React.ChangeEvent<HTMLInputElement> | null
) => {
  const newState = buyGiftCardsState.get();
  if (e)
    buyGiftCardsState.set({ ...newState, cardPurchaseAmount: e.target.value });
};

export const resetBuyGiftCardsState = () => {
  buyGiftCardsState.set((prev) => ({
    ...prev,
    currentStage: 0,
    showTermsModal: false,
    modalStage: 0,
    showConfirmationModal: false,
    confirmed: false,
    cardPurchaseAmount: "",
    expectedValue: 0,
  }));
};
