import React, { ChangeEvent, FormEvent, useState } from "react";
import { CircleLoader, ClipLoader, DotLoader } from "react-spinners";
import { css } from "@emotion/react";
import Button from "../../../components/atoms/Buttons";
import Input from "../../../components/atoms/Forms/Input";
import { setProfileComplete } from "../../../Entity/ProfileComplete";
import MiniFormCard from "../../../components/molecules/MiniFormCard";
import Modal from "../../../components/molecules/Modal";
import AuthLayout from "../../../components/templates/AuthLayout";
import { generateId } from "../../../utils/generateId";
import { BvnAuthModalContent } from "./styledBvnAuth";
import BvnVerificationSuccessCard from "./successMessageCard";
import { navigateHome } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";

const BVNAuthentication = () => {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confirmedSendCode, setConfirmedSendCode] = useState(false);
  const [bvnFormField, setBvnFormField] = useState({
    firstName: "",
    lastName: "",
    bvn: "",
    dob: "",
  });

  const formIsfilled = Object.values(bvnFormField).every(
    (field) => field !== ""
  );

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>, val: string) => {
    setBvnFormField({ ...bvnFormField, [val]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!confirmedSendCode) setShowModal(true);
    // setCurrentStage(currentStage + 1)
  };

  const sendCode = () => {
    setShowModal(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCurrentStage(1);
      setProfileComplete(true);
    }, 6000);
  };

  const handleBackButton = (type: string) => {
    if (type === "back" || type === "close") {
      navigate("/home");
    }
    return;
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #3f1e4b;
  `;
  return (
    <AuthLayout
      light={true}
      secondaryAuth={true}
      forPasswordReset={true}
      showLogo={currentStage < 1}
      showArrowLeftBtn={currentStage < 1}
      showCloseIcon={currentStage === 1}
      handleCloseIcon={handleBackButton}
    >
      {currentStage === 1 ? (
        <BvnVerificationSuccessCard />
      ) : (
        <MiniFormCard
          cardHeight="80vh"
          cardTitle="BVN Verification"
          cardTitleDescription="Enter the details of your BVN to unlock the rest of Ridima features."
          btnText={loading ? "Verifying BVN" : "Verify BVN"}
          secondaryCtaText="What are my benefits?"
          btnIsDisabled={!formIsfilled}
          handleSubmit={(e) => handleSubmit(e)}
          btnSuffix={
            <ClipLoader
              color="white"
              loading={loading}
              css={override}
              size={35}
            />
          }
        >
          <Input
            id={generateId()}
            label="First name"
            placeholder="e.g Omotoyosi"
            type="text"
            required
            value={bvnFormField.firstName}
            onChange={(e) => handleFormChange(e, "firstName")}
          />

          <Input
            id={generateId()}
            label="Last name"
            placeholder="e.g Lawal"
            type="text"
            required
            value={bvnFormField.lastName}
            onChange={(e) => handleFormChange(e, "lastName")}
          />

          <Input
            id={generateId()}
            label="BVN"
            placeholder="e.g 1234567890"
            type="text"
            required
            minLength={10}
            maxLength={10}
            value={bvnFormField.bvn}
            onChange={(e) => handleFormChange(e, "bvn")}
          />
          <Input
            id={generateId()}
            label="Date of Birth"
            placeholder="e.g DD/MM/YYYY"
            type="text"
            required
            value={bvnFormField.dob}
            onChange={(e) => handleFormChange(e, "dob")}
          />
        </MiniFormCard>
      )}
      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        showCloseBtn={true}
      >
        <BvnAuthModalContent>
          <div className="title-cont">
            <h3>Benefits for adding your BVN number.</h3>
            <ol>
              <li>
                Get access to a virtual bank account for transfers, funding and
                more.
              </li>
              <li>Virtual debit card for online purchases.</li>
            </ol>
          </div>
          <Button
            buttonBgType="modal"
            btnText="Send code"
            mt="0"
            mb="3rem"
            width={"100%"}
            onClick={() => sendCode()}
          />
        </BvnAuthModalContent>
      </Modal>
    </AuthLayout>
  );
};

export default BVNAuthentication;
