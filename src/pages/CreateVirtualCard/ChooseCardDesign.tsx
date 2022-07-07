import React, { MouseEventHandler } from "react";
import Button from "../../components/atoms/Buttons";
import CardDesigns from "../../components/atoms/DebitCardDesigns";
import Modal from "../../components/molecules/Modal";

const ChooseCardDesign = ({
  showModal,
  closeModal,
  handleSelect = () => {},
}: {
  showModal: boolean;
  closeModal: Function;
  handleSelect?: Function;
}) => {
  const cardDesigns = [
    {
      cardType: "Basic",
      cardBg: "grey",
    },
    {
      cardType: "Standard",
      cardBg: "blue",
    },
    {
      cardType: "Gold",
      cardBg: "yellow",
    },
  ];
  return (
    <Modal
      showModal={showModal}
      closeModal={closeModal}
      cardHeight={"95vh"}
      width={"28%"}
      maxWidth={"30rem"}
    >
      <div className="card-design-content">
        <h1>Choose Card Design</h1>
        <div className="cards-wrapper">
          {cardDesigns.map((card, index) => (
            <div
              key={`card-${card.cardBg}-${index}`}
              className="card-cont"
              onClick={() => handleSelect("card", card.cardBg)}
            >
              <CardDesigns cardBgColor={card.cardBg} />
              <p>{card.cardType}</p>
            </div>
          ))}
        </div>
        <div className="btn-cont">
          <Button
            buttonBgType="modal"
            btnText="Select"
            width="100%"
            onClick={() => handleSelect("button")}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ChooseCardDesign;
