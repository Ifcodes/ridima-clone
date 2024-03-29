import React, { useState } from "react";
import Selector from "../../../components/atoms/Selector";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import AmazonEcodeLogo from "../../../components/atoms/vectors/AmazonEcodeLogo";
import AmazonLogoCircleLg from "../../../components/atoms/vectors/AmazonLogoCircleLg";
import EcodeCardTypeCircle from "../../../components/atoms/vectors/EcodeCardTypeCircle";
import PhysicalCardCircleIcon from "../../../components/atoms/vectors/PhysicalCardCirlcleIcon";
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
      icon: PhysicalCardCircleIcon,
      title: "Physical card",
    },
    {
      icon: EcodeCardTypeCircle,
      title: "Ecode",
    },
  ];

  const handleSelectorClick = (category: string) => {
    setSelectedSubCatForCheckRates(category);
    setCheckRatesSubCatModal(false);
  };
  return (
    <CheckRatesFormWrapper>
      <div className="hr-line-title">
        <HorizontalLinedTitle text={`What type of ${selectedGiftCard}?`} />
      </div>
      <div className="card-type-cont">
        {cards.map((card, index) => (
          <div className="card-type" key={`${index}-${card.title}`}>
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
      <div className="hr-line-title">
        <HorizontalLinedTitle text={`Select Card Sub-category`} />
      </div>
      <div className="form-content">
        <Selector
          selectorTitle={selectedCategory || "Select Sub-category"}
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
