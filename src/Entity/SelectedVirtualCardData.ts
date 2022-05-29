import { entity } from "simpler-state";
import { cardDataProps } from "../types";

export const selectedVirtualCardData = entity<cardDataProps>({
  id: "",
  cardDesign: "",
  cardName: "",
  currency: {
      symbol: "",
      initial: "",
  },
  cardFund: "",
  cardOwnerName: "",
  cardNumber: "",
  cardExpiry: "",
  cvv: 0,
  billingAddress: "",
  zipCode: "",
  transactions: [
    {
      transactionType: "",
      transactionDate: "",
      transactionTitle: "",
      transactionTime: "",
      transactionAmount: {
        currency: "",
        amount: 0,
      },
    }
  ]
})

export const setSelectedVirtualCardData = (cardDetails: cardDataProps) => {
  selectedVirtualCardData.set(cardDetails)
}