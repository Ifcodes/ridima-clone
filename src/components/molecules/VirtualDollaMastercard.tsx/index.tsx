import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { createdCard } from "../../../Entity/CreateVirtualCardEntity/CreatedVirtualCard";
import { CardProps } from "../../../types";
import Button from "../../atoms/Buttons";
import MasterCardLogo from "../../atoms/vectors/MasterCardLogo";
import ActiveCard from "./ActiveCard";
import CreateCard from "./createCard";
import { VirtualDollarCardWrapper } from "./styledCard";

const VirtualDollarMastercard = ({ onClick, onCardClick }: CardProps) => {
  const cardCreated = createdCard.use();
  const navigate = useNavigate();
  return (
    <VirtualDollarCardWrapper>
      {cardCreated ? (
        <ActiveCard onClick={() => {}} />
      ) : (
        <CreateCard onClick={onClick} onCardClick={onCardClick} />
      )}
    </VirtualDollarCardWrapper>
  );
};

export default VirtualDollarMastercard;
