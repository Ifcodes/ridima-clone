import React from "react";
import styled from "styled-components";
import ListItemWithRadio from "../../atoms/ListItemWithRadio";
import { ScrollableModalContent } from "../../atoms/ScrollableModalContent";
import { H1 } from "../../atoms/Typography";
import Modal from "../Modal";

const Content = styled.div`
  height: 100%;
  padding-bottom: 4rem;
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
  title?: string;
  selectedOption?: string;
  closeModal?: Function;
  onServiceClick?: Function;
  selectorList?: Array<string>;
};
const SelectorModal = ({
  openModal,
  selectedOption,
  title,
  selectorList,
  modalHeight,
  modalWidth,
  mobileModalHeight,
  closeModal = () => {},
  onServiceClick = () => {},
}: ServiceModalProps) => {
  return (
    <Modal
      showModal={openModal}
      closeModal={closeModal}
      cardHeight={modalHeight}
      mobileCardHeight={mobileModalHeight}
      width={modalWidth}
      showCloseBtn
    >
      <Content>
        <H1>{title}</H1>
        <ScrollableModalContent>
          {selectorList &&
            selectorList.map((option, index) => (
              <ListItemWithRadio
                key={`${option}-of-${index}`}
                text={option}
                onClick={() => onServiceClick(option)}
                isChecked={option === selectedOption}
              />
            ))}
        </ScrollableModalContent>
      </Content>
    </Modal>
  );
};

export default SelectorModal;
