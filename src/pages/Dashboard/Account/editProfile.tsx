import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Buttons";
import Input from "../../../components/atoms/Forms/Input";
import ProfilePics from "../../../components/atoms/ProfilePics";
import CameraIcon from "../../../components/atoms/vectors/CameraIcon";
import DashboardLayout from "../../../components/templates/MainLayout";
import { StageTitleWrapper } from "../../CreateVirtualCard/createVirtualCardStyles";
import { EditProfileWrapper } from "./accountStyles";

const EditProfile = () => {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState(["Profile", "Edit Profile"]);
  const [userData, setUserData] = useState({
    userName: "toyosil",
    fullname: "Omotoyosi Lawal",
    email: "toyosill15@gmail.com",
    phoneNumber: "0907 773 8544",
    dob: "24/06/1997",
  });

  const handleTabClick = (type: string) => {
    if (type === "Profile") {
      navigate("/profile");
    }
    return;
  };

  return (
    <DashboardLayout mobileChildPadding="0">
      <EditProfileWrapper>
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
        <div className="profile-pics">
          <ProfilePics
            width="7rem"
            height="7rem"
            imgUrl="/vectors/Avatar.svg"
          />
          <div className="camera">
            <CameraIcon />
          </div>
        </div>
        <div className="form-cont">
          <form action="">
            <Input
              label="username"
              value={userData.userName}
              showCheckIcon={userData.userName !== ""}
              onChange={(e) =>
                setUserData({ ...userData, userName: e.target.value })
              }
            />
            <Input
              label="Full Name"
              value={userData.fullname}
              readOnly
              inputClassName="disabled-input"
            />
            <Input
              label="Email address"
              value={userData.email}
              readOnly
              inputClassName="disabled-input"
            />
            <Input
              label="Phone Number"
              value={userData.phoneNumber}
              onChange={(e) =>
                setUserData({ ...userData, phoneNumber: e.target.value })
              }
            />
            <Input
              label="Date of Birth"
              value={userData.dob}
              onChange={(e) =>
                setUserData({ ...userData, dob: e.target.value })
              }
            />
            <Button btnText="Update Profile" mt="5rem" mb="6rem" />
          </form>
        </div>
      </EditProfileWrapper>
    </DashboardLayout>
  );
};

export default EditProfile;
