import React from "react";
import { useNavigate } from "react-router-dom";
import ProfilePics from "../../../components/atoms/ProfilePics";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { H1 } from "../../../components/atoms/Typography";
import ArrowRightIcon from "../../../components/atoms/vectors/ArrowRightIcon";
import LikeDislikeIcon from "../../../components/atoms/vectors/LikeDislikeIcon";
import MessageNotificationIcon from "../../../components/atoms/vectors/MessageNotficationIcon";
import SaveIcon from "../../../components/atoms/vectors/SaveIcon";
import DashboardLayout from "../../../components/templates/MainLayout";
import { AccountPageWrapper } from "./accountStyles";

const Profile = () => {
  const navigate = useNavigate();
  const contents = [
    { text: "Terms of Service", icon: SaveIcon },
    { text: "Customer Support", icon: MessageNotificationIcon },
    { text: "Share App", icon: LikeDislikeIcon },
  ];
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
          <button
            className="edit-btn"
            onClick={() => navigate("/profile/edit-profile")}
          >
            Edit Profile
          </button>
        </div>
        <div className="hr-line">
          <hr />
        </div>
        <div className="content-wrapper">
          {contents.map((content, index) => (
            <div key={content.text} className="content">
              <div className="icon-cont">
                <div className="content-icon">
                  <content.icon />
                </div>
                <span className="content-text">{content.text}</span>
              </div>
              <div className="arrow">
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
