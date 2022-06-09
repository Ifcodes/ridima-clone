import React from "react";
import {
  checkRatesStates,
  setSelectedGiftCard,
  setShowSelectGiftCardModal,
} from "../../../Entity/CheckRatesEntity";
import CustomRadioButton from "../../atoms/CustomRadioButton";
import { ScrollableModalContent } from "../../atoms/ScrollableModalContent";
import { H1 } from "../../atoms/Typography";
import Modal from "../Modal";
import { SelectGiftCardModalWrapper } from "./selectGiftCardStyles";

const giftCards = [
  "Amazon",
  "American Express",
  "Apple",
  "Bloomingdale",
  "eBay",
  "Footlocker",
  "iTunes",
  "JCPenney",
  "Macy’s",
  "Nike",
  "Nordstorm",
];
const SelectGiftCardModal = () => {
  const openModal = checkRatesStates.use().showSelectGiftCardModal;
  const selectedCard = checkRatesStates.use().selectedGiftCard;

  return (
    <Modal
      showModal={openModal}
      closeModal={() => setShowSelectGiftCardModal(false)}
      showCloseBtn
      cardHeight="85%"
    >
      <SelectGiftCardModalWrapper>
        <H1>Select Giftcard</H1>
        <ScrollableModalContent>
          {giftCards.map((card, index) => (
            <div
              key={card}
              className="currency-cont"
              onClick={() => setSelectedGiftCard(card)}
            >
              <span className="currency">{card}</span>
              <CustomRadioButton
                isChecked={selectedCard === card}
                checkedColor={"#7165E3"}
              />
            </div>
          ))}
        </ScrollableModalContent>
      </SelectGiftCardModalWrapper>
    </Modal>
  );
};

export default SelectGiftCardModal;
