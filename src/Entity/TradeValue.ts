import { entity } from "simpler-state";

export const tradeValue = entity({
  rate: 410,
  amount: 0,
  quantity: 0,
  expectedValue: 0,
});

export const setExpectedValue = (
  amount: number,
  quantity: number,
  rate: number
) => {
  const newState = tradeValue.get();
  const newExpectedValue = amount * rate * quantity;
  const newValue = { ...newState, expectedValue: newExpectedValue };
  return tradeValue.set(newValue);
};
