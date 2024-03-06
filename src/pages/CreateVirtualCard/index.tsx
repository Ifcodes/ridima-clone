import React, { FormEvent, MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { generateId } from "../../utils/generateId";
import Button from "../../components/atoms/Buttons";
import Input from "../../components/atoms/Forms/Input";
import { Paragraph } from "../../components/atoms/Typography";
import Modal from "../../components/molecules/Modal";
import ChooseCardDesign from "./ChooseCardDesign";
import {
  CreateVirtualCardWrapper,
  MainWrapper,
  StageTitleWrapper,
} from "./createVirtualCardStyles";
import FundYourCard from "./fundYourCard";
import MobileHeader from "../../components/atoms/MobileHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

type VirtualCardProps = {
  toggleActiveScreen?: MouseEventHandler<HTMLSpanElement>;
};

const CreateVirtualCard = ({ toggleActiveScreen }: VirtualCardProps) => {
  useDocumentTitle("Create Virtual Card");
  const [cardDetails, setCardDetails] = useState({
    cardName: "",
    billingAddress: "",
  });
  const [stage, setStage] = useState(0);
  const [showChooseCardModal, setShowChooseCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState("blue");
  const [stageTitles, setStageTitles] = useState([
    "Create a Virtual US Dollar Card",
  ]);
  const [mobileActiveTitle, setMobileActiveTitle] = useState("");

  const formIsFilled = Object.values(cardDetails).every((val) => val !== "");

  const handleStageTagClick = (stageIndex: number, type?: string) => {
    if (type === "mobile") {
      setStage(stage - 1);
    } else {
      stageTitles.map((stg, index) => {
        if (index === stageIndex) {
          if (stageIndex >= 0 && stage > 0) {
            setStage(stage - 1);
            setStageTitles(stageTitles.slice(0, stageIndex + 1));
          } else {
            return;
          }
        }

        return stg;
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowChooseCardModal(true);
  };

  const handleCardSelect = (type: string, cardType: string) => {
    if (type === "button") {
      setStage(stage + 1);
      setStageTitles(stageTitles.concat("Fund your card"));
      setShowChooseCardModal(false);
    }
    if (type === "card") {
      setSelectedCard(cardType);
      setStage(stage + 1);
      setStageTitles(stageTitles.concat("Fund your card"));
      setShowChooseCardModal(false);
    }
  };

  return (
    <MainWrapper>
      <div className="header">
        <MobileHeader
          title={stageTitles[stage]}
          fs="1rem"
          fw="400"
          handleArrowBackAction={() => handleStageTagClick(stage, "mobile")}
        />
      </div>
      <div className="stage-title-cont">
        <span className="home" onClick={toggleActiveScreen}>
          Home
        </span>
        {stageTitles.map((stageText, index) => (
          <StageTitleWrapper
            key={`key-${stageText}-of-${index}`}
            onClick={() => handleStageTagClick(index)}
            isActive={index === stage}
          >
            <span className="arrow"> {" > "} </span>
            <span className="title"> {stageText} </span>
          </StageTitleWrapper>
        ))}
      </div>
      {stage === 1 ? (
        <FundYourCard selectedCard={selectedCard} />
      ) : (
        <CreateVirtualCardWrapper>
          <div className="form-title-cont">
            <h1>Customize your Card</h1>
            <Paragraph>
              What would you like to Identify your card as? This would help you
              identity your cards easily whne you have a couple of them.
            </Paragraph>
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              id={generateId()}
              label="Name your Card"
              placeholder="e.g dragon"
              value={cardDetails.cardName}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardName: e.target.value })
              }
            />
            <Input
              id={generateId()}
              label="Enter your preferred billing Address"
              placeholder="e.g your house address"
              value={cardDetails.billingAddress}
              onChange={(e) =>
                setCardDetails({
                  ...cardDetails,
                  billingAddress: e.target.value,
                })
              }
            />
            <Button disabled={!formIsFilled} btnText="Proceed" mt="4.5rem" />
          </form>
          <ChooseCardDesign
            showModal={showChooseCardModal}
            closeModal={() => setShowChooseCardModal(false)}
            handleSelect={handleCardSelect}
          />
        </CreateVirtualCardWrapper>
      )}
    </MainWrapper>
  );
};

export default CreateVirtualCard;
