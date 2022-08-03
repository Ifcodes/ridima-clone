import React, {
  MouseEventHandler,
  useEffect,
  KeyboardEvent,
  useState,
} from "react";
import {
  clearKeypadStates,
  keypadModalStates,
  setAmount,
  setSelectedDigits,
} from "../../../Entity/KeypadModalEntity";
import Button from "../../atoms/Buttons";
import MoneyInputField from "../../atoms/Forms/MoneyInputField";
import { H1 } from "../../atoms/Typography";
import ClearArrowIcon from "../../atoms/vectors/ClearArrowIcon";
import Modal from "../Modal";
import { DigitWrapper, KeypadModalWrapper } from "./keypadModalStyles";

const KeypadModal = ({
  modalTitle,
  showModal,
  closeModal,
  ctaText,
  handleBtnClick,
}: {
  modalTitle?: string;
  showModal: boolean;
  closeModal: Function;
  ctaText?: string;
  handleBtnClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const [delSelected, setdelSelected] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);
  const amount = Number(keypadModalStates.use().amount);
  const selectedDigit = keypadModalStates.use().selectedDigit;

  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0"];

  useEffect(() => {
    setAmount(selectedDigit.join(""));
  }, [selectedDigit]);

  const handleKeyHighlight = (number: string, type: string) => {
    if (type === "del") setdelSelected(true);
    else setSelectedNumber(number);
    setTimeout(() => {
      setSelectedNumber(null);
      setdelSelected(false);
    }, 100);
  };

  const handleDigitClick = (type: string) => {
    handleKeyHighlight(type, "");
    if (selectedDigit.length <= 6) {
      setSelectedDigits(selectedDigit.concat(type));
    }

    return;
  };

  const handleDelete = () => {
    handleKeyHighlight("", "del");
    setSelectedDigits(selectedDigit.slice(0, selectedDigit.length - 1));
  };

  const handleCloseModal = () => {
    closeModal();
    clearKeypadStates();
  };

  return (
    <Modal
      showModal={showModal}
      closeModal={() => {}} //helps handleCloseModal to perform as required. Do not remove unless you know what to you want to do.
      showCloseBtn
      handleCloseBtn={handleCloseModal}
      cardHeight={"80%"}
      mobileCardHeight={"90%"}
      width={"25%"}
    >
      <KeypadModalWrapper>
        <H1 color="#3F1E4B">{modalTitle}</H1>
        <div className="input-cont">
          <MoneyInputField
            placeholder="0"
            symbol="₦"
            value={amount.toLocaleString() || "0"}
            readOnly={true}
            width={"80%"}
            valueIsPlaceholder={amount === 0}
          />
        </div>
        <div className="digits-cont">
          {digits.map((digit, index) => (
            <DigitWrapper
              key={digit}
              isActive={digit === selectedNumber}
              onClick={() => handleDigitClick(digit)}
            >
              <span>{digit}</span>
            </DigitWrapper>
          ))}
          <DigitWrapper isActive={delSelected} onClick={() => handleDelete()}>
            <ClearArrowIcon />
          </DigitWrapper>
        </div>
        {amount !== 0 && (
          <Button btnText={ctaText} mt="2.5rem" onClick={handleBtnClick} />
        )}
      </KeypadModalWrapper>
    </Modal>
  );
};

export default KeypadModal;
