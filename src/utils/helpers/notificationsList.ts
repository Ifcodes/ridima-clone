const today = new Date();
const yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

export const notifications = [
  {
    title: "Rates are up !!!",
    description: "You need to see the current Google Play Rate",
    pageUrl: "/trade-giftcards/check-rates",
    type: "news",
    read: false,
    date: today,
  },
  {
    title: "Withdrawal",
    description: "Guranty Trust Bank. Terry Septimus (0345689013)",
    pageUrl: "/activities",
    type: "transaction",
    transactionStatus: "Failed",
    read: false,
    date: today,
  },
  {
    title: "Fund Wallet",
    description: "Guranty Trust Bank. Terry Septimus (0345689013)",
    pageUrl: "/activities",
    type: "transaction",
    transactionStatus: "Successful",
    read: false,
    date: today,
  },
  {
    title: "Fund Wallet",
    description: "Wema Ban. Omotoyosil Lawal (2223455435)",
    pageUrl: "/activities",
    type: "transaction",
    transactionStatus: "Successful",
    read: true,
    date: yesterday,
  },
  {
    title: "Rates are up !!!",
    description: "You need to see the current Google Play Rate",
    pageUrl: "/trade-giftcards/check-rates",
    type: "news",
    read: false,
    date: yesterday,
  },
  {
    title: "Rates are up !!!",
    description: "You need to see the current Google Play Rate",
    pageUrl: "/trade-giftcards/check-rates",
    type: "news",
    read: true,
    date: yesterday,
  },
];
