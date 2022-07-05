import React, {
  MouseEventHandler,
  useEffect,
  KeyboardEvent,
  useState,
} from "react";
import {
  keypadModalStates,
  setAmount,
  setSelectedDigits,
} from "../../../Entity/KeypadModalEntity";
import Button from "../../atoms/Buttons";
import MoneyInputField from "../../atoms/Forms/MoneyInputField";
import { H1 } from "../../atoms/Typography";
import ClearArrowIcon from "../../atoms/vectors/ClearArrowIcon";
import Modal from "../Modal";
import { KeypadModalWrapper } from "./keypadModalStyles";

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
  // const [amount, setAmount] = useState("");
  // const [selectedDigit, setSelectedDigits] = useState([""]);
  const amount = keypadModalStates.use().amount;
  const selectedDigit = keypadModalStates.use().selectedDigit;

  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0"];

  useEffect(() => {
    setAmount(selectedDigit.join(""));
  }, [selectedDigit]);

  const handleDigitClick = (type: string) => {
    if (amount.length <= 6) {
      setSelectedDigits(selectedDigit.concat(type));
    }

    return;
  };

  const handleDelete = () => {
    setSelectedDigits(selectedDigit.slice(0, selectedDigit.length - 1));
  };
  return (
    <Modal
      showModal={showModal}
      closeModal={closeModal}
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
            value={amount || "0"}
            readOnly={true}
            width={"80%"}
            valueIsPlaceholder={amount === ""}
          />
        </div>
        <div className="digits-cont">
          {digits.map((digit, index) => (
            <div
              key={digit}
              className="digit"
              onClick={() => handleDigitClick(digit)}
            >
              <span>{digit}</span>
            </div>
          ))}
          <div className="clear-btn" onClick={() => handleDelete()}>
            <ClearArrowIcon />
          </div>
        </div>
        {amount !== "" && (
          <Button btnText={ctaText} mt="3rem" onClick={handleBtnClick} />
        )}
      </KeypadModalWrapper>
    </Modal>
  );
};

export default KeypadModal;
