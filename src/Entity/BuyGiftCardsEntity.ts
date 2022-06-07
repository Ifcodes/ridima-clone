import { entity } from "simpler-state";

export const buyGiftCardsState = entity({
  currentStage: 0,
  modalStage: 0,
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
  if (type === "prev") {
    const stage = newState.currentStage - 1;
    buyGiftCardsState.set({ ...newState, currentStage: stage });
  }
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
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const newState = buyGiftCardsState.get();
  buyGiftCardsState.set({ ...newState, cardPurchaseAmount: e.target.value });
};
