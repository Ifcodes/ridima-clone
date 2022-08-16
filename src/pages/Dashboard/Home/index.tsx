import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateVirtualCard from "../../CreateVirtualCard";

import DashboardLayout from "../../../components/templates/MainLayout";
import DefaultHomeScreen from "./defaultPage";
import PageMask from "../../../components/molecules/PageMask";

const Home = () => {
  const [isDisabled] = useState(false);
  const [activeScreen, setActiveScreen] = useState("default");

  return (
    <DashboardLayout mobileChildPadding="0">
      {isDisabled && <PageMask />}

      {activeScreen === "default" && (
        <DefaultHomeScreen
          toggleActiveScreen={() => setActiveScreen("createVirtualCard")}
        />
      )}
      {activeScreen === "createVirtualCard" && (
        <CreateVirtualCard
          toggleActiveScreen={() => setActiveScreen("default")}
        />
      )}
    </DashboardLayout>
  );
};

export default Home;
