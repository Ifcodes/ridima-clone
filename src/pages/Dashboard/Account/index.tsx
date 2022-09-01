import React from "react";
import { useNavigate } from "react-router-dom";
import { CircledBackground } from "../../../components/atoms/CircledBackground";
import ProfilePics from "../../../components/atoms/ProfilePics";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { H1 } from "../../../components/atoms/Typography";
import ArrowRightIcon from "../../../components/atoms/vectors/ArrowRightIcon";
import LikeDislikeIcon from "../../../components/atoms/vectors/LikeDislikeIcon";
import LogoutIconFilled from "../../../components/atoms/vectors/LogoutIconFilled";
import MessageNotificationIcon from "../../../components/atoms/vectors/MessageNotficationIcon";
import ReferralIcon from "../../../components/atoms/vectors/ReferralIcon";
import SaveIcon from "../../../components/atoms/vectors/SaveIcon";
import ShieldIcon from "../../../components/atoms/vectors/ShieldIcon";
import Logout from "../../../components/molecules/LogoutModal";
import DashboardLayout from "../../../components/templates/MainLayout";
import { clearCreateCard } from "../../../Entity/CreateVirtualCardEntity/CreatedVirtualCard";
import { setLogout } from "../../../Entity/LogoutEntity";
import { clearProfileComplete } from "../../../Entity/ProfileComplete";
import { AccountPageWrapper } from "./accountStyles";

const Profile = () => {
  const navigate = useNavigate();
  const actions = [
    { text: "Terms of Service", icon: SaveIcon },
    { text: "Customer Support", icon: MessageNotificationIcon },
    { text: "Download Mobile App", icon: LikeDislikeIcon },
  ];
  const mobileActions = [
    { text: "Security", icon: ShieldIcon, location: "/security" },
    { text: "Logout", icon: LogoutIconFilled },
  ];

  const handleMobileActionClick = (type: string, location?: string) => {
    if (type === "Logout") {
      setLogout(true);
      clearProfileComplete();
      clearCreateCard();
    } else if (location) {
      navigate(location);
    }
  };
  return (
    <DashboardLayout>
      <AccountPageWrapper>
        <H1>Account</H1>
        <div className="profile-detail">
          <div className="img-cont">
            <ProfilePics
              imgUrl="/vectors/Avatar.svg"
              width="5.5rem"
              height="5.5rem"
            />
            <div className="profile-name-cont">
              <span className="profile-name">Omotoyosi lawal</span>
              <span className="user-handle">@toyosil</span>
            </div>
          </div>
          <div
            className="edit-btn"
            onClick={() => navigate("/profile/edit-profile")}
          >
            Edit Profile
          </div>
          <div
            className="edit-arrow"
            onClick={() => navigate("/profile/edit-profile")}
          >
            <ArrowRightIcon />
          </div>
        </div>

        <div className="content-wrapper">
          {actions.map((content, index) => (
            <div key={content.text} className="content">
              <div className="icon-cont">
                <CircledBackground
                  bgColor="rgb(248, 247, 254)"
                  border="1px solid rgba(113, 101, 227, .1)"
                >
                  <content.icon />
                </CircledBackground>
                <span className="content-text">{content.text}</span>
              </div>
              <div className="arrow">
                <ArrowRightIcon />
              </div>
            </div>
          ))}
        </div>
        <div className="mobile-actions">
          {mobileActions.map((action, index) => (
            <div
              key={action.text}
              className="content"
              onClick={() =>
                handleMobileActionClick(action.text, action.location)
              }
            >
              <div className="icon-cont">
                <CircledBackground
                  bgColor={action.text === "Logout" ? "#E81313" : ""}
                >
                  <action.icon />
                </CircledBackground>
                <span className="content-text">{action.text}</span>
              </div>
              <div className={action.text === "Logout" ? "logout" : "arrow"}>
                <ArrowRightIcon />
              </div>
            </div>
          ))}
        </div>
      </AccountPageWrapper>
    </DashboardLayout>
  );
};

export default Profile;
