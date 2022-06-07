import { TradeSummaryProps } from "./../components/molecules/TradeSummaryCard/index";
import { entity } from "simpler-state";
import { ChangeEvent, ReactNode } from "react";

interface TradeSummaryItems {
  transactionDate?: Date;
  cardAmount?: string;
  rate?: number;
  expectedValue?: number;
  cardIcon?: ReactNode;
  cardName?: string;
  cardDescription?: string;
  images: Array<string>;
}

export const tradeSummaryItems = entity<TradeSummaryItems>({
  transactionDate: undefined,
  cardAmount: "",
  rate: 0,
  expectedValue: 0,
  cardIcon: undefined,
  cardName: "",
  cardDescription: "",
  images: [],
});

export const setTradeSummaryData = (data: TradeSummaryItems) => {
  tradeSummaryItems.set(data);
};

export const removeImages = (index: number) => {
  const newState = tradeSummaryItems.get();
  const filteredImgs = newState.images.filter(
    (img, imgIndx) => index !== imgIndx
  );
  return tradeSummaryItems.set({ ...newState, images: filteredImgs });
};

export const selectImage = (e: ChangeEvent<HTMLInputElement>) => {
  const fileList = e.target.files;

  if (!fileList) return;

  const newState = tradeSummaryItems.get();
  const newImages = newState.images.concat(URL.createObjectURL(fileList[0]));

  tradeSummaryItems.set({ ...newState, images: newImages });
};
