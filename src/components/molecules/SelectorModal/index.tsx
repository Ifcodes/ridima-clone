import React from "react";
import styled from "styled-components";
import ListItemWithRadio from "../../atoms/ListItemWithRadio";
import { ScrollableModalContent } from "../../atoms/ScrollableModalContent";
import { H1 } from "../../atoms/Typography";
import Modal from "../Modal";

const Content = styled.div<{ modalContentHeight?: string }>`
  height: ${({ modalContentHeight }) => modalContentHeight || "100%"};
  padding-bottom: 4rem;
  padding-top: 1rem;

  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.deepPurple};
    margin-bottom: 2rem;
  }
`;

type ServiceModalProps = {
  openModal: boolean;
  modalHeight?: string;
  mobileModalHeight?: string;
  modalWidth?: string;
  modalContentHeight?: string;
  title?: string;
  selectedOption?: string;
  closeModal?: Function;
  handleCloseBtn?: Function;
  onServiceClick?: Function;
  selectorList?: Array<string>;
};
const SelectorModal = ({
  openModal,
  selectedOption,
  title,
  selectorList,
  modalHeight,
  modalContentHeight,
  modalWidth,
  mobileModalHeight,
  closeModal = () => {},
  handleCloseBtn = () => {},
  onServiceClick = () => {},
}: ServiceModalProps) => {
  return (
    <Modal
      showModal={openModal}
      closeModal={closeModal}
      cardHeight={modalHeight}
      handleCloseBtn={handleCloseBtn}
      mobileCardHeight={mobileModalHeight}
      width={modalWidth}
    >
      <Content modalContentHeight={modalContentHeight}>
        <H1>{title}</H1>
        <ScrollableModalContent>
          {selectorList &&
            selectorList.map((option, index) => (
              <ListItemWithRadio
                key={`${option}-of-${index}`}
                text={option}
                onClick={() => onServiceClick(option, index as any)}
                isChecked={option === selectedOption}
              />
            ))}
        </ScrollableModalContent>
      </Content>
    </Modal>
  );
};

export default SelectorModal;
