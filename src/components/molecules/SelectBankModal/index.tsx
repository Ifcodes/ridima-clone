import React from "react";
import styled from "styled-components";
import { banks } from "../../../utils/helpers/bankList";
import { ScrollableModalContent } from "../../atoms/ScrollableModalContent";
import Modal from "../Modal";
import {
  selectBankStates,
  setSelectBank,
  setShowSelectBankModal,
} from "./selectBankEntity";

const ListItemWrapper = styled.div<{ isActive?: boolean }>`
  width: 100%;
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.625rem;
  margin-top: 1.5rem;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.grey6 : ""};
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
    color: ${(props) => props.theme.colors.grey1};
  }
`;

const SelectBankModal = ({
  handleSelectBank = () => {},
}: {
  handleSelectBank?: Function;
}) => {
  const showModal = selectBankStates.use().showSelectBankModal;
  const selectedBank = selectBankStates.use().selectedBank;

  const closeModal = () => {
    setShowSelectBankModal(true);
    setSelectBank("");
  };
  return (
    <Modal
      showModal={showModal}
      closeModal={() => setShowSelectBankModal(false)}
      handleCloseBtn={() => closeModal()}
      cardHeight="38rem"
      mobileCardHeight="38rem"
    >
      <ScrollableModalContent height="36rem">
        {banks.map((bank) => (
          <ListItemWrapper
            key={bank}
            isActive={bank === selectedBank}
            onClick={() => handleSelectBank(bank)}
          >
            <span>{bank}</span>
          </ListItemWrapper>
        ))}
      </ScrollableModalContent>
    </Modal>
  );
};

export default SelectBankModal;
