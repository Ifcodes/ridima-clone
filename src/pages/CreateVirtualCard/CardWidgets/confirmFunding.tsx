import React, { MouseEventHandler } from "react";
import Button from "../../../components/atoms/Buttons";
import { Paragraph } from "../../../components/atoms/Typography";
import Modal from "../../../components/molecules/Modal";
import {
  createVirtualCardState,
  setCreateVCardConfirmFundModal,
  setCreateVCardPinVerifyModal,
} from "../../../Entity/CreateVirtualCardEntity";
import { setCreatedVirtualCard } from "../../../Entity/CreateVirtualCardEntity/CreatedVirtualCard";
import CardTermsModal from "../../TradeGiftCard/SellGiftCard/ActiveGiftCardPage/Widgets/cardTermsModal";
import { CardTermsModalWrapper } from "../../TradeGiftCard/styledTradeGiftCard";

type ConfirmFundingProps = {
  nairaAmount?: number;
  currentExchangeRate?: number;
  setModalStage?: MouseEventHandler<HTMLButtonElement>;
};
const ConfirmFunding = ({
  nairaAmount,
  currentExchangeRate,
}: ConfirmFundingProps) => {
  const showModal = createVirtualCardState.use().showConfirmFundModal;

  const handleConfirmBtn = () => {
    setCreateVCardConfirmFundModal(false);
    setCreateVCardPinVerifyModal(true);
  };
  return (
    <Modal
      showModal={showModal}
      closeModal={() => setCreateVCardConfirmFundModal(false)}
      showCloseBtn
      handleCloseBtn={() => setCreateVCardConfirmFundModal(false)}
      mobileCardHeight={"45%"}
    >
      <CardTermsModalWrapper>
        <div className="title">
          <h1>Confrim</h1>
          <Paragraph>
            You will be debited a total of <b>NGN{nairaAmount}</b> for this
            transaction at today’s exchange rate of{" "}
            <b>NGN{currentExchangeRate} ≈$1.</b> Would you like to continue?
          </Paragraph>
        </div>

        <div className="btn-cont">
          <Button
            buttonBgType="modal"
            btnText="Proceed"
            onClick={() => handleConfirmBtn()}
            width="100%"
          />
        </div>
      </CardTermsModalWrapper>
    </Modal>
  );
};

export default ConfirmFunding;
