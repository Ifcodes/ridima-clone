import { entity } from "simpler-state";

export const datePickerStates = entity({
  selectedDate: "",
  showDatePicker: false,
});

export const setShowDatePicker = (val: boolean) => {
  datePickerStates.set((prev) => ({ ...prev, showDatePicker: val }));
};
