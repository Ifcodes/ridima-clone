import React, { ReactNode, useEffect, useState } from "react";
import { setUnreadNotifications } from "../../../Entity/NotificationsEntity";
import { notifications } from "../../../utils/helpers/notificationsList";
import Logout from "../../molecules/LogoutModal";
import TopNav from "../../molecules/TopNav";
import DashboardSideNav from "../../organisms/DashboardSideNav";
import { sideNavState } from "../../organisms/DashboardSideNav/dashboardSideNavEntity";
import MobileBottomNav from "../../organisms/MobileBottomNav";
import { LayoutWrapper } from "./StyledMainLayout";

const DashboardLayout = ({
  children,
  childPadding,
  mobileChildPadding,
}: {
  children: ReactNode;
  childPadding?: string;
  mobileChildPadding?: string;
}) => {
  const isCollapsed = sideNavState.use().isCollapsed;

  const filterUnread = () => {
    const notRead = notifications.filter((note) => note.read === false);
    setUnreadNotifications(notRead.length);
  };

  useEffect(() => {
    filterUnread();
  }, []);

  useEffect(() => {}, []);
  return (
    <LayoutWrapper
      padding={childPadding}
      mobilePadding={mobileChildPadding}
      isCollapsed={isCollapsed}
    >
      <DashboardSideNav />
      <main>
        <TopNav />
        <div className="child-cont">{children}</div>
        <MobileBottomNav />
      </main>
      <Logout />
    </LayoutWrapper>
  );
};

export default DashboardLayout;
