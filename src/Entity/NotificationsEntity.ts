import { entity } from "simpler-state";

export const notificationStates = entity({
  totalUnread: 6,
});

export const setUnreadNotifications = (val: number) => {
  notificationStates.set((prev) => ({ ...prev, totalUnread: val }));
};
