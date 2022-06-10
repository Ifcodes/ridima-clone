import React, { useState } from "react";
import Selector from "../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import AmazonEcodeLogo from "../../../components/atoms/vectors/AmazonEcodeLogo";
import AmazonLogoCircleLg from "../../../components/atoms/vectors/AmazonLogoCircleLg";
import SelectSubCategoryModal from "../../../components/molecules/SelectGiftCardSubCategoryModal";
import {
  checkRatesStates,
  setCheckRatesSubCatModal,
  setSelectedCurrencyForCheckRates,
  setSelectedSubCatForCheckRates,
} from "../../../Entity/CheckRatesEntity";
import { CheckRatesFormWrapper, IconWrapper } from "./checkRatesStyles";

const CardTypeAndSubCategory = () => {
  const checkRatesState = checkRatesStates.use();
  const selectedGiftCard = checkRatesState.selectedGiftCard;
  const selectedCategory = checkRatesState.selectedSubCategory;

  const showModal = checkRatesStates.use().showSelectedSubCategoryModal;
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      icon: AmazonLogoCircleLg,
      title: "Physical card",
    },
    {
      icon: AmazonEcodeLogo,
      title: "Ecode",
    },
  ];

  const handleSelectorClick = (category: string) => {
    setSelectedSubCatForCheckRates(category);
    setCheckRatesSubCatModal(false);
  };
  return (
    <CheckRatesFormWrapper>
      <div>
        <HorizontalLinedTitle text={`What type of ${selectedGiftCard}?`} />
      </div>
      <div className="card-type-cont">
        {cards.map((card, index) => (
          <div className="card-type">
            <IconWrapper
              onClick={() => setActiveCard(index)}
              iconIsSelected={index === activeCard}
            >
              <card.icon />
            </IconWrapper>
            <span>{card.title}</span>
          </div>
        ))}
      </div>
      <div className="title-cont">
        <HorizontalLinedTitle text={`Select Card Sub-category`} />
      </div>
      <div className="form-content">
        <Selector
          selectorTitle={selectedCategory || "Select currency"}
          onClick={() => setCheckRatesSubCatModal(true)}
        />
      </div>
      <SelectSubCategoryModal
        openModal={showModal}
        closeModal={() => setCheckRatesSubCatModal(false)}
        selectCategory={handleSelectorClick}
      />
    </CheckRatesFormWrapper>
  );
};

export default CardTypeAndSubCategory;
