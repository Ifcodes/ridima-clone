import { entity } from "simpler-state";

export const createdCard = entity(false)

export const setCreatedVirtualCard = (val: boolean) => {
  createdCard.set(val)
}