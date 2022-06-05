import { MouseEventHandler, ReactNode, SVGProps } from "react";

export type SvgIconProps = {
  active?: boolean;
  color?: string;
  bgColor?: string;
  width?: string;
} & SVGProps<SVGSVGElement>;

export type CardProps = {
  icon?: ReactNode | Element;
  title?: string;
  titleDescription?: string;
  value?: string;
  btnText?: string;
  currency?: string;
  btnColor?: string;
  imgUrl?: string;
  bgColor?: string;
  cardTextWidth?: string;
  imgBottomPosition?: string;
  imgLeftPosition?: string;
  isActive?: boolean;
  onCardClick?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export interface virtualCardProps {
  cardDesign: {
    type: "";
    name: "";
    fund: "";
    owner: "";
    number: "";
    cardExpiry: "";
    currency: {
      symbol: "";
      initial: "";
    };
    isActive: false;
  };
  transaction: [
    {
      transactionType: "";
      transactionDate: "";
      transactionTitle: "";
      transactionTime: "";
      transactionAmount: "";
    }
  ];
}

export type cardDataProps = {
  id: string;
  cardDesign: string;
  cardName: string;
  currency: {
    symbol: string;
    initial: string;
  };
  cardFund: string;
  cardOwnerName: string;
  cardNumber: string;
  cardExpiry: string;
  cvv: number;
  billingAddress: string;
  zipCode: string;
  transactions: Array<{
    transactionType: string;
    transactionDate: string;
    transactionTitle: string;
    transactionTime: string;
    transactionAmount: {
      currency: string;
      amount: number;
    };
  }>;
};
