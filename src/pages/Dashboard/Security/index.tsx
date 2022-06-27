import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircledBackground } from "../../../components/atoms/CircledBackground";
import ListItemCard from "../../../components/atoms/ListItemCard";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import ToggleButton from "../../../components/atoms/ToggleButton";
import ArrowRightIcon from "../../../components/atoms/vectors/ArrowRightIcon";
import PadlockIcon from "../../../components/atoms/vectors/PadlockIcon";
import PasswordCheckIcon from "../../../components/atoms/vectors/PassworCheckIcon";
import SecuritySafeIcon from "../../../components/atoms/vectors/SecuritySafeIcon";
import DashboardLayout from "../../../components/templates/MainLayout";
import {
  setChangeEmailModal,
  setChangeEmailSuccess,
} from "../../../Entity/ChangeEmailEntity";
import { setChangePasswordModal } from "../../../Entity/ChangePasswordEntity";
import {
  resetAllChangePinState,
  setChangePinModal,
} from "../../../Entity/ChangePinEntities";
import { StageTitleWrapper } from "../../CreateVirtualCard/createVirtualCardStyles";
import { SecurityPageWrapper } from "./securityStyles";
import ChangeEmailModal from "./Widgets/changeEmailModal";
import ChangeEmailSuccessMsg from "./Widgets/changeEmailSuccessMsg";
import ChangePasswordModal from "./Widgets/changePasswordModal";
import ChangePasswordSuccessMsg from "./Widgets/changePasswordSuccessMsg";
import ChangePinModal from "./Widgets/changePinModal";
import ChangePinSuccessMsg from "./Widgets/changePinSuccessModal";

const Security = () => {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState(["Profile", "Security"]);
  const [allowBiometrics, setAllowBiometrics] = useState(false);

  const actions = [
    {
      icon: PadlockIcon,
      title: "Change PIN",
    },
    {
      icon: PasswordCheckIcon,
      title: "Change Password",
    },
    {
      icon: PasswordCheckIcon,
      title: "Change Email Address",
    },
    {
      icon: SecuritySafeIcon,
      title: "Allow Biometrics",
    },
  ];

  const handleTabClick = (type: string) => {
    if (type === "Profile") {
      navigate("/profile");
    }
    return;
  };

  const switchBiometrics = () => {
    console.log("bio:", allowBiometrics);
    setAllowBiometrics(!allowBiometrics);
  };

  const handleActionClick = (action: string) => {
    if (action === "Change PIN") {
      setChangePinModal(true);
    }
    if (action === "Change Password") {
      setChangePasswordModal(true);
    }
    if (action === "Change Email Address") {
      setChangeEmailModal(true);
    }
    return;
  };

  const handleClosePinChangeSuccess = () => {
    resetAllChangePinState();
  };
  return (
    <DashboardLayout>
      <SecurityPageWrapper>
        <StageTitleWrapper>
          {tabs.map((tab, index) => (
            <StageTitleWrapper
              key={`key-${tab}-of-${index}`}
              onClick={() => handleTabClick(tab)}
              isActive={index === tabs.length - 1}
            >
              <span className="arrow"> {index !== 0 && " > "} </span>
              <span className="title"> {tab} </span>
            </StageTitleWrapper>
          ))}
        </StageTitleWrapper>
        <div className="title-cont">
          <HorizontalLinedTitle text="Security Settings" />
        </div>
        <div className="actions-cont">
          {actions.map((action, index) => (
            <ListItemCard
              key={action.title}
              alignItems="center"
              padding="2rem 1rem"
              titleFs="1rem"
              icon={
                <CircledBackground>
                  <action.icon />
                </CircledBackground>
              }
              title={action.title}
              lastIcon={
                index === 3 ? (
                  <ToggleButton
                    onToggle={switchBiometrics}
                    isActive={allowBiometrics}
                  />
                ) : (
                  <ArrowRightIcon />
                )
              }
              showTextBorder
              onCardClick={() => handleActionClick(action.title)}
            />
          ))}
        </div>
      </SecurityPageWrapper>
      <ChangePinModal />
      <ChangePinSuccessMsg closeModal={() => handleClosePinChangeSuccess()} />
      <ChangePasswordModal />
      <ChangePasswordSuccessMsg />
      <ChangeEmailModal />
      <ChangeEmailSuccessMsg />
    </DashboardLayout>
  );
};

export default Security;
