import React, { FormEvent, useState } from "react";
import Button from "../../../../components/atoms/Buttons";
import Input from "../../../../components/atoms/Forms/Input";
import { Paragraph } from "../../../../components/atoms/Typography";
import Modal from "../../../../components/molecules/Modal";
import {
  buyGiftCardsState,
  setBuyGiftcardConfirmModalStage,
  setShowConfirmationModal,
} from "../../../../Entity/BuyGiftCardsEntity";
import { CardAmountFormWrapper } from "../buyGiftCardStyles";
import ConfirmModal from "../widgets/confirmModal";

const EmailAndComments = () => {
  const [formField, setFormField] = useState({
    email: "",
    comment: "",
  });
  const isConfirmed = buyGiftCardsState.use().confirmed;

  const formIsfilled = Object.values(formField).every((field) => field !== "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmationModal(true);
    setFormField({ ...formField, email: "", comment: "" });
  };
  return (
    <CardAmountFormWrapper>
      <form onSubmit={handleSubmit} className="form-cont">
        <Input
          width="27rem"
          label="Enter your email address"
          placeholder="e.g you@gmail.com"
          type={"email"}
          value={formField.email}
          onChange={(e) =>
            setFormField({ ...formField, email: e.target.value })
          }
          mt="2rem"
        />
        <Input
          width="27rem"
          label="Comment"
          placeholder="e.g I love you"
          value={formField.comment}
          onChange={(e) =>
            setFormField({ ...formField, comment: e.target.value })
          }
          mt="2rem"
        />
        <div className="buy-giftCard-cta">
          <Paragraph> Payment is made with Naira wallet </Paragraph>
          <Button
            btnText="Buy GiftCard"
            disabled={!formIsfilled}
            type="submit"
            width="27rem"
            mt="1rem"
            mb="5rem"
          />
        </div>
      </form>
      <ConfirmModal />
    </CardAmountFormWrapper>
  );
};

export default EmailAndComments;
