import { entity, persistence } from "simpler-state";

export const sideNavState = entity(
  {
    isCollapsed: false,
  },
  [persistence("sideNav", { storage: "local" })]
);

export const setIsCollapsed = (val: boolean) => {
  sideNavState.set((prev) => ({ ...prev, isCollapsed: val }));
};
