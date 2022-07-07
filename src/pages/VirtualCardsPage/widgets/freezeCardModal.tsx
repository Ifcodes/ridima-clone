import React, { useState } from "react";
import Button from "../../../components/atoms/Buttons";
import { H1, Paragraph } from "../../../components/atoms/Typography";
import Modal from "../../../components/molecules/Modal";
import PinVerificationCard from "../../../components/molecules/PinVerificationModal";
import { user } from "../../../Entity/User";
import { handlePinChange } from "../../../utils/helpers";
import { FreezeCardWrapper } from "../styledVirtualCards";

const FreezeCardModal = ({
  showModal,
  closeModal,
}: {
  showModal: boolean;
  closeModal: Function;
}) => {
  const userDetails = user.use();
  const [modalStage, setModalStage] = useState(0);
  const [pinModalStage, setPinModalStage] = useState(0);
  const [pin, setPin] = useState("");

  const handlePinVerificationDone = () => {
    closeModal();
    setModalStage(0);
    setPin("");
  };

  const verifyPin = () => {
    setTimeout(() => {
      setPinModalStage(pinModalStage + 1);
    }, 4000);
  };

  return (
    <Modal
      width="30%"
      cardHeight="95vh"
      showModal={showModal}
      showCloseBtn
      closeModal={closeModal}
    >
      {modalStage === 1 ? (
        <PinVerificationCard
          imgUrl={userDetails.profileImage}
          user={userDetails.userName}
          pin={pin}
          handlePinInput={(val: string) => handlePinChange(val, setPin)}
          pvMessageTitle="Super Smoooth!"
          pvMessage="You’ve successfully created your virtual US Dollar card. You can start paying online."
          pvMessageBtnText="Done"
          pvBtnAction={() => handlePinVerificationDone()}
          handlePinSubmit={verifyPin}
          pinModalStage={pinModalStage}
        />
      ) : (
        <FreezeCardWrapper>
          <div className="heading">
            <H1>Confirm</H1>
            <Paragraph>
              Freezing this card would make it inactive. Are you sure you want
              to Freeze this card?
            </Paragraph>
          </div>
          <Button
            buttonBgType="modal"
            btnText="Proceed"
            onClick={() => setModalStage(modalStage + 1)}
            width="100%"
            mobileWidth="100%"
          />
        </FreezeCardWrapper>
      )}
    </Modal>
  );
};

export default FreezeCardModal;
