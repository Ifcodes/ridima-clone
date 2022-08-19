import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutState, setLogout } from "../../../Entity/LogoutEntity";
import Button from "../../atoms/Buttons";
import Modal from "../Modal";
import { LogoutModalWrapper } from "./logoutStyles";

const Logout = () => {
  const showModal = logoutState.use();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    setLogout(false);
    console.log(showModal);
  };

  return (
    <Modal
      showModal={showModal}
      closeModal={() => setLogout(false)}
      showCloseBtn
      // handleCloseBtn={() => setLogout(false)}
      width={"25%"}
      cardHeight="25rem"
      mobileCardHeight="25rem"
    >
      <LogoutModalWrapper>
        <div className="logout-text-wrapper">
          <span>Do you want to Logout?</span>
        </div>
        <div className="logout-btn-wrapper">
          <Button
            buttonBgType="modalSm"
            btnText="Logout"
            width="100%"
            onClick={() => handleLogout()}
          />
          <Button
            bgColor="white"
            lineColor="#F5CF48"
            buttonBgType="reversedModal"
            btnText="Cancel"
            onClick={() => setLogout(false)}
            width="100%"
            mt="0"
          />
        </div>
      </LogoutModalWrapper>
    </Modal>
  );
};

export default Logout;
