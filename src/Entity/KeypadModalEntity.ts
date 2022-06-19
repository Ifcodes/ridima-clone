import { entity } from "simpler-state";

export const keypadModalStates = entity({
  amount: "",
  selectedDigit: [""],
});

export const setAmount = (val: string) => {
  keypadModalStates.set((prev) => ({ ...prev, amount: val }));
};

export const setSelectedDigits = (val: Array<string>) => {
  keypadModalStates.set((prev) => ({ ...prev, selectedDigit: val }));
};

export const clearKeypadStates = () => {
  keypadModalStates.set((prev) => ({
    ...prev,
    amount: "",
    selectedDigit: [""],
  }));
};
