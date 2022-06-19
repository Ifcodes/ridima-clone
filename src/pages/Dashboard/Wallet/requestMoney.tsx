import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/templates/MainLayout";
import {
  clearSendMoneyStates,
  setConfirmSendMoneyModal,
  setSendMoneyKeypadModal,
  setSendMoneySuccessModal,
} from "../../../Entity/WalletEntities/SendMoneyEntity";
import { StageTitleWrapper } from "../../CreateVirtualCard/createVirtualCardStyles";
import SearchBox from "../../../components/atoms/SearchBox";
import { SendMoneyWrapper } from "./walletStyles";
import HorizontalLinedTitle from "../../../components/atoms/TitleWithHorizontalLine";
import { recentUsers } from "../../../utils/helpers/demoRecentUser";
import Button from "../../../components/atoms/Buttons";
import ConfirmSendMoneyModal from "./Widgets/confirmSendMoneyModal";
import SendMoneySuccessMsg from "./Widgets/sendMoneySuccessMsg";
import {
  clearRequestMoneyStates,
  setConfirmRequestMoneyModal,
} from "../../../Entity/WalletEntities/RequestMoneyEntity";
import ConfirmRequestMoneyModal from "./Widgets/confirmRequestMoneyModal";
import RequestMoneySuccessModal from "./Widgets/requestMoneySuccessModal";

const RequestMoney = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState(recentUsers);
  const [tabs, setTabs] = useState([
    "Quick Action",
    "Request Money",
    "Enter Amount",
    "Select Reciepient",
  ]);
  const [selectedUser, setSelectedUser] = useState({
    avatar: "",
    userName: "",
  });

  const handleTabClick = (type: string) => {
    if (type === "Request Money" || type === "Quick Action") {
      clearRequestMoneyStates();
      navigate("/wallet");
    }
    if (type === "Enter Amount") {
      navigate("/wallet");
    }
    return;
  };

  const handleUserSelect = (user: any) => {
    setUsers(users.filter((ur, index) => ur.userName === user.userName));
    setSelectedUser(user);
  };

  const removeImg = (selected: any) => {
    if (selectedUser.userName === "") {
      setUsers(users.filter((usr) => usr.userName !== selected.userName));
    } else {
      setSelectedUser({
        avatar: "",
        userName: "",
      });
      setUsers(recentUsers);
    }
    return;
  };

  return (
    <DashboardLayout>
      <SendMoneyWrapper>
        <StageTitleWrapper>
          <span className="home" onClick={() => navigate("/home")}>
            Home
          </span>
          {tabs.map((tab, index) => (
            <StageTitleWrapper
              key={`key-${tab}-of-${index}`}
              onClick={() => handleTabClick(tab)}
              isActive={index === tabs.length - 1}
            >
              <span className="arrow"> {" > "} </span>
              <span className="title"> {tab} </span>
            </StageTitleWrapper>
          ))}
        </StageTitleWrapper>
        <div className="searchbox-cont">
          <SearchBox
            bgColor="#F6F6F6"
            placeholder="Enter recepient username"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            borderRadius="3.125rem"
            width="100%"
            height="100%"
            placeholderColor="#BDBDBD"
            searchIconColor={searchValue ? "#7165E3" : ""}
            textSize="1rem"
          />
        </div>
        <div className="line-cont">
          <HorizontalLinedTitle text="Recent" />
        </div>
        <div className="users-wrapper">
          {users.map((account, index) => (
            <div key={`${account.userName}-${index}`} className="img-cont">
              <div className="remove-img" onClick={() => removeImg(index)}>
                -
              </div>
              <img
                src={account.avatar}
                alt=""
                onClick={() => handleUserSelect(account)}
              />
            </div>
          ))}
        </div>
        <Button
          btnText="Proceed"
          width="27rem"
          mt="9rem"
          disabled={selectedUser.userName === ""}
          onClick={() => setConfirmRequestMoneyModal(true)}
        />
        <ConfirmRequestMoneyModal userName={selectedUser.userName} />
        <RequestMoneySuccessModal
          closeModal={() => handleTabClick("Request Money")}
        />
      </SendMoneyWrapper>
    </DashboardLayout>
  );
};

export default RequestMoney;
