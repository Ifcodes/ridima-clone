import { persistence } from "simpler-state";
import { entity } from "simpler-state";

const defaultState = false;

const storedValue = window.localStorage.getItem("Profile_Completed");

const initialValue = storedValue ? JSON.parse(storedValue) : defaultState;

export const profileComplete = entity(initialValue, [
  persistence("Profile_Completed"),
]);

export const setProfileComplete = (val: boolean) => {
  profileComplete.set(val);
};

export const clearProfileComplete = () => {
  profileComplete.set(defaultState);
};
