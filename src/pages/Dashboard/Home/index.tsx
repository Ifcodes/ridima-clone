import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateVirtualCard from "../../CreateVirtualCard";

import DashboardLayout from "../../../components/templates/MainLayout";
import DefaultHomeScreen from "./defaultPage";

const Home = () => {
  const [activeScreen, setActiveScreen] = useState("default");

  return (
    <DashboardLayout>
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
