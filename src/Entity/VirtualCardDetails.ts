import { entity } from "simpler-state";
import { virtualCardProps } from "../types";

const selectedVirtualCard = entity({
  cardDesign: {
    type: '',
    name: '',
    fund: '',
    owner: '',
    number: '',
    cardExpiry: '',
    currency:{
      symbol: '',
      initial: '',
    },
    isActive: false
  },
  transaction: [
    {
      transactionType: '',
      transactionDate: '',
      transactionTitle: '',
      transactionTime: '',
      transactionAmount: '',
    }
  ]
})

export const setSelectedCard = (card: virtualCardProps) => {
  selectedVirtualCard.set(card)
}