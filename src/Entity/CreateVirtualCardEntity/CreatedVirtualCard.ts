import { entity, persistence } from "simpler-state";

const defaultState = false;

const storedValue = window.localStorage.getItem("Card_Created");

const initialValue = storedValue ? JSON.parse(storedValue) : defaultState;

export const createdCard = entity(initialValue, [persistence("Card_Created")]);

export const setCreatedVirtualCard = (val: boolean) => {
  createdCard.set(val);
};

export const clearCreateCard = () => {
  createdCard.set(defaultState);
};
