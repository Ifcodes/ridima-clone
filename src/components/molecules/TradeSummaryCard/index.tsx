import React, { ChangeEventHandler, ReactNode } from "react";
import { removeImages, selectImage } from "../../../Entity/TradeSummaryData";
import FileUploadInput from "../../atoms/Forms/FileUploadInput";
import SelectImgCard from "../../atoms/SelectedImgCard";
import { TradeSummaryWrapper } from "./styledTradeSummary";

export interface TradeSummaryProps {
  transactionDate?: Date;
  cardAmount?: string;
  rate?: number;
  expectedValue?: number;
  cardIcon?: ReactNode;
  cardName?: string;
  cardDescription?: string;
  images?: Array<string>;
  handleImgUpload?: ChangeEventHandler<HTMLInputElement>;
}
const TradeSummaryCard = ({
  transactionDate,
  cardAmount,
  rate,
  expectedValue,
  cardIcon,
  cardName,
  cardDescription,
  images,
  handleImgUpload,
}: TradeSummaryProps) => {
  const summaryKeys = [
    {
      title: "Transaction Date:",
      value: transactionDate?.toDateString(),
    },
    {
      title: "Card Amount:",
      value: cardAmount,
    },
    {
      title: "Rate:",
      value: rate,
    },
    {
      title: "You would get:",
      value: expectedValue,
    },
  ];

  return (
    <TradeSummaryWrapper>
      <div className="card-heading">
        <div>{cardIcon}</div>
        <div className="card-title-cont">
          <h2>{cardName}</h2>
          <span>{cardDescription}</span>
        </div>
      </div>
      <div className="details-cont">
        {summaryKeys.map((key) => (
          <div key={key.title} className="detail">
            <span>{key.title}</span>
            <span>{key.value}</span>
          </div>
        ))}
      </div>
      <div className="selected-imgs-cont">
        {images?.map((img, index) => (
          <SelectImgCard
            width="6rem"
            height="6rem"
            borderRadius="10px"
            imgUrl={img}
            removeImg={() => removeImages(index)}
          />
        ))}
        <div className="add-file-cont">
          <FileUploadInput
            width="5rem"
            height="5rem"
            borderRadius="10px"
            onChange={selectImage}
          />
        </div>
      </div>
    </TradeSummaryWrapper>
  );
};

export default TradeSummaryCard;
