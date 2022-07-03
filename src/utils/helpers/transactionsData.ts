import CardTradeIcon from "../../components/atoms/vectors/CardTradeIcon";
import WalletFundingIcon from "../../components/atoms/vectors/WalletFundingIcon";
import WithdrawalIcon from "../../components/atoms/vectors/WithdrawalIcon";
import { generateId } from "../generateId";

export const today = new Date();
export const yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

export const transactionData = [
  {
    id: generateId(),
    icon: WithdrawalIcon,
    transactionTitle: "Withdrawal",
    type: "debit",
    product: "Guarantee Trust Bank",
    productDescription:
      "Debit | LAWAL OMOTOYOSI ADEKUNLE | NIP:LAWAL OMOTOYOSI ADEKUNLE-2070031551/7463728192 | 00000421072625422050148386214",
    productOrigin: "Bank Withdrawal",
    productOriginDesc: "Guarantee Trust Bank (0077443322)",
    productIconUrl: "/vectors/SamsClubLogo.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    date: today.toDateString(),
    amount: {
      currency: "₦",
      value: 25000,
    },
    status: "Successfull",
  },
  {
    id: generateId(),
    icon: WalletFundingIcon,
    transactionTitle: "Wallet Funding",
    type: "credit",
    product: "Naira Wallet",
    productDescription:
      "Credit from | LAWAL OMOTOYOSI ADEKUNLE | NIP:LAWAL OMOTOYOSI ADEKUNLE-2070031551/7463728192 | 00000421072625422050148386214",
    productOrigin: "Bank Transfer",
    productOriginDesc: "Wema Bank (7463728192)",
    productIconUrl: "/vectors/WemaBankLogo.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    date: today.toDateString(),
    amount: {
      currency: "₦",
      value: 25000,
    },
    status: "Successfull",
  },
  {
    id: generateId(),
    icon: CardTradeIcon,
    transactionTitle: "Giftcard Trade",
    type: undefined,
    product: "Amazon (300-500) ",
    productOrigin: "Sam's Club",
    productOriginDesc: "USA Cash Receipt ($50 - $100)",
    productIconUrl: "/vectors/SamsClubLogo.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    transactionRate: 310,
    expectedValue: 15500,
    date: today.toDateString(),
    amount: {
      currency: "$",
      value: 100,
    },
    status: "Successfull",
  },
  {
    id: generateId(),
    icon: WithdrawalIcon,
    transactionTitle: "Withdrawal",
    type: "debit",
    product: "Wema Bank",
    productDescription:
      "Debit to | LAWAL OMOTOYOSI ADEKUNLE | NIP:LAWAL OMOTOYOSI ADEKUNLE-2070031551/7463728192 | 00000421072625422050148386214",
    productOrigin: "Bank Withdrawal",
    productOriginDesc: "Wema Bank (7463728192)",
    productIconUrl: "/vectors/WemaBankLogo.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    date: yesterday.toDateString(),
    amount: {
      currency: "₦",
      value: 25000,
    },
    status: "Successfull",
  },
  {
    id: generateId(),
    icon: CardTradeIcon,
    transactionTitle: "Giftcard Trade",
    type: undefined,
    product: "Amazon (300-500) ",
    productOrigin: "Sam's Club",
    productOriginDesc: "USA Cash Receipt ($50 - $100)",
    productIconUrl: "/vectors/SamsClubLogo.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    transactionRate: 310,
    expectedValue: 15500,
    date: yesterday.toDateString(),
    amount: {
      currency: "$",
      value: 50,
    },
    status: "Successfull",
  },
  {
    id: generateId(),
    icon: WithdrawalIcon,
    transactionTitle: "Bill Payment",
    type: "debit",
    product: "Airtel Refill",
    productDescription: "Airtel Airtime",
    productOrigin: "Airtel Refill",
    productOriginDesc: "09077738544",
    productIconUrl: "/vectors/AirtelLogoSquared.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    date: today.toDateString(),
    amount: {
      currency: "₦",
      value: 1000,
    },
    status: "Pending",
  },
  {
    id: generateId(),
    icon: WalletFundingIcon,
    transactionTitle: "Wallet Funding",
    type: "credit",
    product: "Naira Wallet",
    productDescription:
      "Credit from | LAWAL OMOTOYOSI ADEKUNLE | NIP:LAWAL OMOTOYOSI ADEKUNLE-2070031551/7463728192 | 00000421072625422050148386214",
    productOrigin: "Bank Transfer",
    productOriginDesc: "Wema Bank (7463728192)",
    productIconUrl: "/vectors/WemaBankLogo.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    date: today.toDateString(),
    amount: {
      currency: "₦",
      value: 25000,
    },
    status: "Successfull",
  },
  {
    id: generateId(),
    icon: CardTradeIcon,
    transactionTitle: "Giftcard Trade",
    type: undefined,
    product: "Amazon (300-500) ",
    productOrigin: "Sam's Club",
    productOriginDesc: "USA Cash Receipt ($50 - $100)",
    productIconUrl: "/vectors/SamsClubLogo.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    transactionRate: 310,
    expectedValue: 15500,
    date: today.toDateString(),
    amount: {
      currency: "$",
      value: 50,
    },
    status: "Successfull",
  },
  {
    id: generateId(),
    icon: WithdrawalIcon,
    transactionTitle: "Bill Payment",
    type: "debit",
    product: "Spectranet",
    productDescription: "Spectranet | LAGOS UNIFIED VALUE 4GB",
    productOrigin: "Internet",
    productOriginDesc: "Spectranet (18126804)",
    productIconUrl: "/vectors/SpectranetLogoSquared.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    date: yesterday.toDateString(),
    amount: {
      currency: "₦",
      value: 20000,
    },
    status: "Pending",
  },
  {
    id: generateId(),
    icon: WithdrawalIcon,
    transactionTitle: "Bill Payment",
    type: "debit",
    product: "Airtel Refill",
    productDescription: "Airtel Airtime",
    productOrigin: "Airtel Refill",
    productOriginDesc: "09077738544",
    productIconUrl: "/vectors/AirtelLogoSquared.svg",
    transactionRefNumber: "RDMA-20210916-8457891146",
    date: yesterday.toDateString(),
    amount: {
      currency: "₦",
      value: 5000,
    },
    status: "Rejected",
    errorMessage: "",
  },
];